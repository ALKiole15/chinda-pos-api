import { ArtigoGateway } from "../../application/gateways/ArtigoGateway";
import { Artigo } from "../../domain/entities/Artigo";
import { db } from "../database/client";

export class ArtigoRepository implements ArtigoGateway {
  async save(artigo: Artigo): Promise<Artigo> {
    // Construir o objeto 'data' dinamicamente

    // Criar o registro no banco de dados
    return await db.artigo.create({
      data: {
          codigo: artigo.codigo,
          descricao:artigo.descricao,
          stkMin: artigo.stkMin ?? 10,
          unidade: artigo.unidade,
        // Adicionar relacionamentos condicionalmente
        ...(artigo.familia && {
          familia: {
            connect: { id: artigo.familiaId }, // Relacionamento com uma família existente
          },
        }),
        
      },
    });
  }

  async getByCodigo(artigo: string): Promise<Artigo | null> {
    const _artigo = await db.artigo.findUnique({ where: { codigo:artigo } });

    if(!_artigo){
      return null

    }

    return {
      id:_artigo.id,
      codigo: _artigo.codigo,
      descricao:_artigo.descricao,
      familiaId:_artigo.familiaId
    }

  }
}
