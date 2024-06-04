var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrarRespostasQuiz/:idUsuario", function (req, res) {
    quizController.cadastrarRespostasQuiz(req, res);
});

router.get("/exibirMediaAcertos", function (req, res) {
    quizController.exibirMediaAcertos(req, res);
});

router.get("/exibirPontuacao", function (req, res) {
    quizController.exibirPontuacao(req, res);
});

module.exports = router;