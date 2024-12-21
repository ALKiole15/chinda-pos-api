import { Factura } from "./Factura";

export class Cliente {
    id: string;
    nome: string;
    morada: string;
    telefone: string;
    email: string;
    nif: string;
    factura: Factura[];
    createdAt: Date;
  
    constructor(data: {
      id: string;
      nome: string;
      morada: string;
      telefone: string;
      email: string;
      nif: string;
      factura: Factura[];
      createdAt: Date;
    }) {
      this.id = data.id;
      this.nome = data.nome;
      this.morada = data.morada;
      this.telefone = data.telefone;
      this.email = data.email;
      this.nif = data.nif;
      this.factura = data.factura;
      this.createdAt = data.createdAt;
    }
  }