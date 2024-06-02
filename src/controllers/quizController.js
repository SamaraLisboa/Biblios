var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarRespostasQuiz(req, res) {
    var genFavAventura = req.body.genFavAventuraServer;
    var genFavRomance = req.body.genFavRomanceServer;
    var genFavTerror = req.body.genFavTerrorServer;
    var genFavOutro = req.body.genFavOutroServer;
    var prefTrilogia = req.body.prefTrilogiaServer;
    var prefUnitario = req.body.prefUnitarioServer;
    var prefAmbos = req.body.prefAmbosServer;
    var fimFeliz = req.body.fimFelizServer;
    var fimReflexivo = req.body.fimReflexivoServer;
    var adptaFilmesSim = req.body.adptaFilmesSimServer;
    var adtaFilmesNao = req.body.adtaFilmesNaoServer;
    var adptaFilmesEspecificos = req.body.adptaFilmesEspecificosServer;
    var livrosFisicos = req.body.livrosFisicosServer;
    var livrosEbooks = req.body.livrosEbooksServer;
    var livrosAudiolivros  = req.body.livrosAudiolivrosServer;
    var compSebos = req.body.compSebosServer;
    var compLivraria = req.body.compLivrariaServer;
    var compOnline = req.body.compOnlineServer;
    var compOutros = req.body.compSebosServer;
    var releLivrosSim = req.body.releLivrosSimServer;
    var releLivrosNao = req.body.releLivrosNaoServer;
    var releLivrosFav = req.body.releLivrosFavServer;

    quizModel.cadastrar(genFavAventura, genFavRomance, genFavTerror, genFavOutro, prefTrilogia, prefUnitario, 
        prefAmbos, fimFeliz, fimReflexivo, adptaFilmesSim, adtaFilmesNao, adptaFilmesEspecificos, livrosFisicos,
        livrosEbooks, livrosAudiolivros, compSebos, compLivraria, compOnline, compOutros, releLivrosSim, releLivrosNao, releLivrosFav
    ).then(function(resultado){
        res.status(200).send("Quiz respondido com sucesso!");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrarRespostasQuiz
}