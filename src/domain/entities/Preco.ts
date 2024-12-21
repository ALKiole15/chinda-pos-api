import { Artigo } from "./Artigo";
import { Unidade } from "./Unidade";



export class Preco {
  id: string;
  preco_1: number;
  preco_2?: number;
  preco_3?: number;
  preco_4?: number;
  unidade: Unidade;
  unidadeId: string;
  artigo: Artigo;
  artigoId: string;


  constructor(data: {
    id: string;
    preco_1: number;
    preco_2?: number;
    preco_3?: number;
    preco_4?: number;
    unidade: Unidade;
    unidadeId: string;
    artigo: Artigo;
    artigoId: string;

  }) {
    this.id = data.id;
    this.preco_1 = data.preco_1;
    this.preco_2 = data.preco_2;
    this.preco_3 = data.preco_3;
    this.preco_4 = data.preco_4;
    this.unidade = data.unidade;
    this.unidadeId = data.unidadeId;
    this.artigo = data.artigo;
    this.artigoId = data.artigoId;

  }
}

