import { PrismaClient } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../lib/prisma";
import {
  CharacterId,
  GameMode,
  PaddleSkinId,
  RankDivision,
  RankTier,
} from "../generated/prisma";
import { CreateMatchBody } from "../types/match";

export async function createMatch(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { mode, opponentId, gameSettings } = request.body as CreateMatchBody;

  // -----------------------------
  // TODO: Get actual authenticated user

  // TODO: on merge with user-management system, replace Users actual data
  const UserPlaceholder = {
    id: "fake-user-id", // TODO: get from auth
    username: "FakeUser",
    rankDivision: RankDivision.DIAMOND,
    rankTier: RankTier.I,
    walletBalance: 1000,
    level: 14,
    characterId: "ZERO", // Example character ID
    paddleId: "CLASSIC", // Example paddle ID
  };
  const OppponentPlaceholder = {
    id: opponentId,
    username: "FakeOpponent",
    rankDivision: RankDivision.PLATINUM,
    rankTier: RankTier.II,
    walletBalance: 800,
    level: 12,
    characterId: "TANK", // Example character ID
    paddleId: "FUTURISTIC", // Example paddle ID
  };

  // Validate User
  if (!UserPlaceholder) {
    return reply.status(401).send({ error: "User not found" });
  }

  if (mode === "ONE_VS_ONE") {
    try {
      // Validate opponent
      if (!OppponentPlaceholder)
        return reply.status(400).send({ error: "Invalid opponent ID" });

      // Validate user currency
      if (
        gameSettings.requiredCurrency &&
        UserPlaceholder.walletBalance < gameSettings.requiredCurrency
      ) {
        return reply.status(400).send({
          error: "Insufficient currency for this match",
        });
      }
      // Validate opponent's currency
      if (
        gameSettings.requiredCurrency &&
        OppponentPlaceholder.walletBalance < gameSettings.requiredCurrency
      ) {
        return reply.status(400).send({
          error: "Opponent has insufficient currency for this match",
        });
      }
      // Create Users, Match Players, Match, and Settings
      const result = await prisma.$transaction(async (tx) => {
        // Create or update Users
        const User = await tx.user.upsert({
          where: { id: UserPlaceholder.id },
          update: {
            username: UserPlaceholder.username,
          },
          create: {
            id: UserPlaceholder.id,
            username: UserPlaceholder.username,
          },
        });
        const Opponent = await tx.user.upsert({
          where: { id: OppponentPlaceholder.id },
          update: {
            username: OppponentPlaceholder.username,
          },
          create: {
            id: OppponentPlaceholder.id!,
            username: OppponentPlaceholder.username,
          },
        });

        // Create MatchPlayers
        const userMatchPlayer = await tx.matchPlayer.create({
          data: {
            playerName: User.username,
            userId: User.id,
            isAI: false,
            isReady: true,
            isHost: true,
            characterId: CharacterId.ZERO,
            paddleId: PaddleSkinId.CLASSIC,
          },
        });
        const opponentMatchPlayer = await tx.matchPlayer.create({
          data: {
            playerName: Opponent.username,
            userId: Opponent.id,
            isAI: false,
            isReady: true,
            isHost: false,
            characterId: CharacterId.TANK,
            paddleId: PaddleSkinId.RETRO,
          },
        });

        // Create Match
        const match = await tx.match.create({
          data: {
            mode: GameMode.ONE_VS_ONE,
            status: "WAITING",
            duration: 0,
            opponent1Id: userMatchPlayer.id,
            opponent2Id: opponentMatchPlayer.id,
          },
        });

        // Create MatchSettings
        const MatchSettings = await tx.matchSetting.create({
          data: {
            matchId: match.id,
            scoreLimit: gameSettings.rules.scoreLimit ,
            pauseTime: gameSettings.rules.pauseTime ,
            allowPowerUps: gameSettings.rules.allowPowerUps || false,
            requiredCurrency: gameSettings.requiredCurrency || 0,
          },
        });

        return {
          match,
          userMatchPlayer,
          opponentMatchPlayer,
          settings: MatchSettings,
        };
      });

      return reply.status(201).send({
        success: true,
        message: "Match created successfully",
        data: {
          matchId: result.match.id,
          mode: result.match.mode,
          status: result.match.status,
          players: [
            {
              id: result.userMatchPlayer.id,
              name: result.userMatchPlayer.playerName,
              isHost: result.userMatchPlayer.isHost,
              isReady: result.userMatchPlayer.isReady,
              character: result.userMatchPlayer.characterId,
              paddle: result.userMatchPlayer.paddleId,
            },
            {
              id: result.opponentMatchPlayer.id,
              name: result.opponentMatchPlayer.playerName,
              isHost: result.opponentMatchPlayer.isHost,
              isReady: result.opponentMatchPlayer.isReady,
              character: result.opponentMatchPlayer.characterId,
              paddle: result.opponentMatchPlayer.paddleId,
            },
          ],
          settings: {
            scoreLimit: result.settings.scoreLimit,
            pauseTime: result.settings.pauseTime,
            allowPowerUps: result.settings.allowPowerUps,
            requiredCurrency: result.settings.requiredCurrency,
          },
          createdAt: result.match.createdAt,
        },
      });
    } catch (error) {
      console.error("Error creating match:", error);
      return reply.status(500).send({ error: "Failed to create match" });
    }
  } else if (mode === "ONE_VS_AI") {
    if (!gameSettings || !gameSettings.difficulty) {
      return reply
        .status(400)
        .send({ error: "Invalid game settings for AI match" });
    }
    const aiPlayer = await prisma.matchPlayer.create({
      data: {
        playerName: `AI (${gameSettings.difficulty})`,
        userId: null, // AI players don't have user IDs
        isAI: true,
        isReady: true,
        isHost: false,
        characterId: "ZERO", // Default AI character
        paddleId: "FUTURISTIC", // Default AI paddle
      },
    });
  } else if (mode === "TOURNAMENT") {
    // TODO: Validate tournament exists and user is allowed to join
    // TODO: Ensure tournament rules/settings exist and are applied
    // TODO: Link match to tournament in DB
    // TODO: Prevent duplicate match creation for same tournament + user
    reply.status(200).send({
      message: "Match created successfully, mode: TOURNAMENT",
    });
  } else if (mode === "BOUNCE_CHALLENGE") {
    reply.status(200).send({
      message: "Match created successfully, mode: BOUNCE_CHALLENGE",
    });
  }
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
