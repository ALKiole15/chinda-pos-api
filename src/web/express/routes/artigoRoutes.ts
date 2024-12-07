import { Router } from "express";
import { ArtigoRepository } from "../../../infrastructure/repositories/ArtigoRepository";
import { CreateArtigoUseCase } from "../../../application/usecases/CreateArtigoUseCase";

const userRoutes = Router();
const artigoRepository = new ArtigoRepository();
const createArtigoUseCase = new CreateArtigoUseCase(artigoRepository);

userRoutes.post("/artigos", async (req, res) => {
  try {
    const Artigo = req.body;
    const user = await createArtigoUseCase.execute(Artigo);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export { userRoutes };
