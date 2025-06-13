import {fastify , FastifyInstance} from 'fastify';
import userRoutes from './routes/users';
import { errorHandler } from './utils/errorHandler';


const app: FastifyInstance = fastify();
export default app;


const routes = [...userRoutes]



routes.forEach(route => {app.route(route)})
app.setErrorHandler(errorHandler)
