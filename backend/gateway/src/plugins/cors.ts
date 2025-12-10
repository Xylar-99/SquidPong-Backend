import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

export default async function corsPlugin(app: FastifyInstance) {
  await app.register(cors, {
    origin: (origin : any, cb : any) => {
      // Allow all origins
      cb(null, true);
    },
    credentials: true, // Allow cookies and authorization headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['set-cookie'],
    preflightContinue: false,
    optionsSuccessStatus: 204
  });
}
