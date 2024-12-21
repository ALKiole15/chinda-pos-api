import {CreateArtigoUseCase}  from '../../application/usecases/CreateArtigoUseCase';
import { ValidaArtigoRequestBody } from '../../infrastructure/dto/artigo';
import {ArtigoRepository}  from '../../infrastructure/repositories/ArtigoRepository';
import { Request, Response } from 'express';

const repo = new ArtigoRepository();

 export class ArtigoController {
    async SaveArtigo(req: Request, res: Response) {
        const { artigo, descricao } = ValidaArtigoRequestBody(req);
        try {
            const useCase = new CreateArtigoUseCase(repo);
            const data = await useCase.execute({ artigo, descricao });
            res.status(201).json(data);
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }
};
