/*
  Warnings:

  - You are about to drop the column `bookType` on the `books` table. All the data in the column will be lost.
  - Added the required column `description` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BookStatus" AS ENUM ('DRAFT', 'IN_PROGRESS', 'FINISHED');

-- AlterTable
ALTER TABLE "books" DROP COLUMN "bookType",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "status" "BookStatus" NOT NULL,
ADD COLUMN     "type" "BookType" NOT NULL;
