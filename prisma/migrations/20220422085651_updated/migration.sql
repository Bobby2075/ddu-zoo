/*
  Warnings:

  - Added the required column `billed` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_animals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "animal" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "billed" TEXT NOT NULL
);
INSERT INTO "new_animals" ("animal", "id", "info", "location", "status") SELECT "animal", "id", "info", "location", "status" FROM "animals";
DROP TABLE "animals";
ALTER TABLE "new_animals" RENAME TO "animals";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
