// Gateway-service routes for room management
import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as roomController from '../controllers/room.controller';



type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};


export const roomRoutes : Route[] = [
  {
    method: "POST",
    url: "/api/room/create",
    handler: roomController.createRoomHandler,
  },
  {
    method: "POST",
    url: "/api/room/:roomId/join",
    handler: roomController.joinRoomHandler,
  },
  {
    method: "POST",
    url: "/api/room/:roomId/spectate",
    handler: roomController.joinSpectatorHandler,
  },
  {
    method: "GET",
    url: "/api/room/:roomId/status",
    handler: roomController.getRoomStatusHandler,
  },
  {
    method: "DELETE",
    url: "/api/room/:roomId/leave",
    handler: roomController.leaveRoomHandler,
  },
];
