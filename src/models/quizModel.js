var database = require("../database/config")

function exibirMediaAcertos() {
    var instrucao = `
    select round(avg(qtdAcertos), 0) as mediaAcertos from quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function exibirPontuacao() {
    var instrucao = `
    select qtdAcertos as pontuacao 
    from quiz 
    where fkUsuario
    order by fkUsuario desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarRespostasQuiz(idUsuario, qtdAcertos, qtdErros) {
    var instrucao = `
        INSERT INTO quiz (fkUsuario, qtdAcertos, qtdErros) VALUES ('${idUsuario}', '${qtdAcertos}', 
        '${qtdErros}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarRespostasQuiz,
    exibirMediaAcertos,
    exibirPontuacao,
};