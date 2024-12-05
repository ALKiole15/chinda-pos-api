import { Familia } from "./Familia";

export class Artigo {
    constructor(
      public artigo: string,
      public descricao: string,
      public unidade: string,
      public stkMin: number,
      public createdAt: Date,
      public familia?: string,
      public familias?: Familia,
      public subfamilia?: string,
    ) {}
  }
  