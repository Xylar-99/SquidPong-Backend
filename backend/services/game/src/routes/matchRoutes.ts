// | **Route**                  | **Method** | **Description**                                                                     |
// | -------------------------- | ---------- | ----------------------------------------------------------------------------------- |
// | `/matches`                 | `POST`     | Create a new match. Body includes mode, opponent IDs, and rules.                    |
// | `/matches/:matchId`        | `GET`      | Get match details including players, spectators, bets.                              |
// | `/matches`                 | `GET`      | List ongoing / waiting / completed matches. Use query params like `status=WAITING`. |
// | `/matches/:matchId/join`   | `POST`     | Join an existing match as a player.                                                 |
// | `/matches/:matchId/leave`  | `POST`     | Leave a match (before it starts).                                                   |
// | `/matches/:matchId/start`  | `POST`     | Mark match status as `IN_PROGRESS`. Only host can trigger.                          |
// | `/matches/:matchId/finish` | `POST`     | Finish the match, update scores, winner, rank points, etc.                          |
// | `/matches/:matchId/cancel` | `POST`     | Cancel a match (e.g., timeout, host quits).                                         |

// | **Route**                            | **Method** | **Description**                             |
// | ------------------------------------ | ---------- | ------------------------------------------- |
// | `/matches/:matchId/players`          | `GET`      | Get players in a match.                     |
// | `/matches/:matchId/players/:id`      | `GET`      | Get a specific player’s info.               |
// | `/matches/:matchId/ready`            | `POST`     | Set player ready status (`isReady = true`). |
// | `/matches/:matchId/unready`          | `POST`     | Set player unready (`isReady = false`).     |
// | `/matches/:matchId/player/character` | `PUT`      | Change selected character before start.     |
// | `/matches/:matchId/player/paddle`    | `PUT`      | Change selected paddle skin before start.   |



import { RouteHandlerMethod , FastifySchema } from 'fastify';
import { createMatch, getMatch } from "../controllers/matchController";


type Route = {
    method  : 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
    url     : string;
    handler : RouteHandlerMethod;
    schema? : FastifySchema;
};

export const matchRoutes: Route[] = [
  {
    method: "POST",
    url: "/api/game/match",
    handler: createMatch,
  },
  {
    method: "GET",
    url: "/api/game/match/:matchId",
    handler: getMatch,
  },
];