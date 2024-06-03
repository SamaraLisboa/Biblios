var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrarRespostasQuiz", function (req, res) {
    quizController.cadastrarRespostasQuiz(req, res);
});

router.get("/listarRespostasQuiz", function (req, res) {
    quizController.listarRespostasQuiz(req, res);
});

module.exports = router;