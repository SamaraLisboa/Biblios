var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM biblios;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarRespostasQuiz(genFavAventura, genFavRomance, genFavTerror, genFavOutro, prefTrilogia, prefUnitario, prefAmbos, fimFeliz, fimReflexivo, adptaFilmesSim, adtaFilmesNao, adptaFilmesEspecificos, livrosFisicos, livrosEbooks, livrosAudiolivros, compSebos, compLivraria, compOnline, compOutros, releLivrosSim, releLivrosNao, releLivrosFav) {
    var instrucao = `
        INSERT INTO quizRespostas (genFavAventura, genFavRomance, genFavTerror, genFavOutro, prefTrilogia, prefUnitario, prefAmbos, fimFeliz, fimReflexivo, adptaFilmesSim, adtaFilmesNao, adptaFilmesEspecificos, livrosFisicos, livrosEbooks, livrosAudiolivros, compSebos, compLivraria, compOnline, compOutros, releLivrosSim, releLivrosNao, releLivrosFav) 
        VALUES ('${genFavAventura}', '${genFavRomance}', '${genFavTerror}', 
        '${genFavOutro}', '${prefTrilogia}',
        '${prefUnitario}', '${prefAmbos}', '${fimFeliz}', '${fimReflexivo}', 
        '${adptaFilmesSim}', '${adtaFilmesNao}',
        '${adptaFilmesEspecificos}', '${livrosFisicos}', '${livrosEbooks}', 
        '${livrosAudiolivros}', 
        '${compSebos}', '${compLivraria}', '${compOnline}', '${compOutros}', 
        '${releLivrosSim}', '${releLivrosNao}', '${releLivrosFav}'
        ), ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarRespostasQuiz
};