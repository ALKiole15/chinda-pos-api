import { Artigo } from "./Artigo";
import { Familia } from "./Familia";

export class Subfamilia {
  id: string;
  descricao: string;
  familia: Familia;
  familiaId: string;
  artigo: Artigo;
  artigoId: string;


  constructor(data: {
    id: string;
    descricao: string;
    familia: Familia;
    familiaId: string;
    artigo: Artigo;
    artigoId: string;

  }) {
    this.id = data.id;
    this.descricao = data.descricao;
    this.familia = data.familia;
    this.familiaId = data.familiaId;
    this.artigo = data.artigo;
    this.artigoId = data.artigoId;

  }
}