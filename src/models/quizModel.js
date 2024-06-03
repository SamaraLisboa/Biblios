var database = require("../database/config")

function exibirMediaAcertos() {
    var instrucao = `
       select avg(qtdsAcertos) from quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarRespostasQuiz(qtdAcertos, qtdErros) {
    var instrucao = `
        INSERT INTO quiz (qtdAcertos, qtdErros) VALUES ('${qtdAcertos}', '${qtdErros}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarRespostasQuiz,
    exibirMediaAcertos
};