import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as authController from '../controllers/authController';
import { loginSchema, signupSchema } from '../validators/authSchemas';



type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | '*'; 
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};


const authRoutes: Route[] = [
  // Auth routes
  { method: 'POST', url: '/api/signup', handler: authController.postSignupHandler, schema: { body: signupSchema } },
  { method: 'POST', url: '/api/login', handler: authController.postLoginHandler, schema: { body: loginSchema } },
  { method: 'POST', url: '/api/logout', handler: authController.postLogoutHandler },

];



export {authRoutes}
