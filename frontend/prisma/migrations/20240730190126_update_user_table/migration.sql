/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "auth"."User" DROP COLUMN "password",
ALTER COLUMN "displayName" DROP NOT NULL;
