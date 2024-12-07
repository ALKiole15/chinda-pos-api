import { PrismaClient, Prisma } from "@prisma/client";
import { ArtigoGateway } from "../../application/gateways/ArtigoGateway";
import { Artigo } from "../../domain/entities/Artigo";

export class ArtigoRepository implements ArtigoGateway {
  
  private prisma = new PrismaClient();

  async save(artigo: Partial<Artigo>): Promise<Artigo> {
    // Construir o objeto 'data' dinamicamente
    const data: Prisma.ArtigoCreateInput = {
      artigo: artigo.artigo ?? "", // Campo obrigatório
      descricao: artigo.descricao ?? "", // Campo obrigatório
      unidade: artigo.unidade ?? "", // Campo obrigatório
      stkMin: artigo.stkMin ?? 0, // Campo obrigatório
      createdAt: artigo.createdAt ?? new Date(), // Valor padrão
      // Adicionar relacionamentos condicionalmente
      ...(artigo.familia && {
        familias: {
          connect: { familia: artigo.familia }, // Relacionamento com uma família existente
        },
      }),
      ...(artigo.subfamilia && artigo.familia && {
        subfamilias: {
          connect: {
            subfamilia_familia: {
              subfamilia: artigo.subfamilia,
              familia: artigo.familia,
            },
          },
        },
      }),
    };
  
    // Criar o registro no banco de dados
    const createdArtigo = await this.prisma.artigo.create({ data });
    return createdArtigo;
  }
  
  
  async getByCodigo(artigo: string): Promise<Artigo | null> {
    const _artigo = await this.prisma.artigo.findUnique({ where: { artigo } });
    return _artigo
      ? _artigo
      : null;
  }
}
