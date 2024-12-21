import { Artigo } from "../../domain/entities/Artigo";

export interface ArtigoGateway {
  save({codigo, descricao}:Artigo): Promise<Artigo>;
  getByCodigo(artigo: string): Promise<Artigo | null>;
}
