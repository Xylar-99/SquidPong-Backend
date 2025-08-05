import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as userController from '../controllers/user.controller';
import * as friendController from '../controllers/friend.controller';
import * as blockController from '../controllers/block.controller';
import { updateUserSchema  } from '../validators/user';


type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};


const userRoutes: Route[] = [

  { method: 'POST', url: '/api/user/me', handler: userController.createProfileHandler,},
  { method: 'POST', url: '/api/user/mee', handler: userController.updateProfileHandler,},
  { method: 'DELETE', url: '/api/user/me', handler: userController.deleteProfileHandler,},

  { method: 'GET', url: '/api/user/me', handler: userController.getCurrentUserHandler,},
  { method: 'GET', url: '/api/user/:id', handler: userController.getUserByIdHandler },
  { method: 'GET', url: '/api/user/', handler: userController.getAllUserHandler },

];



const friendRoutes: Route[] = [

  // Friend requests
  { method: 'POST', url: '/api/friend/request', handler: friendController.sendFriendRequestHandler },
  { method: 'POST', url: '/api/friend/accept', handler: friendController.acceptFriendRequestHandler },
  { method: 'POST', url: '/api/friend/reject', handler: friendController.rejectFriendRequestHandler },

  // Friend list
  { method: 'GET', url: '/api/friend/', handler: friendController.getFriendsListHandler },
  { method: 'DELETE', url: '/api/friend/:friendId', handler: friendController.removeFriendHandler },
  
  // get frineds lists
  { method: 'GET', url: '/api/friend/pending', handler: friendController.getPendingRequestsHandler },
  

  // Block users
  { method: 'POST', url: '/api/friend/blocked/:blockId', handler: blockController.blockUserHandler },
  { method: 'DELETE', url: '/api/friend/blocked/:blockId', handler: blockController.unblockUserHandler },
  { method: 'GET', url: '/api/friend/blocked/', handler: blockController.getBlockedUsersHandler },

];



export  {friendRoutes , userRoutes};
