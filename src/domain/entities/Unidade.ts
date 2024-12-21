import { Preco } from "./Preco";


export class Unidade {
    id: string;
    descricao: string;
    preco: Preco[];
    createdAt: Date;
    upadatedAt: Date;
  
    constructor(data: {
      id: string;
      descricao: string;
      preco: Preco[];
      createdAt: Date;
      upadatedAt: Date;
    }) {
      this.id = data.id;
      this.descricao = data.descricao;
      this.preco = data.preco;
      this.createdAt = data.createdAt;
      this.upadatedAt = data.upadatedAt;
    }
  }