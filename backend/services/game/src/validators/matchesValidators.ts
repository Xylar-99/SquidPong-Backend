export const matchesValidators = {
  body: {
    type: "object",
    oneOf: [
      // 1. ONE_VS_ONE — requires full gameSettings
      {
        properties: {
          mode: { const: "ONE_VS_ONE" },
          opponentId: { type: "string" },
          gameSettings: {
            type: "object",
            required: ["rules"],
            properties: {
              rules: {
                type: "object",
                required: ["scoreLimit", "pauseTime", "allowPowerUps"],
                properties: {
                  scoreLimit: {
                    type: "string",
                    enum: ["FIVE", "TEN", "FIFTEEN", "TWENTY"],
                  },
                  pauseTime: {
                    type: "string",
                    enum: ["THIRTY_SECONDS", "SIXTY_SECONDS", "NINETY_SECONDS"],
                  },
                  allowPowerUps: { type: "boolean" },
                },
              },
              requiredCurrency: {
                type: "integer",
                minimum: 0,
              },
            },
          },
        },
        required: ["mode", "opponentId", "gameSettings"],
      },

      // 2. TOURNAMENT — inherits settings → forbid gameSettings
      {
        properties: {
          mode: { const: "TOURNAMENT" },
        },
        required: ["mode"],
        not: {
          required: ["gameSettings"],
        },
      },

      // 3. ONE_VS_AI — requires difficulty
      {
        properties: {
          mode: { const: "ONE_VS_AI" },
          gameSettings: {
            type: "object",
            required: ["difficulty"],
            properties: {
              difficulty: {
                type: "string",
                enum: ["EASY", "MEDIUM", "HARD"],
              },
            },
          },
        },
        required: ["mode", "gameSettings"],
      },

      // 4. BOUNCE_CHALLENGE — no gameSettings allowed
      {
        properties: {
          mode: { const: "BOUNCE_CHALLENGE" },
        },
        required: ["mode"],
        not: { required: ["gameSettings"] },
      },
    ],
  },
};

export const matchesParamsValidators = {
  params: {
    type: "object",
    properties: {
      matchId: { type: "string" },
    },
    required: ["matchId"],
  },
};
