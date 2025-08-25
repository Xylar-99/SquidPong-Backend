import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";

interface CreateInvitationBody {
  receiverId: string;
  expiresAt: string; // ISO date string
  scoreLimit: 5 | 10 | 15 | 20;
  pauseTime: 30 | 60 | 90; // in seconds
  allowPowerUps: boolean;
  requiredCurrency: number;
  message?: string; // Optional message for the invitation
}
export function generateInviteCode(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result; // e.g., "A7B9C2X1"
}

// Create an invitation
export async function createInvitation(
  request: FastifyRequest<{ Body: CreateInvitationBody }>,
  reply: FastifyReply
) {
  const {
    receiverId,
    allowPowerUps,
    expiresAt,
    pauseTime,
    requiredCurrency,
    scoreLimit,
    message,
  } = request.body;

  const fakeUserData = {
    id: "fakeUserId",
    name: "Fake User",
    coinsBalance: 1000, // Example balance
  };
  const fakeOpponentData = {
    id: "fakeUserOpponentId",
    name: "Fake User Opponent",
    coinsBalance: 500, // Example balance
  };

  try {
    // validate user data
    if (!fakeUserData)
      return reply.status(404).send({ error: "Sender not found" });
    if (fakeUserData.coinsBalance < requiredCurrency) {
      return reply.status(400).send({
        error: "you do not have enough coins for this game.",
      });
    }

    // validate receiver if provided
    if (receiverId) {
      if (!fakeOpponentData)
        return reply.status(404).send({ error: "Receiver not found" });

      if (fakeOpponentData.coinsBalance < requiredCurrency) {
        return reply.status(400).send({
          error: "Receiver does not have enough coins for this game.",
        });
      }
    }

    // Auto-expire old invitations first
    await prisma.invitation.updateMany({
      where: {
        status: "PENDING",
        expiresAt: { lte: new Date() },
      },
      data: {
        status: "EXPIRED",
      },
    });

    // validate user's create invitation limit
    const userInvitationsCount = await prisma.invitation.count({
      where: {
        senderId: fakeUserData.id,
        status: "PENDING",
        expiresAt: { gt: new Date() },
      },
    });

    if (userInvitationsCount > 0)
      return reply.status(400).send({
        error: `You only can create one PENDING invitation at a time.`,
      });

    // Create the invitation
    const result = await prisma.$transaction(async (tx) => {
      // Ensure sender exist locally
      await tx.user.upsert({
        where: { id: fakeUserData.id },
        update: { username: fakeUserData.name },
        create: {
          id: fakeUserData.id,
          username: fakeUserData.name,
        },
      });

      // Ensure receiver exist locally if provided
      if (receiverId && fakeOpponentData) {
        await tx.user.upsert({
          where: { id: fakeOpponentData.id },
          update: { username: fakeOpponentData.name },
          create: {
            id: fakeOpponentData.id,
            username: fakeOpponentData.name,
          },
        });
      }

      // Create the invitation
      const inviteCode = generateInviteCode();
      const invitation = await tx.invitation.create({
        data: {
          senderId: fakeUserData.id,
          receiverId: receiverId || null,
          expiresAt: new Date(expiresAt),
          scoreLimit,
          pauseTime,
          allowPowerUps,
          requiredCurrency,
          message: message || null,
          inviteCode,
        },
        include: {
          sender: true,
          receiver: true,
        },
      });

      return invitation;
    });

    // Send the response
    return reply.status(201).send({
      id: result.id,
      inviteCode: result.inviteCode,
      type: receiverId ? "PRIVATE" : "PUBLIC",
      sender: {
        id: result.sender.id,
        username: result.sender.username,
        level: "placeholder", // Placeholder, replace with actual level logic
        rank: "placeholder", // Placeholder, replace with actual rank logic
        coinsBalance: fakeUserData.coinsBalance,
      },
      reciever:
        fakeOpponentData && receiverId
          ? {
              id: fakeOpponentData.id,
              username: fakeOpponentData.name,
              level: "placeholder", // Placeholder, replace with actual level logic
              rank: "placeholder", // Placeholder, replace with actual rank logic
              coinsBalance: fakeOpponentData.coinsBalance,
            }
          : null,
    });
  } catch (error) {
    console.error("=============ERROR :", error);
    return reply.status(400).send({ error: "Error while creating invitation" });
  }
}

// Get an invitation by ID
export async function getInvitation(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params;

  try {
    const invitation = await prisma.invitation.findUnique({
      where: { id },
      include: {
        sender: true,
        receiver: true,
      },
    });

    if (!invitation) {
      return reply.status(404).send({ error: "Invitation not found" });
    }

    return reply.status(200).send({
      id: invitation.id,
      inviteCode: invitation.inviteCode,
      type: invitation.receiverId ? "PRIVATE" : "PUBLIC",
      sender: {
        id: invitation.sender.id,
        username: invitation.sender.username,
        level: "placeholder", // Placeholder, replace with actual level logic
        rank: "placeholder", // Placeholder, replace with actual rank logic
        coinsBalance: 1000, // Example balance, replace with actual logic
      },
      receiver: null, // TODO: TMP SOLUTION
      expiresAt: invitation.expiresAt.toISOString(),
      scoreLimit: invitation.scoreLimit,
      pauseTime: invitation.pauseTime,
      allowPowerUps: invitation.allowPowerUps,
      requiredCurrency: invitation.requiredCurrency,
      message: invitation.message || null,
    });
  } catch (error) {
    return reply.status(404).send({ error: "Invitation not found" });
  }
}

// Accept an invitation by ID
export async function AcceptInvitation(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  // Implementation for accepting an invitation
}

// Decline an invitation by ID
export async function DeclineInvitation(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  // Implementation for declining an invitation
}

// Cancel an invitation by ID (sender only)
export async function CancelInvitation(
  request: FastifyRequest<{ Params: { id: string }; Body: { userId: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params;

  try {
    const invitation = await prisma.invitation.findUnique({
      where: { id: id },
    });

    if (!invitation) {
      return reply.status(404).send({ error: "Invitation not found" });
    }

    if (invitation.status !== "PENDING") {
      return reply
        .status(400)
        .send({ error: "Only pending invitations can be cancelled" });
    }

    if (invitation.senderId !== request.body.userId) {
      return reply
        .status(403)
        .send({ error: "You can only cancel your own invitations" });
    }

    await prisma.invitation.update({
      where: { id: id },
      data: { status: "CANCELLED" },
    });
    return reply
      .status(200)
      .send({ message: "Invitation cancelled successfully" });
  } catch (error) {
    return reply
      .status(400)
      .send({ error: "Error while cancelling invitation" });
  }
}

// List all invitations for a user
export async function listInvitations(
  request: FastifyRequest<{ Params: { userId: string } }>,
  reply: FastifyReply
) {
  const { userId } = request.params;

  try {
    const invitations = await prisma.invitation.findMany({
      where: {
        OR: [{ senderId: userId }, { receiverId: userId }],
      },
      include: {
        sender: true,
        receiver: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!invitations || invitations.length === 0) {
      return reply.status(404).send({ error: "No invitations found" });
    } else {
      return reply.status(200).send(
        invitations.map((invitation) => ({
          id: invitation.id,
          inviteCode: invitation.inviteCode,
          type: invitation.receiverId ? "PRIVATE" : "PUBLIC",
          status: invitation.status,
          sender: {
            id: invitation.sender.id,
            username: invitation.sender.username,
            level: "placeholder", // Placeholder, replace with actual level logic
            rank: "placeholder", // Placeholder, replace with actual rank logic
            coinsBalance: 1000, // Example balance, replace with actual logic
          },
          receiver: invitation.receiver
            ? {
                id: invitation.receiver.id,
                username: invitation.receiver.username,
                level: "placeholder", // Placeholder, replace with actual level logic
                rank: "placeholder", // Placeholder, replace with actual rank logic
                coinsBalance: 500, // Example balance, replace with actual logic
              }
            : null,
          expiresAt: invitation.expiresAt.toISOString(),
          scoreLimit: invitation.scoreLimit,
          pauseTime: invitation.pauseTime,
          allowPowerUps: invitation.allowPowerUps,
          requiredCurrency: invitation.requiredCurrency,
          message: invitation.message || null,
        }))
      );
    }
  } catch (error) {
    console.error("=============ERROR :", error);
    return reply.status(400).send({ error: "Error while listing invitations" });
  }
}

// Delete an invitation by ID (admin only)
export async function deleteInvitation(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params;

  try {
    const invitation = await prisma.invitation.findUnique({
      where: { id },
    });

    if (!invitation) {
      return reply.status(404).send({ error: "Invitation not found" });
    }

    await prisma.invitation.delete({
      where: { id },
    });

    return reply
      .status(200)
      .send({ message: "Invitation deleted successfully" });
  } catch (error) {
    return reply.status(400).send({ error: "Error while deleting invitation" });
  }
}
