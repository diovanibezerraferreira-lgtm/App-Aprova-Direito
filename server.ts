import express from 'express';
import http from 'http';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables (.env / .env.local)
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const isProd = process.env.NODE_ENV === 'production';
  const disableHmr = process.env.DISABLE_HMR === 'true';

  // Parse JSON bodies for API endpoints
  app.use('/api', express.json({ limit: '1mb' }));

  // Mount API endpoints matching Vercel serverless functions in /api/
  app.all('/api/create-subscription', async (req, res) => {
    try {
      const { default: handler } = await import('./api/create-subscription.js');
      await handler(req, res);
    } catch (err: any) {
      console.error('Error in /api/create-subscription:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: err.message || 'Internal server error' });
      }
    }
  });

  app.all('/api/webhook-asaas', async (req, res) => {
    try {
      const { default: handler } = await import('./api/webhook-asaas.js');
      await handler(req, res);
    } catch (err: any) {
      console.error('Error in /api/webhook-asaas:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: err.message || 'Internal server error' });
      }
    }
  });

  app.all('/api/subscription-status', async (req, res) => {
    try {
      const { default: handler } = await import('./api/subscription-status.js');
      await handler(req, res);
    } catch (err: any) {
      console.error('Error in /api/subscription-status:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: err.message || 'Internal server error' });
      }
    }
  });

  // Safe healthcheck endpoint (never leaks secret keys)
  app.get('/api/health', (_req, res) => {
    const hasAsaasKey = !!process.env.ASAAS_API_KEY;
    const hasWebhookToken = !!process.env.ASAAS_WEBHOOK_TOKEN;
    const asaasEnv = process.env.ASAAS_ENVIRONMENT || 'sandbox';

    res.json({
      status: 'ok',
      asaas: {
        configured: hasAsaasKey,
        environment: asaasEnv,
        hasWebhookToken,
      },
      timestamp: new Date().toISOString(),
    });
  });

  if (isProd) {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Dev mode with Vite middleware bound cleanly to the shared HTTP server
    // Attach server.ws to httpServer even when HMR is disabled so Vite 8 client
    // connects on the active server port instead of falling back to port 24678.
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        allowedHosts: true,
        hmr: disableHmr ? false : { server: httpServer },
        ws: { server: httpServer },
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(
      `Server running on http://0.0.0.0:${PORT} in ${isProd ? 'production' : 'development'} mode (HMR: ${disableHmr ? 'disabled' : 'attached'})`
    );
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
