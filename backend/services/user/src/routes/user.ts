import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as userController from '../controllers/user.controller';
import * as friendController from '../controllers/friend.controller';
import * as blockController from '../controllers/block.controller';
import { createProfileSchema , updateProfileSchema , deleteProfileSchema , getCurrentUserSchema  , getUserByIdSchema , getAllUserSchema} from '../validators/ProfileSchema';
import { sendFriendRequestSchema, acceptFriendRequestSchema, rejectFriendRequestSchema, getFriendsListSchema, removeFriendSchema, getPendingRequestsSchema,blockUserSchema,unblockUserSchema,getBlockedUsersSchema } from '../validators/FriendSchema';



type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};


const userRoutes: Route[] = [
  { method: 'POST', url: '/api/user/me', handler: userController.createProfileHandler },
  { method: 'PUT', url: '/api/user/me', handler: userController.updateProfileHandler, schema: updateProfileSchema },
  { method: 'DELETE', url: '/api/user/me', handler: userController.deleteProfileHandler, schema: deleteProfileSchema },
  { method: 'GET', url: '/api/user/me', handler: userController.getCurrentUserHandler, schema: getCurrentUserSchema },
  { method: 'GET', url: '/api/user/:userId/friends', handler: userController.getFriendsOfUserHandler, schema: getFriendsListSchema },
  { method: 'GET', url: '/api/user/:id', handler: userController.getUserByIdHandler, schema: getUserByIdSchema },
  { method: 'GET', url: '/api/user/all', handler: userController.getAllUserHandler, schema: getAllUserSchema },
];


const friendRoutes: Route[] = [
  
  { method: 'POST', url: '/api/friend/request', handler: friendController.sendFriendRequestHandler, schema: sendFriendRequestSchema },
  { method: 'POST', url: '/api/friend/accept', handler: friendController.acceptFriendRequestHandler, schema: acceptFriendRequestSchema },
  { method: 'POST', url: '/api/friend/reject', handler: friendController.rejectFriendRequestHandler, schema: rejectFriendRequestSchema },
  { method: 'GET', url: '/api/friend/all', handler: friendController.getFriendsListHandler, schema: getFriendsListSchema },
  { method: 'DELETE', url: '/api/friend/:friendId', handler: friendController.removeFriendHandler, schema: removeFriendSchema },
  { method: 'GET', url: '/api/friend/pending', handler: friendController.getPendingRequestsHandler, schema: getPendingRequestsSchema },
  { method: 'POST', url: '/api/blocked/:blockId', handler: blockController.blockUserHandler, schema: blockUserSchema },
  { method: 'DELETE', url: '/api/blocked/:blockId', handler: blockController.unblockUserHandler, schema: unblockUserSchema },
  { method: 'GET', url: '/api/blocked/all', handler: blockController.getBlockedUsersHandler, schema: getBlockedUsersSchema },
];



export  {friendRoutes , userRoutes};
