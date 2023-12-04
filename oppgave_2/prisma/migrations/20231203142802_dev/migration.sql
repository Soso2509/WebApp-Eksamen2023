-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gender" TEXT NOT NULL,
    "sport" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Meta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "heartrate" INTEGER NOT NULL,
    "watt" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Meta_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Activities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT,
    "tags" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "activitiesId" TEXT NOT NULL,
    CONSTRAINT "Questions_activitiesId_fkey" FOREIGN KEY ("activitiesId") REFERENCES "Activities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Intervals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "duration" INTEGER NOT NULL,
    "intensity" INTEGER NOT NULL,
    "activitiesId" TEXT NOT NULL,
    CONSTRAINT "Intervals_activitiesId_fkey" FOREIGN KEY ("activitiesId") REFERENCES "Activities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
