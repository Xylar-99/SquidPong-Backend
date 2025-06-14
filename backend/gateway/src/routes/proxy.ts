import { RouteHandlerMethod , FastifySchema } from 'fastify';
import {proxyToNotifyService , proxyToChatService , proxyToGameService , proxyToUserService} from '../controllers/proxyController'




type Route = {
    method  : 'GET' | 'POST' | 'DELETE'; 
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};



const gatewayRoutes: Route[] = [

  { method: 'GET', url: '/api/users/*', handler: proxyToUserService },
  { method: 'GET', url: '/api/chat/*', handler: proxyToChatService },
  { method: 'GET', url: '/api/game/*', handler: proxyToGameService },
  { method: 'GET', url: '/api/notify/*', handler: proxyToNotifyService },
];



export { gatewayRoutes };
