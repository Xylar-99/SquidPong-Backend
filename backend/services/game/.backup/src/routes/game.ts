import { RouteHandlerMethod , FastifySchema } from 'fastify';
import * as gameController from '../controllers/gameController';
import { startGameSchema, moveSchema } from '../validators/gameSchemas';


type Route = {
    method  : 'GET' | 'POST' | 'DELETE'; 
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};

export const tournamentRoutes: Route[] = [
  { method: 'POST', url: '/api/tournament/start', handler: gameController.postStartTournamentHandler },
  { method: 'POST', url: '/api/tournament/register', handler: gameController.postRegisterPlayerHandler, schema: { body: registerPlayerSchema } },
  { method: 'GET', url: '/api/tournament/players', handler: gameController.getPlayersHandler },
  { method: 'GET', url: '/api/tournament/status', handler: gameController.getTournamentStatusHandler },
  { method: 'GET', url: '/api/tournament/leaderboard', handler: gameController.getLeaderboardHandler },
  { method: 'GET', url: '/api/tournament/winner', handler: gameController.getWinnerHandler },
];

export const matchmakingRoutes: Route[] = [
  { method: 'POST', url: '/api/matchmaking/next', handler: gameController.postNextMatchHandler },
  { method: 'GET', url: '/api/matchmaking/current', handler: gameController.getCurrentMatchHandler },
  { method: 'GET', url: '/api/matchmaking/upcoming', handler: gameController.getUpcomingMatchesHandler },
];

export const gameRoutes: Route[] = [
  { method: 'POST', url: '/api/game/start', handler: gameController.postStartGameHandler, schema: { body: startGameSchema } },
  { method: 'GET', url: '/api/game/:gameId', handler: gameController.getGameByIdHandler },
  { method: 'POST', url: '/api/game/:gameId/move', handler: gameController.postMakeMoveHandler, schema: { body: moveSchema } },
  { method: 'GET', url: '/api/game/:gameId/status', handler: gameController.getGameStatusHandler },
  { method: 'POST', url: '/api/game/:gameId/score', handler: gameController.postUpdateScoreHandler, schema: { body: scoreSchema } },
  { method: 'POST', url: '/api/game/:gameId/forfeit', handler: gameController.postForfeitHandler },
  { method: 'GET', url: '/api/game/:gameId/result', handler: gameController.getGameResultHandler },
];

export const remoteRoutes: Route[] = [
  { method: 'POST', url: '/api/remote/connect', handler: gameController.postConnectHandler, schema: { body: remoteConnectSchema } },
  { method: 'POST', url: '/api/remote/disconnect', handler: gameController.postDisconnectHandler },
];


