import fastifyReplyFrom from 'fastify-reply-from'
import { FastifyInstance } from 'fastify';



export default async function registerPlugins(app: FastifyInstance) 
{
    app.register(fastifyReplyFrom);
}
