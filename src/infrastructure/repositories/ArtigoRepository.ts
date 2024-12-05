import { PrismaClient } from "@prisma/client";
import { ArtigoGateway } from "../../application/gateways/ArtigoGateway";
import { Artigo } from "../../domain/entities/Artigo";

export class ArtigoRepository implements ArtigoGateway {
  
  private prisma = new PrismaClient();

  async save(artigo: Partial<Artigo>): Promise<Artigo> {
    const createdArtigo = await this.prisma.artigo.create({ data: artigo });
    return createdArtigo;
  }

  async getByCodigo(codigo: string): Promise<Artigo | null> {
    const artigo = await this.prisma.artigo.findUnique({ where: { codigo } });
    return artigo
      ? artigo
      : null;
  }
}
