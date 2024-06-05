var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/ultimasRespostas", function (req, res) {
    dashboardController.ultimasRespostas(req, res);
});

module.exports = router;