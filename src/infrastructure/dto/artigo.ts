import { Request } from "express";
import { z } from "zod";

/**
 * @openapi
 * components:
 *  schemas:
 *    ValidaArtigoRequestBody:
 *      type: object
 *      required:
 *        - artigo
 *        - descricao
 *      properties: 
 *        artigo:
 *          type: string
 *          minLength: 5
 *        password:
 *          type: string
 *          minLength: 8
 * 
 */

export function ValidaArtigoRequestBody(request: Request) {
  const schema = z.object({
    artigo: z.string().min(5),
    descricao: z.string().min(8),
  });
  return schema.parse(request.body);
}
