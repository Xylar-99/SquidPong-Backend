import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as authController from '../controllers/auth.controller';
import * as twofaController from '../controllers/2fa.controller';
import { loginSchema , loginResponseSchema , resetPasswordSchema ,  signupSchema , changePasswordSchema , forgotPasswordSchema , verifyEmailSchema } from '../validators/authSchemas';

type Route = {
    method  : 'GET' | 'POST' | 'DELETE'; 
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};





const authRoutes: Route[] = [

  {
    method: "GET",
    url: "/",
    handler: authController.getRootHandler,
  },
  {
    method: "POST",
    url: "/api/auth/signup",
    handler: authController.postSignupHandler,
    schema: { body: signupSchema },
  },
  {
    method: "POST",
    url: "/api/auth/login",
    handler: authController.postLoginHandler,
    schema: {
    tags: ['user'],
    summary: 'this routes',
    body: loginSchema,
    response: loginResponseSchema
  }

  },
  {
    method: "POST",
    url: "/api/auth/logout",
    handler: authController.postLogoutHandler,
  },


  // verify email
  {
    method: "POST",
    url: "/api/auth/verify-email",
    handler: authController.verifyEmailHandler,
    schema: { body: verifyEmailSchema },
  },

  
  // password
  {
  method: "POST",
  url: "/api/auth/forgot-password",
  handler: authController.postForgotPasswordHandler,
  schema: { body: forgotPasswordSchema },
  },
  
  {
  method: "POST",
  url: "/api/auth/reset-password",
  handler: authController.postResetPasswordHandler,
  schema: { body: resetPasswordSchema},
  },

  {
  method: "POST",
  url: "/api/auth/change-password",
  handler: authController.postChangePasswordHandler,
  schema: { body: changePasswordSchema },
  },


  // oauth2
  {
    method: "GET",
    url: "/api/auth/google/callback",
    handler: authController.getGooglCallbackehandler,
  },
  {
    method: "GET",
    url: "/api/auth/intra",
    handler: authController.getIntrahandler,
  },
  {
    method: "GET",
    url: "/api/auth/intra/callback",
    handler: authController.getIntracallbackhandler,
  },


  // refresh token
  {
    method: "POST",
    url: "/api/auth/refresh-token",
    handler: authController.postrefreshtokenHandler,
  },


];

const twofaRoutes: Route[] = [
  // 2fa 
  {
    method: "GET",
    url: "/api/2fa/setup",
    handler: twofaController.setupAuthenticatorHandler,
  },
  {
    method: "GET",
    url: "/api/2fa/status",
    handler: twofaController.statusAuthenticatorHandler,
  },
  {
    method: "POST",
    url: "/api/2fa/verify",
    handler: twofaController.verifyTwofaHandler,
  },
  {
    method: "POST",
    url: "/api/2fa/disable",
    handler: twofaController.disable2FAHandler,
  },
  {
    method: "POST",
    url: "/api/2fa/enable",
    handler: twofaController.enableTwoFAHandler,
  },

];



export {authRoutes , twofaRoutes}
