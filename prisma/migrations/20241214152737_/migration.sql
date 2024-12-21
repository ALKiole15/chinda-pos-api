-- CreateTable
CREATE TABLE "Familia" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Familia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subfamilia" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "familiaId" TEXT NOT NULL,
    "artigoId" TEXT NOT NULL,

    CONSTRAINT "Subfamilia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artigo" (
    "ID" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "precoId" TEXT NOT NULL,
    "familiaId" TEXT NOT NULL,
    "stkMin" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Artigo_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Imposto" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "taxa" DOUBLE PRECISION NOT NULL,
    "artigoId" TEXT NOT NULL,

    CONSTRAINT "Imposto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preco" (
    "id" TEXT NOT NULL,
    "preco_1" DOUBLE PRECISION NOT NULL,
    "preco_2" DOUBLE PRECISION,
    "preco_3" DOUBLE PRECISION,
    "preco_4" DOUBLE PRECISION,
    "unidadeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Preco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidade" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subfamilia" ADD CONSTRAINT "Subfamilia_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "Familia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Subfamilia" ADD CONSTRAINT "Subfamilia_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "Artigo"("ID") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Artigo" ADD CONSTRAINT "Artigo_precoId_fkey" FOREIGN KEY ("precoId") REFERENCES "Preco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artigo" ADD CONSTRAINT "Artigo_familiaId_fkey" FOREIGN KEY ("familiaId") REFERENCES "Familia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imposto" ADD CONSTRAINT "Imposto_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "Artigo"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preco" ADD CONSTRAINT "Preco_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
