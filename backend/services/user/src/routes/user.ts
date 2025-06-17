import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as userController from '../controllers/userController';
import { updateUserSchema  } from '../validators/user';


type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'; 
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};


const userRoutes: Route[] = [

  { method: 'POST', url: '/api/users/profile', handler: userController.createProfileHandler,},
  { method: 'PUT', url: '/api/users/me', handler: userController.updateProfileHandler,},
  { method: 'DELETE', url: '/api/users/me', handler: userController.deleteProfileHandler,},
  
  { method: 'GET', url: '/api/users/me', handler: userController.getCurrentUserHandler,},
  { method: 'GET', url: '/api/users/:id', handler: userController.getUserByIdHandler },
];



export default userRoutes;
