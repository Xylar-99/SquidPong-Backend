/*
  Warnings:

  - You are about to drop the column `playerName` on the `MatchPlayer` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `rankDivision` to the `MatchPlayer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankTier` to the `MatchPlayer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `MatchPlayer` table without a default value. This is not possible if the table is not empty.

*/
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
    "characterId" TEXT NOT NULL,
    "paddleId" TEXT NOT NULL,
    "rankTier" TEXT NOT NULL,
    "rankDivision" TEXT NOT NULL,
    "rankChange" INTEGER,
    CONSTRAINT "MatchPlayer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MatchPlayer" ("characterId", "finalScore", "id", "isAI", "isHost", "isReady", "paddleId", "rankChange", "userId") SELECT "characterId", "finalScore", "id", "isAI", "isHost", "isReady", "paddleId", "rankChange", "userId" FROM "MatchPlayer";
DROP TABLE "MatchPlayer";
ALTER TABLE "new_MatchPlayer" RENAME TO "MatchPlayer";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
