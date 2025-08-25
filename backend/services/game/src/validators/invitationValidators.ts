export const createInvitationValidator = {
  body: {
    type: "object",
    required: [
      "expiresAt",
      "scoreLimit",
      "pauseTime",
      "allowPowerUps",
      "requiredCurrency",
    ],
    properties: {
      recieverId: { type: "string" },
      expiresAt: { type: "string", format: "date-time" },
      scoreLimit: {
        type: "integer",
        enum: [5, 10, 15, 20],
      },
      pauseTime: {
        type: "integer",
        enum: [30, 60, 90],
      },
      allowPowerUps: { type: "boolean" },
      requiredCurrency: {
        type: "integer",
        minimum: 0,
      },
      message: {
        type: "string",
        maxLength: 200,
      },
    },
  },
};
