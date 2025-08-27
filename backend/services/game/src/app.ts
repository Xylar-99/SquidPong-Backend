import {fastify , FastifyInstance} from 'fastify';
import { invitationRoutes } from './routes/invitationRoutes';
import { roomRoutes } from './routes/room';

const app: FastifyInstance = fastify();
export default app;



const routes = [...invitationRoutes , ...roomRoutes]
routes.forEach(route => {app.route(route)})

