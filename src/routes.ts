import express from "express";
import {ArtigoController} from  './interface/controllers/ArtigoController';

const router = express.Router();
const artigoController = new ArtigoController();

router.post('/artigos', artigoController.SaveArtigo);


export default router;