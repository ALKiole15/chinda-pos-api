import { Artigo } from "./Artigo";

export class Iva {
    id: string;
    descricao: string;
    taxa: number;
    artigo: Artigo;
    artigoId: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(data: {
      id: string;
      descricao: string;
      taxa: number;
      artigo: Artigo;
      artigoId: string;
      createdAt: Date;
      updatedAt: Date;
    }) {
      this.id = data.id;
      this.descricao = data.descricao;
      this.taxa = data.taxa;
      this.artigo = data.artigo;
      this.artigoId = data.artigoId;
      this.createdAt = data.createdAt;
      this.updatedAt = data.updatedAt;
    }
  }