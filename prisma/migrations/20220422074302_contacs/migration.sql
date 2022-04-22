/*
  Warnings:

  - You are about to drop the `signup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "signup";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mail" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
