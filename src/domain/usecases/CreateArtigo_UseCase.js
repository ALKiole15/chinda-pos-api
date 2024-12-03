class CreateArtigo_UseCase {
    constructor(repo){
        this.repo = repo
    }

    async execute(artigo){
        return await this.repo.Save(artigo);
    }
}

module.exports = CreateArtigo_UseCase;