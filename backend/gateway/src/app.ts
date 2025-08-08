import { fastify, FastifyInstance } from 'fastify';
import { authenticateUser } from './validators/middleware';
import { authRoutes , twofaRoutes } from './routes/auth';
import { errorHandler } from './utils/errorHandler';
import registerPlugins from './plugins/plugins';


const app: FastifyInstance = fastify();
export default app;


registerPlugins(app);


app.register(async () => {authRoutes.forEach(route => app.route(route))});
app.register(async () => { twofaRoutes.forEach(route => app.route(route)); });


app.addHook('onRequest', authenticateUser);
app.addHook('onError', errorHandler);


