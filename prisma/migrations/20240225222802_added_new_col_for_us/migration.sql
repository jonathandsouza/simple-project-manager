/*
  Warnings:

  - Added the required column `team_id` to the `resources` table without a default value. This is not possible if the table is not empty.
  - Added the required column `azure_id` to the `user_story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "resources" ADD COLUMN     "team_id" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "user_story" ADD COLUMN     "azure_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "resources" ADD CONSTRAINT "resources_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
