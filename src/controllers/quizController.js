var quizModel = require("../models/quizModel");

function listarRespostasQuiz(req, res) {
    quizModel.listarRespostasQuiz().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarRespostasQuiz(req, res) {
    var qtdAcertos = req.body.qtdAcertosServer;
    var qtdErros = req.body.qtdErrosServer;

    if (qtdAcertos == undefined || qtdErros == undefined) {
        res.status(400).send("Os erros e acertos estão undefided!");
    }

    carroModel.cadastrarRespostasQuiz(qtdAcertos, qtdErros).then(function(resposta){
        res.status(200).send("Respostas cadastradas com sucesso!");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarRespostasQuiz,
    cadastrarRespostasQuiz
}