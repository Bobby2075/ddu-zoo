-- CreateTable
CREATE TABLE "animals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "animal" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "info" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "news" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL
);
