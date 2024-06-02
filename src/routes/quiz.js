var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrarRespostasQuiz", function (req, res) {
    quizController.cadastrarRespostasQuiz(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    quizController.listar(req, res);
});

module.exports = router;