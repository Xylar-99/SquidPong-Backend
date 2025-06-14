import { RouteHandlerMethod , FastifySchema } from 'fastify';
import {proxyToNotifyService , proxyToChatService , proxyToGameService , proxyToUserService} from '../controllers/proxyController'




type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | '*'; 
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};



const gatewayRoutes: Route[] = [

  { method: '*', url: '/api/users/*', handler: proxyToUserService },
  { method: '*', url: '/api/chat/*', handler: proxyToChatService },
  { method: '*', url: '/api/game/*', handler: proxyToGameService },
  { method: '*', url: '/api/notify/*', handler: proxyToNotifyService },
];



export { gatewayRoutes };
