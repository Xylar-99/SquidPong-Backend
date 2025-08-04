

const updateUserSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    userId: { type: "integer" },

    username: { type: "string" },
    fname: { type: "string" },
    lname: { type: "string" },
    bio: { type: ["string", "null"] },
    banner: { type: ["string", "null"] },
    avatar: { type: "string" },

    status: { type: "string", enum: ["online", "offline"] },

    walletBalance: { type: "integer" },

    playerStats: { type: ["object", "null"] }, // Json stored as object
    playerCharacters: { type: ["array", "null"], items: { type: "string" } },
    playerSelectedCharacter: { 
      type: ["string", "null"],
      enum: ["WARRIOR", "MAGE", "ARCHER", "ROGUE"] 
    },

    preferences: { type: ["object", "null"] },
    matchHistory: { type: ["array", "null"], items: { type: "string" } },

    isVerified: { type: "boolean" },

    rankDivision: { 
      type: "string",
      enum: ["BRONZE", "SILVER", "GOLD", "PLATINUM"]
    },
    rankTier: {
      type: "string",
      enum: ["TIER1", "TIER2", "TIER3"]
    },

    totalGames: { type: "integer" },
    wins: { type: "integer" },
    losses: { type: "integer" },
    rank: { type: "integer" },
    level: { type: "integer" },

    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" }
  },
  additionalProperties: false,
  // no required fields (all optional)
};




export { updateUserSchema };
