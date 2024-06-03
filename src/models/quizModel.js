var database = require("../database/config")

function listarRespostasQuiz() {
    var instrucao = `
        SELECT * FROM biblios;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarRespostasQuiz(qtdAcertos, qtdErros) {
    var instrucao = `
        INSERT INTO bibios (qtdAcertos, qtdErros) VALUES ('${qtdAcertos}', '${qtdErros}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarRespostasQuiz,
    listarRespostasQuiz
};