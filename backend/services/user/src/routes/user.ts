import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as userController from '../controllers/userController';
import { updateUserSchema  } from '../validators/user';


type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | 'PATCH'; 
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};


const userRoutes: Route[] = [
  { method: 'GET', url: '/api/users/me', handler: userController.getCurrentUserHandler },
  { method: 'PATCH', url: '/api/users/me', handler: userController.patchCurrentUserHandler, schema: { body: updateUserSchema } },
  { method: 'GET', url: '/api/users/:id', handler: userController.getUserByIdHandler },
];



export default userRoutes;
