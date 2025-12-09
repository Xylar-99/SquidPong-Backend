import { fastify, FastifyInstance } from 'fastify';
import { authenticateUser } from './validators/middleware';
import { errorHandler } from './utils/errorHandler';

const app: FastifyInstance = fastify({
  ajv: {
    customOptions: {
      removeAdditional: false // Fix: Don't remove extra properties, throw errors instead
    }
  }
});

app.addHook('onRequest', authenticateUser);
app.addHook('onError', errorHandler);

export default app;
