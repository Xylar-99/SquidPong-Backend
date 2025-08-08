

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




// ---------------- LOGIN ----------------
export const loginSchema = {
  body: {
    type: "object",
    properties: {
      email: { type: "string", format: "email" },
      password: { type: "string", minLength: 4 },
    },
    required: ["email", "password"],
    additionalProperties: false,
  },
  tags: ["Auth"],
  description: "Login with email and password",
  response: {
    200: {
      type: "object",
      allOf: [ApiResponseSchema],
      properties: {
        data: {
          type: "object",
          properties: {
            is2FAEnabled: { type: "boolean" },
            token: { type: "string" },
          },
          required: ["is2FAEnabled", "token"],
        },
      },
    },
    400: ApiErrorSchema,
  },
};

// ---------------- SIGNUP ----------------
export const signupSchema = {
  body: {
    type: "object",
    properties: {
      fname: { type: "string" },
      lname: { type: "string" },
      username: { type: "string" },
      email: { type: "string", format: "email" },
      password: { type: "string", minLength: 6 },
    },
    required: ["email", "username", "fname", "lname", "password"],
    additionalProperties: false,
  },
  tags: ["Auth"],
  description: "Register a new account and send verification email",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};

// ---------------- VERIFY EMAIL ----------------
export const verifyEmailSchema = {
  body: {
    type: "object",
    properties: {
      email: { type: "string", format: "email" },
      code: { type: "string", minLength: 2 },
    },
    required: ["email", "code"],
    additionalProperties: false,
  },
  tags: ["Auth"],
  description: "Verify email with code and create account",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};

// ---------------- FORGOT PASSWORD ----------------
export const forgotPasswordSchema = {
  body: {
    type: "object",
    required: ["email"],
    properties: {
      email: { type: "string", format: "email" },
    },
  },
  tags: ["Auth"],
  description: "Send password reset code to email",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};

// ---------------- CHANGE PASSWORD ----------------
export const changePasswordSchema = {
  body: {
    type: "object",
    required: ["oldPassword", "newPassword"],
    properties: {
      oldPassword: { type: "string", minLength: 8 },
      newPassword: { type: "string", minLength: 8 },
    },
  },
  tags: ["Auth"],
  description: "Change user password",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};

// ---------------- RESET PASSWORD ----------------
export const resetPasswordSchema = {
  body: {
    type: "object",
    required: ["email", "code", "newPassword", "confirmPassword"],
    properties: {
      email: { type: "string", format: "email" },
      code: { type: "string" },
      newPassword: { type: "string", minLength: 8 },
      confirmPassword: { type: "string", minLength: 8 },
    },
  },
  tags: ["Auth"],
  description: "Reset password using code",
  response: {
    200: ApiResponseSchema,
    400: ApiErrorSchema,
  },
};
