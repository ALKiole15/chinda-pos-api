/*
  Warnings:

  - The primary key for the `Artigo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `Artigo` table. All the data in the column will be lost.
  - You are about to drop the column `precoId` on the `Artigo` table. All the data in the column will be lost.
  - You are about to drop the `Imposto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `codigo` to the `Artigo` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Artigo` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `artigoId` to the `Preco` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Artigo" DROP CONSTRAINT "Artigo_precoId_fkey";

-- DropForeignKey
ALTER TABLE "Imposto" DROP CONSTRAINT "Imposto_artigoId_fkey";

-- DropForeignKey
ALTER TABLE "LinhaFactura" DROP CONSTRAINT "LinhaFactura_artigoId_fkey";

-- DropForeignKey
ALTER TABLE "Subfamilia" DROP CONSTRAINT "Subfamilia_artigoId_fkey";

-- AlterTable
ALTER TABLE "Artigo" DROP CONSTRAINT "Artigo_pkey",
DROP COLUMN "ID",
DROP COLUMN "precoId",
ADD COLUMN     "codigo" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Artigo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Preco" ADD COLUMN     "artigoId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Imposto";

-- CreateTable
CREATE TABLE "Iva" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "taxa" DOUBLE PRECISION NOT NULL,
    "artigoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Iva_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subfamilia" ADD CONSTRAINT "Subfamilia_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "Artigo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Iva" ADD CONSTRAINT "Iva_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "Artigo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preco" ADD CONSTRAINT "Preco_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "Artigo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinhaFactura" ADD CONSTRAINT "LinhaFactura_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "Artigo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
