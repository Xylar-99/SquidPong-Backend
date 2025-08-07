import { fastify, FastifyInstance } from 'fastify';
import { authenticateUser } from './validators/middleware';
import { authRoutes } from './routes/auth';
import { gatewayRoutes } from './routes/proxy';
import { errorHandler } from './utils/errorHandler';
import registerPlugins from './plugins/plugins';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

const app: FastifyInstance = fastify();
export default app;


app.register(fastifySwagger, {
 openapi: '3.0.0',
    info: {
      title: 'Test swagger',
      description: 'Testing the Fastify swagger API',
      version: '0.1.0'
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Development server'
      }
    ],
    tags: [
      { name: 'auth', description: 'User related end-points' },
    //   { name: 'auth', description: 'Code related end-points' }
    ],
 exposeRoute: true, 
 } as any); 
 


 app.register(fastifySwaggerUi, {
     routePrefix: '/docs'
 });
    

    
registerPlugins(app);

app.addHook('onRequest', authenticateUser);
app.addHook('onError', errorHandler);

authRoutes.forEach(route => { app.route(route);});

