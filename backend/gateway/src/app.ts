import {fastify , FastifyInstance} from 'fastify';
import {authRoutes } from './routes/auth';
import {gatewayRoutes} from './routes/proxy'
import { errorHandler } from './utils/errorHandler';
import registerPlugins from './plugins/plugins'



const app: FastifyInstance = fastify();
export default app;
registerPlugins(app);


const routes = [...gatewayRoutes ,  ...authRoutes]


routes.forEach(route => {app.route(route)})
app.setErrorHandler(errorHandler)

