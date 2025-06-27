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

  { method: 'POST', url: '/api/users/profile', handler: userController.createProfileHandler,},
  { method: 'PUT', url: '/api/users/me', handler: userController.updateProfileHandler,},
  { method: 'DELETE', url: '/api/users/me', handler: userController.deleteProfileHandler,},
  
  { method: 'GET', url: '/api/users/me', handler: userController.getCurrentUserHandler,},
  { method: 'GET', url: '/api/users/:id', handler: userController.getUserByIdHandler },

];



const friendRoutes: Route[] = [

  // Friend requests
  { method: 'POST', url: '/api/friends/request/:toUserId', handler: friendController.sendFriendRequestHandler },
  { method: 'POST', url: '/api/friends/accept/:requestId', handler: friendController.acceptFriendRequestHandler },
  { method: 'POST', url: '/api/friends/reject/:requestId', handler: friendController.rejectFriendRequestHandler },
  { method: 'DELETE', url: '/api/friends/cancel/:requestId', handler: friendController.cancelFriendRequestHandler },

  // Friend list
  { method: 'GET', url: '/api/friends', handler: friendController.getFriendsListHandler },
  { method: 'DELETE', url: '/api/friends/:friendId', handler: friendController.removeFriendHandler },

  // Block users
  { method: 'POST', url: '/api/blocked/:userId', handler: blockController.blockUserHandler },
  { method: 'DELETE', url: '/api/blocked/:userId', handler: blockController.unblockUserHandler },
  { method: 'GET', url: '/api/blocked', handler: blockController.getBlockedUsersHandler },

  // Optional: pending requests
  { method: 'GET', url: '/api/friends/pending/sent', handler: friendController.getSentRequestsHandler },
  { method: 'GET', url: '/api/friends/pending/received', handler: friendController.getReceivedRequestsHandler },

];



export  {friendRoutes , userRoutes};
