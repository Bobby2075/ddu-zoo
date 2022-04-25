/*
  Warnings:

  - You are about to drop the column `text` on the `news` table. All the data in the column will be lost.
  - Added the required column `h1` to the `news` table without a default value. This is not possible if the table is not empty.
  - Added the required column `h2` to the `news` table without a default value. This is not possible if the table is not empty.
  - Added the required column `h3` to the `news` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text1` to the `news` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text2` to the `news` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text3` to the `news` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_news" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "h1" TEXT NOT NULL,
    "h2" TEXT NOT NULL,
    "h3" TEXT NOT NULL,
    "text1" TEXT NOT NULL,
    "text2" TEXT NOT NULL,
    "text3" TEXT NOT NULL
);
INSERT INTO "new_news" ("author", "date", "id", "image") SELECT "author", "date", "id", "image" FROM "news";
DROP TABLE "news";
ALTER TABLE "new_news" RENAME TO "news";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
