import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

export default async function corsPlugin(app: FastifyInstance) {
  await app.register(cors, {
    origin: (origin : any, cb : any) => {
      // Always allow the requesting origin (required for credentials: true)
      // If no origin (like Postman), allow it
      if (!origin) {
        cb(null, true);
        return;
      }
      // Return the specific origin (required when credentials: true)
      cb(null, origin);
    },
    credentials: true, // Allow cookies and authorization headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With', 'Accept', 'Origin'],
    exposedHeaders: ['set-cookie', 'Set-Cookie'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    strictPreflight: false
  });
}
