import { FastifyInstance , FastifyRequest, FastifyReply } from 'fastify'
import fastifyHttpProxy from '@fastify/http-proxy'

export default async function registerProxy(app: FastifyInstance)
{
 
app.register(fastifyHttpProxy, {

  upstream: 'http://user:4001',
  prefix: '/api/user',
  rewritePrefix: '/api/user',
  http2: false,

  preHandler: async (req:any, reply:any) => {
    req.headers['x-user-id'] = req.id;
  },

}
);
}
