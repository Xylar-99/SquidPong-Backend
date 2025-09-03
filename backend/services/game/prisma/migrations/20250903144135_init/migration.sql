-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MatchPlayer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "username" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "isAI" BOOLEAN NOT NULL DEFAULT false,
    "finalScore" INTEGER NOT NULL DEFAULT 0,
    "isReady" BOOLEAN NOT NULL DEFAULT false,
    "isHost" BOOLEAN NOT NULL DEFAULT false,
    "isWinner" BOOLEAN NOT NULL DEFAULT false,
    "isResigned" BOOLEAN NOT NULL DEFAULT false,
    "characterId" TEXT NOT NULL,
    "paddleId" TEXT NOT NULL,
    "rankTier" TEXT NOT NULL,
    "rankDivision" TEXT NOT NULL,
    "rankChange" INTEGER,
    CONSTRAINT "MatchPlayer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MatchPlayer" ("avatarUrl", "characterId", "finalScore", "id", "isAI", "isHost", "isReady", "paddleId", "rankChange", "rankDivision", "rankTier", "userId", "username") SELECT "avatarUrl", "characterId", "finalScore", "id", "isAI", "isHost", "isReady", "paddleId", "rankChange", "rankDivision", "rankTier", "userId", "username" FROM "MatchPlayer";
DROP TABLE "MatchPlayer";
ALTER TABLE "new_MatchPlayer" RENAME TO "MatchPlayer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
