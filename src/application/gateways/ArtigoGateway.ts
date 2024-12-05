import { Artigo } from "../../domain/entities/Artigo";

export interface ArtigoGateway {
  save(user: Partial<Artigo>): Promise<Artigo>;
  getByCodigo(artigo: string): Promise<Artigo | null>;
}
