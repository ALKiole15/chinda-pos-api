import { Artigo } from "./Artigo";
import { Subfamilia } from "./Subfamilia";

export class Familia {
  id: string;
  descricao: string;
  artigo: Artigo[];
  subfamilia: Subfamilia[];
  createdAt: Date;
  updatedAt: Date;

  constructor(data: {
    id: string;
    descricao: string;
    artigo: Artigo[];
    subfamilia: Subfamilia[];
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = data.id;
    this.descricao = data.descricao;
    this.artigo = data.artigo;
    this.subfamilia = data.subfamilia;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}