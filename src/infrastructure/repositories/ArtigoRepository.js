const { Artigo } = require('../../models');

class ArtigoRepository{
    async Save(artigo){
       return await Artigo.create({ Artigo: artigo.Artigo, Descricao: artigo.Descricao});
    }
}

module.exports = ArtigoRepository;