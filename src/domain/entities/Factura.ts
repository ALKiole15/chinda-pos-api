import { Artigo } from "./Artigo";
import { Cliente } from "./Cliente";



export class Factura {
  id: string;
  data: Date;
  estado?: string;
  total: number;
  cliente: Cliente;
  clienteId: string;
  tipoFactura: TipoFactura;
  tipoFacturaId: string;
  linhaFactura: LinhaFactura[];
  hash?: string;


  constructor(data: {
    id: string;
    data: Date;
    estado?: string;
    total: number;
    cliente: Cliente;
    clienteId: string;
    tipoFactura: TipoFactura;
    tipoFacturaId: string;
    linhaFactura: LinhaFactura[];
    hash?: string;

  }) {
    this.id = data.id;
    this.data = data.data;
    this.estado = data.estado;
    this.total = data.total;
    this.cliente = data.cliente;
    this.clienteId = data.clienteId;
    this.tipoFactura = data.tipoFactura;
    this.tipoFacturaId = data.tipoFacturaId;
    this.linhaFactura = data.linhaFactura;
    this.hash = data.hash;

  }
}

export class LinhaFactura {
    id: string;
    quantidade: number;
    preco: number;
    factura: Factura;
    facturaId: string;
    artigo: Artigo;
    artigoId: string;

  
    constructor(data: {
      id: string;
      quantidade: number;
      preco: number;
      factura: Factura;
      facturaId: string;
      artigo: Artigo;
      artigoId: string;
  
    }) {
      this.id = data.id;
      this.quantidade = data.quantidade;
      this.preco = data.preco;
      this.factura = data.factura;
      this.facturaId = data.facturaId;
      this.artigo = data.artigo;
      this.artigoId = data.artigoId;

    }
  }
  
  class TipoFactura {
    id: string;
    descricao: string;
    factura: Factura[];
    createdAt: Date;
    updatedAt: Date;
  
    constructor(data: {
      id: string;
      descricao: string;
      factura: Factura[];
      createdAt: Date;
      updatedAt: Date;
    }) {
      this.id = data.id;
      this.descricao = data.descricao;
      this.factura = data.factura;

    }
  }