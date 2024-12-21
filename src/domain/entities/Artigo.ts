
import { LinhaFactura } from "./Factura";
import { Familia } from "./Familia";
import { Iva } from "./IVA";
import { Preco } from "./Preco";
import { Subfamilia } from "./Subfamilia";

export class Artigo {
  id: string;
  codigo: string;
  descricao: string;
  unidade: string;
  preco: Preco[];
  familia: Familia;
  linhaFactura: LinhaFactura[];
  subfamilia: Subfamilia[];
  imposto: Iva[];
  stkMin: number;


  constructor(data: {
    id: string;
    codigo: string;
    descricao: string;
    unidade: string;
    preco: Preco[];
    familia: Familia;
    linhaFactura: LinhaFactura[];
    subfamilia: Subfamilia[];
    imposto: Iva[];
    stkMin: number;

  }) {
    this.id = data.id;
    this.codigo = data.codigo;
    this.descricao = data.descricao;
    this.unidade = data.unidade;
    this.preco = data.preco;
    this.familia = data.familia;
    this.familiaId = data.familiaId;
    this.linhaFactura = data.linhaFactura;
    this.subfamilia = data.subfamilia;
    this.imposto = data.imposto;
    this.stkMin = data.stkMin;

  }
}
