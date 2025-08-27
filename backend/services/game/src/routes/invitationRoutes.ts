import { FastifyInstance } from "fastify";
import { RouteHandlerMethod , FastifySchema } from 'fastify';

import {
  createInvitation,
  deleteInvitation,
  getInvitation,
  listInvitations,
} from "../controllers/invitationController";
import { createInvitationValidator } from "../validators/invitationValidators";



async function test (req:any, res:any)
{
  res.send({ msg: "test game is workkkkkkkkkkkkkkkkkkiiiiiiiiiiiiiiiiing" });
}



// export async function invitationRoutes(server: FastifyInstance) {



//   // test endpoint of game
//   server.get("/test", async  (req:any , res:any) => {res.send({msg : "test game is workkkkkkkkkkkkkkkkkkiiiiiiiiiiiiiiiiing"})});


//   server.post(
//     "/invitations",
//     {
//       schema: {
//         body: createInvitationValidator.body,
//       },
//     },
//     createInvitation
//   );
//   server.get(
//     "/invitations/:id",
//     {
//       schema: {
//         params: {
//           type: "object",
//           properties: {
//             id: { type: "string" },
//           },
//           required: ["id"],
//         },
//       },
//     },

//     getInvitation
//   );
//   server.get(
//     "/invitations/user/:userId",
//     {
//       schema: {
//         params: {
//           type: "object",
//           properties: {
//             userId: { type: "string" },
//           },
//           required: ["userId"],
//         },
//       },
//     },
//     listInvitations
//   );
//   // Delete invitation (dev mode only)
//   server.post(
//     "/invitations/:id/delete",
//     {
//       schema: {
//         params: {
//           type: "object",
//           properties: {
//             id: { type: "string" },
//           },
//           required: ["id"],
//         },
//       },
//     },
//     deleteInvitation
//   );
// }

type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};



export const invitationRoutes: Route[] = [
  {
    method: "GET",
    url: "/api/game/test",
    handler:  test,
  },
  {
    method: "POST",
    url: "/api/game/invitations",
    handler: createInvitation,
  },
  {
    method: "GET",
    url: "/api/game/invitations/:id",
    handler: getInvitation,
  },
  {
    method: "GET",
    url: "/api/game/invitations/user/:userId",
    handler: listInvitations,
  },
  {
    method: "POST",
    url: "/api/game/invitations/:id/delete",
    handler: deleteInvitation,
  },
];
