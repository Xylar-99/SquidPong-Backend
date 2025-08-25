import { FastifyInstance } from "fastify";

import {
  createInvitation,
  deleteInvitation,
  getInvitation,
  listInvitations,
} from "../controllers/invitationController";
import { createInvitationValidator } from "../validators/invitationValidators";







export async function invitationRoutes(server: FastifyInstance) {



  // test endpoint of game
  server.get("/test", async  (req:any , res:any) => {res.send({msg : "test game is workkkkkkkkkkkkkkkkkkiiiiiiiiiiiiiiiiing"})});


  server.post(
    "/invitations",
    {
      schema: {
        body: createInvitationValidator.body,
      },
    },
    createInvitation
  );
  server.get(
    "/invitations/:id",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: ["id"],
        },
      },
    },

    getInvitation
  );
  server.get(
    "/invitations/user/:userId",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            userId: { type: "string" },
          },
          required: ["userId"],
        },
      },
    },
    listInvitations
  );
  // Delete invitation (dev mode only)
  server.post(
    "/invitations/:id/delete",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            id: { type: "string" },
          },
          required: ["id"],
        },
      },
    },
    deleteInvitation
  );
}
