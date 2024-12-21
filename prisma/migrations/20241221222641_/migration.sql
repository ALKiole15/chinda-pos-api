/*
  Warnings:

  - A unique constraint covering the columns `[codigo]` on the table `Artigo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Artigo_codigo_key" ON "Artigo"("codigo");
