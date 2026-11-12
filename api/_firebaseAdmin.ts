// Helper for Firebase Admin SDK initialization and verification
import admin from 'firebase-admin';

let initialized = false;

export function getFirebaseAdmin() {
  if (initialized && admin.apps.length > 0) {
    return admin;
  }

  try {
    if (admin.apps.length > 0) {
      initialized = true;
      return admin;
    }

    const projectId = process.env.FIREBASE_PROJECT_ID || 'gen-lang-client-0793753103';
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const rawKey = process.env.FIREBASE_PRIVATE_KEY;
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

    if (serviceAccountJson) {
      const parsed = JSON.parse(serviceAccountJson);
      admin.initializeApp({
        credential: admin.credential.cert(parsed),
        projectId: parsed.project_id || projectId
      });
      initialized = true;
    } else if (clientEmail && rawKey) {
      const privateKey = rawKey.replace(/\\n/g, '\n');
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey
        }),
        projectId
      });
      initialized = true;
    } else {
      // Fallback initialization with project ID (works in environments with default credentials or project scope)
      admin.initializeApp({
        projectId
      });
      initialized = true;
    }
  } catch (err) {
    console.warn('Notice initializing Firebase Admin:', err);
  }

  return admin;
}

export async function verifyFirebaseUser(req: any): Promise<{ uid: string; email: string; name?: string }> {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    throw new Error('Cabeçalho de autorização não fornecido ou inválido (formato: Bearer <token>)');
  }

  const idToken = authHeader.split('Bearer ')[1].trim();
  const fbAdmin = getFirebaseAdmin();

  try {
    const decoded = await fbAdmin.auth().verifyIdToken(idToken);
    return {
      uid: decoded.uid,
      email: decoded.email || '',
      name: decoded.name || ''
    };
  } catch (err: any) {
    console.error('Erro ao verificar token Firebase:', err);
    throw new Error(`Token de autenticação inválido ou expirado: ${err.message || 'não autorizado'}`);
  }
}

export async function getAdminDb() {
  const fbAdmin = getFirebaseAdmin();
  // Specify firestore database id if configured
  const dbId = process.env.FIRESTORE_DATABASE_ID || 'ai-studio-aprovadireito-858e292a-4f1d-4483-a130-1a8041386c5a';
  try {
    return fbAdmin.firestore();
  } catch {
    return fbAdmin.firestore();
  }
}
