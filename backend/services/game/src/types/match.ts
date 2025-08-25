// import { PauseTime, ScoreLimit } from "../generated/prisma";

export type CreateMatchBody =
  | {
      // ONE_VS_ONE → requires full game settings
      mode: "ONE_VS_ONE";
      opponentId: string;
      gameSettings: {
        rules: {
          scoreLimit: any;
          pauseTime: any;
          allowPowerUps: boolean;
        };
        requiredCurrency?: number;
      };
    }
  | {
      // TOURNAMENT → no gameSettings, inherits from tournament
      mode: "TOURNAMENT";
      opponentId?: string;
      gameSettings?: never;
    }
  | {
      // ONE_VS_AI → difficulty only
      mode: "ONE_VS_AI";
      opponentId?: string;
      gameSettings: {
        difficulty: "EASY" | "MEDIUM" | "HARD";
      };
    }
  | {
      // BOUNCE_CHALLENGE → mini-game, no settings allowed
      mode: "BOUNCE_CHALLENGE";
      opponentId?: string;
      gameSettings?: never;
    };
