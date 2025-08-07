import { FastifyInstance , FastifyRequest, FastifyReply } from 'fastify'
import fastifyHttpProxy from '@fastify/http-proxy'
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

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


app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'My API',
      description: 'API documentation',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
});


app.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  staticCSP: true,
});


}
