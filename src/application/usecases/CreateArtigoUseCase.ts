import { ArtigoGateway } from "../gateways/ArtigoGateway";
import { Artigo } from "../../domain/entities/Artigo";

export class CreateArtigoUseCase {
  constructor(private artigoRepository: ArtigoGateway) {}

  async execute(artigo: Artigo): Promise<Artigo> {

    const existingArtigo = await this.artigoRepository.getByCodigo(artigo.artigo);

    if (existingArtigo) {
      throw new Error("O Artigo já existe");
    }

    return this.artigoRepository.save(artigo);
  }
}
