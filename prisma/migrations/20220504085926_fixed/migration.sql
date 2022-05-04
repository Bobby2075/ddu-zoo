/*
  Warnings:

  - Added the required column `title` to the `news` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_news" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "h1" TEXT NOT NULL,
    "h2" TEXT NOT NULL,
    "h3" TEXT NOT NULL,
    "text1" TEXT NOT NULL,
    "text2" TEXT NOT NULL,
    "text3" TEXT NOT NULL
);
INSERT INTO "new_news" ("author", "date", "h1", "h2", "h3", "id", "image", "text1", "text2", "text3") SELECT "author", "date", "h1", "h2", "h3", "id", "image", "text1", "text2", "text3" FROM "news";
DROP TABLE "news";
ALTER TABLE "new_news" RENAME TO "news";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
