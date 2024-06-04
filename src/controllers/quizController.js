var quizModel = require("../models/quizModel");

function exibirMediaAcertos(req, res) {
    quizModel.exibirMediaAcertos().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarRespostasQuiz(req, res) {
    var idUsuario= req.params.idUsuario;
    var qtdAcertos = req.body.qtdAcertosServer;
    var qtdErros = req.body.qtdErrosServer;

    if (qtdAcertos == undefined || qtdErros == undefined) {
        res.status(400).send("Os erros e acertos estão undefided!");
    }

    quizModel.cadastrarRespostasQuiz(idUsuario, qtdAcertos, qtdErros).then(function(resultado){

        res.status(200).send("Respostas cadastradas com sucesso!");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function exibirPontuacao(req, res) {
    quizModel.exibirPontuacao().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    exibirMediaAcertos,
    cadastrarRespostasQuiz,
    exibirPontuacao,
}