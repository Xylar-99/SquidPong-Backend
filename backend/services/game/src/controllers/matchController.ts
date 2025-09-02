import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../lib/prisma";
import { CreateMatchBody } from "../types/match";
import { Invitation, Match, MatchPlayer, Prisma } from "../generated/prisma";
import { User } from "../types/users";

export async function createMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const body = request.body as CreateMatchBody;

  switch (body.mode) {
    case "ONE_VS_ONE":
      {
        reply.status(201).send({ success: true, message: "one vs one" }); // Placeholder response
      }
      break;
    case "TOURNAMENT":
      {
        reply.status(201).send({ success: true, message: "tournament" }); // Placeholder response
      }
      break;
    case "ONE_VS_AI":
      {
        reply.status(201).send({ success: true, message: "one vs ai" }); // Placeholder response
      }
      break;
    case "BOUNCE_CHALLENGE":
      {
        reply.status(201).send({ success: true, message: "bounce challenge" }); // Placeholder response
      }
      break;
    default:
      return reply.status(400).send({ error: "Invalid match mode" });
  }
}
export async function OneVsOneMatch(
  body: Extract<CreateMatchBody, { mode: "ONE_VS_ONE" }>
) {
  // create match players
  // create match
  // create match setting
}

// === Helpers ===
export async function MatchFromInvitation(invitation: any): Promise<Match> {
  const {
    senderId,
    receiverId,
    pauseTime,
    scoreLimit,
    allowPowerUps,
    requiredCurrency,
  } = invitation;

  if (!senderId || !receiverId) {
    throw new Error("Invalid invitation data");
  }

  return prisma.$transaction(async (tx) => {
    const hostPlayer = await createMatchPlayer(
      invitation.sender.userId, // remote int
      invitation.sender.id, // local UUID
      true,
      false,
      tx
    );

    const guestPlayer = await createMatchPlayer(
      invitation.receiver.userId,
      invitation.receiver.id,
      false,
      false,
      tx
    );

    const match = await tx.match.create({
      data: {
        mode: "ONE_VS_ONE",
        status: "WAITING",
        opponent1Id: hostPlayer.id,
        opponent2Id: guestPlayer.id,
        duration: 0,
      },
      include: {
        opponent1: true,
        opponent2: true,
      },
    });

    await createMatchSetting(
      match.id,
      "ONE_VS_ONE",
      {
        pauseTime: pauseTime ?? 60,
        scoreLimit: scoreLimit ?? 10,
        allowPowerUps: allowPowerUps ?? true,
        requiredCurrency: requiredCurrency ?? 0,
      },
      tx
    );

    return match;
  });
}
export async function createMatchPlayer(
  remoteUserId: number, // from user-management service
  localUserId: string, // from your game DB
  isHost: boolean,
  isAI: boolean,
  tx: Prisma.TransactionClient = prisma
): Promise<MatchPlayer> {
  // Fetch user info from user service
  const res = await fetch(`http://user:4001/api/user/${remoteUserId}`);
  if (!res.ok) throw new Error("Failed to fetch user data");
  const Resp = await res.json();
  const userData = Resp.data as User;

  // Create the match player record in local DB
  return tx.matchPlayer.create({
    data: {
      userId: localUserId, // ✅ Use local UUID here
      isHost,
      isAI,
      characterId: userData.playerSelectedCharacter,
      paddleId: userData.playerSelectedPaddle,
      avatarUrl: userData.avatar,
      rankDivision: userData.rankDivision,
      rankTier: userData.rankTier,
      username: userData.username,
    },
  });
}
export async function createMatchSetting(
  matchId: string,
  mode: "ONE_VS_ONE" | "ONE_VS_AI",
  settings: {
    pauseTime: number;
    scoreLimit: number;
    allowPowerUps: boolean;
    requiredCurrency: number;
    difficulty?: "EASY" | "MEDIUM" | "HARD";
  },
  tx: Prisma.TransactionClient = prisma
) {
  if (mode === "ONE_VS_ONE") {
    return tx.matchSetting.create({
      data: {
        pauseTime: settings.pauseTime,
        scoreLimit: settings.scoreLimit,
        allowPowerUps: settings.allowPowerUps,
        requiredCurrency: settings.requiredCurrency,
        matchId,
      },
    });
  }

  if (mode === "ONE_VS_AI") {
    if (!settings.difficulty) {
      throw new Error("AI difficulty is required for ONE_VS_AI mode");
    }
    return tx.matchSetting.create({
      data: {
        aiDifficulty: settings.difficulty,
        pauseTime: 60,
        scoreLimit: 10,
        allowPowerUps: false,
        requiredCurrency: 0,
        matchId,
      },
    });
  }

  throw new Error("Invalid match setting mode");
}
export async function getMatch(
  request: FastifyRequest<{ Params: { matchId: string } }>,
  reply: FastifyReply
) {
  const { matchId } = request.params;

  try {
    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: {
        opponent1: true,
        opponent2: true,
        matchSetting: true,
      },
    });

    if (!match) {
      return reply.status(404).send({ error: "Match not found" });
    }

    return reply.status(200).send({
      success: true,
      data: match,
    });
  } catch (error) {
    console.error("Error fetching match:", error);
    return reply.status(500).send({ error: "Failed to fetch match" });
  }
}
export async function getPendingMatchForUser(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const params = request.params as { userId: string };

  try {
    const pendingMatch = await prisma.match.findFirst({
      where: {
        status: "WAITING",
        OR: [
          {
            opponent1: {
              User: {
                userId: Number(params.userId),
              },
            },
          },
          {
            opponent2: {
              User: {
                userId: Number(params.userId),
              },
            },
          },
        ],
      },
      include: {
        opponent1: true,
        opponent2: true,
        matchSetting: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!pendingMatch) {
      return reply.status(404).send({ error: "No pending match found!" });
    }

    return reply.status(200).send({
      success: true,
      data: pendingMatch,
    });
  } catch (error) {
    console.error("Error fetching pending match:", error);
    return reply.status(500).send({ error: "Failed to fetch pending match" });
  }
}

// Match management logic
export async function toggleReadyStatus(
  request: FastifyRequest<{
    Params: { matchId: string; playerId: string };
    Body: { isReady: boolean };
  }>,
  reply: FastifyReply
) {
  const { matchId, playerId } = request.params;
  const { isReady } = request.body;

  try {
    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: { opponent1: true, opponent2: true },
    });

    if (!match) {
      return reply.status(404).send({ error: "Match not found" });
    }

    const player =
      match.opponent1.id === playerId
        ? match.opponent1
        : match.opponent2?.id === playerId
        ? match.opponent2
        : null;

    if (!player) {
      return reply
        .status(404)
        .send({ error: "Player not found in this match" });
    }

    await prisma.matchPlayer.update({
      where: { id: player.id },
      data: { isReady },
    });
  } catch (error) {}
}
