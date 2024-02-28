/*
  Warnings:

  - You are about to drop the `user_story` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "features" ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "project_id" BIGINT;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "resources" ADD COLUMN     "points_per_day" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "user_story";

-- CreateTable
CREATE TABLE "user_stories" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "azure_id" INTEGER NOT NULL,
    "feature_id" BIGINT NOT NULL,

    CONSTRAINT "user stories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "features" ADD CONSTRAINT "features_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_stories" ADD CONSTRAINT "user_stories_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
