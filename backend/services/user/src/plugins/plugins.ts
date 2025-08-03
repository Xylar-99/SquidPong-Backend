import { FastifyInstance } from 'fastify';
import multipart from '@fastify/multipart';




export default async function registerPlugins(app:FastifyInstance) 
{
   await app.register(multipart, {
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 1,
    fields: 3
  }
});


}