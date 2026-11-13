import { initializeApp, getApps, getApp, cert, type App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import path from 'path';

function getConfigFromFile(): { projectId?: string; firestoreDatabaseId?: string } {
  try {
    const configPath = path.resolve(process.cwd(), 'firebase-applet-config.json');
    const raw = readFileSync(configPath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function getFirebaseAdminApp(): App | null {
  try {
    if (getApps().length > 0) {
      return getApp();
    }

    const fileConfig = getConfigFromFile();
    const projectId =
      process.env.FIREBASE_PROJECT_ID ||
      fileConfig.projectId ||
      'gen-lang-client-0793753103';

    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const rawKey = process.env.FIREBASE_PRIVATE_KEY;
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

    if (serviceAccountJson) {
      const parsed = JSON.parse(serviceAccountJson);
      return initializeApp({
        credential: cert(parsed),
        projectId: parsed.project_id || projectId,
      });
    }

    if (clientEmail && rawKey) {
      const privateKey = rawKey.replace(/\\n/g, '\n');
      return initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
        projectId,
      });
    }

    // Fallback initialization (works on GCP / Cloud Run with Application Default Credentials or token verification)
    return initializeApp({
      projectId,
    });
  } catch (err) {
    console.warn('Aviso ao inicializar Firebase Admin SDK:', err);
    return null;
  }
}

export function getAdminFirestore(): Firestore | null {
  const app = getFirebaseAdminApp();
  if (!app) return null;

  const fileConfig = getConfigFromFile();
  const dbId =
    process.env.FIRESTORE_DATABASE_ID ||
    fileConfig.firestoreDatabaseId ||
    'ai-studio-aprovadireito-858e292a-4f1d-4483-a130-1a8041386c5a';

  try {
    return dbId ? getFirestore(app, dbId) : getFirestore(app);
  } catch (err) {
    console.warn('Aviso ao obter Firestore Admin para databaseId:', dbId, err);
    try {
      return getFirestore(app);
    } catch {
      return null;
    }
  }
}

export function hasAdminCredentials(): boolean {
  return Boolean(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY ||
      (process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY)
  );
}

export async function verifyFirebaseUser(
  req: any
): Promise<{ uid: string; email: string; name?: string }> {
  const authHeader = req.headers?.authorization || req.headers?.Authorization;
  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    const err: any = new Error(
      'Cabeçalho de autorização não fornecido ou inválido (formato esperado: Bearer <token>).'
    );
    err.status = 401;
    throw err;
  }

  const idToken = authHeader.split('Bearer ')[1].trim();
  if (!idToken) {
    const err: any = new Error('Token de autenticação ausente.');
    err.status = 401;
    throw err;
  }

  const app = getFirebaseAdminApp();
  if (!app) {
    const err: any = new Error(
      'Firebase Admin SDK não inicializado no servidor. Configure as variáveis de ambiente do Firebase.'
    );
    err.status = 500;
    throw err;
  }

  try {
    const decoded = await getAuth(app).verifyIdToken(idToken);
    return {
      uid: decoded.uid,
      email: decoded.email || '',
      name: decoded.name || '',
    };
  } catch (err: any) {
    console.error('Erro ao verificar token Firebase:', err);
    const authErr: any = new Error(
      `Token de autenticação inválido ou expirado: ${err.message || 'não autorizado'}`
    );
    authErr.status = 401;
    throw authErr;
  }
}
