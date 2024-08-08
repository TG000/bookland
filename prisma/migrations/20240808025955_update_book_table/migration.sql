/*
  Warnings:

  - Added the required column `image_url` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "alternative_title" TEXT,
ADD COLUMN     "image_url" TEXT NOT NULL,
ALTER COLUMN "published_at" SET DEFAULT CURRENT_TIMESTAMP;
