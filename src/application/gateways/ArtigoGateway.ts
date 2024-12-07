import { Artigo } from "../../domain/entities/Artigo";

export interface ArtigoGateway {
  save({artigo, descricao}): Promise<Artigo>;
  getByCodigo(artigo: string): Promise<Artigo | null>;
}
