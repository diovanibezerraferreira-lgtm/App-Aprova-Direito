import { initializeApp, getApps, getApp, cert, type App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, initializeFirestore, type Firestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import path from 'path';

const DEFAULT_PROJECT_ID = 'gen-lang-client-0793753103';
const DEFAULT_DATABASE_ID = 'ai-studio-aprovadireito-858e292a-4f1d-4483-a130-1a8041386c5a';

let cachedApp: App | null = null;
let cachedTokenVerifyApp: App | null = null;
let cachedFirestore: Firestore | null = null;
let cachedFirestoreDbId: string | null = null;
let lastAdminInitError: string | null = null;

function cleanEnvValue(value?: string): string {
  if (!value) return '';
  let trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    trimmed = trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function normalizePrivateKey(rawKey?: string): string {
  let key = cleanEnvValue(rawKey);
  if (!key) return '';
  key = key.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n').replace(/\r\n/g, '\n');
  return key;
}

function parseServiceAccountJson(rawJson: string): any {
  const cleaned = cleanEnvValue(rawJson);
  try {
    const parsed = JSON.parse(cleaned);
    if (parsed && typeof parsed.private_key === 'string') {
      parsed.private_key = normalizePrivateKey(parsed.private_key);
    }
    return parsed;
  } catch {
    // Support Base64-encoded service account JSON
    const decoded = Buffer.from(cleaned, 'base64').toString('utf-8');
    const parsed = JSON.parse(decoded);
    if (parsed && typeof parsed.private_key === 'string') {
      parsed.private_key = normalizePrivateKey(parsed.private_key);
    }
    return parsed;
  }
}

function getConfigFromFile(): { projectId?: string; firestoreDatabaseId?: string } {
  try {
    const configPath = path.resolve(process.cwd(), 'firebase-applet-config.json');
    const raw = readFileSync(configPath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function getTargetProjectId(): string {
  const fileConfig = getConfigFromFile();
  return (
    cleanEnvValue(process.env.FIREBASE_PROJECT_ID) ||
    fileConfig.projectId ||
    DEFAULT_PROJECT_ID
  );
}

function getTargetDatabaseId(): string {
  const fileConfig = getConfigFromFile();
  return (
    cleanEnvValue(process.env.FIRESTORE_DATABASE_ID) ||
    fileConfig.firestoreDatabaseId ||
    DEFAULT_DATABASE_ID
  );
}

export function hasAdminCredentials(): boolean {
  const saJson = cleanEnvValue(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  const clientEmail = cleanEnvValue(process.env.FIREBASE_CLIENT_EMAIL);
  const privateKey = normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY);
  const gac = cleanEnvValue(process.env.GOOGLE_APPLICATION_CREDENTIALS);
  return Boolean(saJson || (clientEmail && privateKey) || gac);
}

export function getFirebaseAdminDiagnostics() {
  const saJson = cleanEnvValue(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  const clientEmail = cleanEnvValue(process.env.FIREBASE_CLIENT_EMAIL);
  const privateKey = normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY);

  return {
    projectId: getTargetProjectId(),
    databaseId: getTargetDatabaseId(),
    hasServiceAccountJson: Boolean(saJson),
    hasClientEmail: Boolean(clientEmail),
    hasPrivateKey: Boolean(privateKey && privateKey.includes('PRIVATE KEY')),
    isVercel: process.env.VERCEL === '1' || Boolean(process.env.VERCEL_ENV),
    lastAdminInitError,
  };
}

export function getFirebaseAdminApp(): App | null {
  if (cachedApp) {
    return cachedApp;
  }

  try {
    const existingApps = getApps();
    const defaultExisting = existingApps.find((a) => a.name === '[DEFAULT]');
    if (defaultExisting) {
      cachedApp = defaultExisting;
      return cachedApp;
    }

    const projectId = getTargetProjectId();
    const serviceAccountJson = cleanEnvValue(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    const clientEmail = cleanEnvValue(process.env.FIREBASE_CLIENT_EMAIL);
    const privateKey = normalizePrivateKey(process.env.FIREBASE_PRIVATE_KEY);

    if (serviceAccountJson) {
      const parsed = parseServiceAccountJson(serviceAccountJson);
      cachedApp = initializeApp({
        credential: cert(parsed),
        projectId: parsed.project_id || projectId,
      });
      lastAdminInitError = null;
      return cachedApp;
    }

    if (clientEmail && privateKey) {
      if (!privateKey.includes('BEGIN') || !privateKey.includes('PRIVATE KEY')) {
        lastAdminInitError =
          'FIREBASE_PRIVATE_KEY em formato inválido (esperado PEM com BEGIN/END PRIVATE KEY).';
        console.error(lastAdminInitError);
        return null;
      }
      cachedApp = initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
        projectId,
      });
      lastAdminInitError = null;
      return cachedApp;
    }

    // Do NOT silently fall back to GCE metadata lookup on Vercel without credentials:
    // querying 169.254.169.254 on AWS Lambda hangs Firestore calls until 408/504 timeout.
    const isVercel = process.env.VERCEL === '1' || Boolean(process.env.VERCEL_ENV);
    const hasGac = Boolean(cleanEnvValue(process.env.GOOGLE_APPLICATION_CREDENTIALS));
    if (isVercel && !hasGac) {
      lastAdminInitError =
        'Credenciais do Firebase Admin não configuradas (defina FIREBASE_SERVICE_ACCOUNT_KEY ou FIREBASE_CLIENT_EMAIL + FIREBASE_PRIVATE_KEY).';
      console.error(lastAdminInitError);
      return null;
    }

    // GCP / Cloud Run ADC fallback
    cachedApp = initializeApp({ projectId });
    lastAdminInitError = null;
    return cachedApp;
  } catch (err: any) {
    lastAdminInitError = err?.message || 'Falha desconhecida ao inicializar Firebase Admin SDK.';
    console.error('Erro ao inicializar Firebase Admin SDK:', lastAdminInitError);
    return null;
  }
}

/**
 * Returns a Firestore Admin instance forced to HTTP/1.1 REST transport (`preferRest: true`).
 * Using REST instead of gRPC prevents cold-start channel/HTTP2 stalls and 408 timeouts
 * in serverless runtimes like Vercel.
 */
export function getAdminFirestore(): Firestore | null {
  const app = getFirebaseAdminApp();
  if (!app) return null;

  const dbId = getTargetDatabaseId();
  if (cachedFirestore && cachedFirestoreDbId === dbId) {
    return cachedFirestore;
  }

  try {
    cachedFirestore = dbId
      ? initializeFirestore(app, { preferRest: true }, dbId)
      : initializeFirestore(app, { preferRest: true });
    cachedFirestoreDbId = dbId;
    return cachedFirestore;
  } catch (err: any) {
    // initializeFirestore throws if the Firestore instance for this (app, dbId) was already created
    try {
      cachedFirestore = dbId ? getFirestore(app, dbId) : getFirestore(app);
      cachedFirestoreDbId = dbId;
      return cachedFirestore;
    } catch (fallbackErr: any) {
      console.warn('Aviso ao obter Firestore Admin para databaseId:', dbId, err?.message || fallbackErr);
      return null;
    }
  }
}

function getTokenVerificationApp(): App | null {
  const adminApp = getFirebaseAdminApp();
  if (adminApp) return adminApp;

  if (cachedTokenVerifyApp) return cachedTokenVerifyApp;

  try {
    const projectId = getTargetProjectId();
    const existing = getApps().find((a) => a.name === 'token-verifier');
    cachedTokenVerifyApp = existing || initializeApp({ projectId }, 'token-verifier');
    return cachedTokenVerifyApp;
  } catch (err) {
    console.warn('Erro ao criar app auxiliar para verificação de token:', err);
    return null;
  }
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

  const app = getTokenVerificationApp();
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
