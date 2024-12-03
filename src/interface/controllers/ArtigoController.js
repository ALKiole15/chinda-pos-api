const CreateArtigo_UseCase = require('../../domain/usecases/CreateArtigo_UseCase');
const ArtigoRepository = require('../../infrastructure/repositories/ArtigoRepository');

const repo = new ArtigoRepository();

module.exports = {
    async SaveArtigo(req, res) {
        const { Artigo, Descricao } = req.body;
        try {
            const useCase = new CreateArtigo_UseCase(repo);
            const artigo = await useCase.execute({ Artigo, Descricao });
            res.status(201).json(artigo);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};
