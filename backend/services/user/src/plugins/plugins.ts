import { FastifyInstance } from 'fastify';
import multipart from '@fastify/multipart';




export default async function registerPlugins(app:FastifyInstance) 
{
    app.register(multipart);

}