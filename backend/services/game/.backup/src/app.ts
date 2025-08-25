import {fastify , FastifyInstance} from 'fastify';
import {matchmakingRoutes } from './routes/game';
import { errorHandler } from './utils/errorHandler';
import registerPlugins from './plugins/plugins'

const app: FastifyInstance = fastify();
export default app;

registerPlugins(app);

const routes = [...matchmakingRoutes]


routes.forEach(route => {app.route(route)})
app.setErrorHandler(errorHandler)


console.log("say hello game")