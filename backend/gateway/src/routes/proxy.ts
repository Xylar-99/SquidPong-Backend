import { RouteHandlerMethod } from 'fastify';
import {proxyToNotifyService   , proxyToChatService , proxyToGameService , proxyToUserService} from '../controllers/proxy.controller'




type Route = {
    url     : string;
    handler : RouteHandlerMethod;
};



const gatewayRoutes: Route[] = [

  {url: '/api/user/*', handler: proxyToUserService },
  {url: '/api/friend/*', handler: proxyToUserService },
  {url: '/api/chat/*', handler: proxyToChatService },
  {url: '/api/game/*', handler: proxyToGameService },
  {url: '/api/notify/*', handler: proxyToNotifyService },
];



export { gatewayRoutes };
