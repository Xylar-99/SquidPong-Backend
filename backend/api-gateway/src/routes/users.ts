import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as usersController from '../controllers/usersController'
import { loginSchema, signupSchema } from '../validators/authSchemas';


type Route = {
    method  : 'GET' | 'POST' | 'DELETE'; 
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};


const userRoutes : Route[] = [

  // method get
  { method: 'GET', url: '/', handler: usersController.getRootHandler },
  
  // method post
  { method: 'POST', url: '/signup', handler: usersController.postSignupHandler ,  schema: {body: signupSchema} },
  { method: 'POST', url: '/login', handler: usersController.postLoginHandler ,  schema: {body: loginSchema} },

];


export default userRoutes;
