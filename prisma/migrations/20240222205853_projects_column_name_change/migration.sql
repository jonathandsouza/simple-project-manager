/*
  Warnings:

  - You are about to drop the column `project_name` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "project_name",
ADD COLUMN     "name" TEXT;
