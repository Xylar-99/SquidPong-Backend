import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

export default async function corsPlugin(app: FastifyInstance) {
  await app.register(cors, {
    origin: ['https://frontend-squid-ppong.vercel.app', 'http://localhost:3000'], // Specify exact origins
    credentials: true, // Allow cookies and authorization headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['set-cookie']
  });
}
