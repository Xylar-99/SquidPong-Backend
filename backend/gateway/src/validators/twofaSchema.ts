// schemas/twofaSchemas.ts
const ApiResponseSchema = {
  type: "object",
  properties: {
    success: { type: "boolean" },
    message: { type: "string" },
  },
  required: ["success", "message"],
};

const ApiErrorSchema = {
  type: "object",
  properties: {
    success: { type: "boolean", default: false },
    message: { type: "string" },
  },
  required: ["success", "message"],
};



// ---------- GET /api/2fa/setup ----------
export const twofaSetupSchema = {
  tags: ["2FA"],
  description: "Generate a new 2FA QR code and secret key for the authenticated user",
  response: {
    200: {
      type: "object",
      allOf: [ApiResponseSchema],
      properties: {
        data: {
          type: "object",
          properties: {
            QRCode: { type: "string", description: "Base64 QR code image" },
            key: { type: "string", description: "2FA secret key" },
          },
          required: ["QRCode", "key"],
        },
      },
    },
    400: ApiErrorSchema,
  },
};

// ---------- GET /api/2fa/status ----------
export const twofaStatusSchema = {
  tags: ["2FA"],
  description: "Check if the authenticated user has 2FA enabled",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};

// ---------- POST /api/2fa/verify ----------
export const twofaVerifySchema = {
  body: {
    type: "object",
    required: ["token", "code"],
    properties: {
      token: { type: "string", description: "Temporary token from login step" },
      code: { type: "string", description: "2FA verification code" },
    },
    additionalProperties: false,
  },
  tags: ["2FA"],
  description: "Verify a 2FA code and complete the login process",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};

// ---------- POST /api/2fa/disable ----------
export const twofaDisableSchema = {
  tags: ["2FA"],
  description: "Disable 2FA for the authenticated user",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};

// ---------- POST /api/2fa/enable ----------
export const twofaEnableSchema = {
  body: {
    type: "object",
    required: ["code"],
    properties: {
      code: { type: "string", description: "2FA verification code" },
    },
    additionalProperties: false,
  },
  tags: ["2FA"],
  description: "Enable 2FA for the authenticated user",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};
