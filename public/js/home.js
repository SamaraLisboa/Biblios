const comecarQuizButton = document.querySelector(".comecar-quiz");
const cardQuestoes = document.querySelector(".card-questoes");
const questoesButtons = document.querySelector(".questoesQuiz");
const perguntaTitulo = document.querySelector(".perguntas");
const proximaPerguntaButton = document.querySelector(".proxima-pergunta")

comecarQuizButton.addEventListener("click", comecarQuiz);
proximaPerguntaButton.addEventListener("click", proximaPergunta);

let perguntaVezIndex = 0;
let totalRespostasCorretas = 0;
let totalErros = 0;

function comecarQuiz() {
    comecarQuizButton.classList.add("hide");
    cardQuestoes.classList.remove("hide");

    proximaPergunta();
}

function proximaPergunta() {
    resetarConfiguracoesQuiz();

    if (perguntasQuiz.length === perguntaVezIndex) {
        return finalizarQuiz();
    }

    perguntaTitulo.textContent = perguntasQuiz[perguntaVezIndex].question
    perguntasQuiz[perguntaVezIndex].answers.forEach(answer => {
        const novaResposta = document.createElement("button")
        novaResposta.classList.add("button", "answer")
        novaResposta.textContent = answer.text

        if (answer.correct) {
            novaResposta.dataset.respostaCorreta = answer.correct
        }

        questoesButtons.appendChild(novaResposta)

        novaResposta.addEventListener("click", selecionarRespostaCorreta)
    })
}

function resetarConfiguracoesQuiz() {
    while (questoesButtons.firstChild) {
        questoesButtons.removeChild(questoesButtons.firstChild)
    }

    proximaPerguntaButton.classList.add("hide")
}

function selecionarRespostaCorreta(event) {

    const respostaSelecionada = event.target;

    if (respostaSelecionada.dataset.respostaCorreta) {
        totalRespostasCorretas++
    } else {
        totalErros++
    }

        document.querySelectorAll('.questoesQuiz .answer').forEach(button => {
        if (button.dataset.respostaCorreta) {
            button.classList.add("fundoRespostaCorreta");
        } else {
            button.classList.add("fundoRespostaIncorreta");
        }
        button.disabled = true
    });

    proximaPerguntaButton.classList.remove("hide")
    perguntaVezIndex++
}

function finalizarQuiz() {
    const totalQuestoes = perguntasQuiz.length;
    const performance = Math.floor((totalRespostasCorretas * 100 ) / totalQuestoes)

    let mensagem = ""

    switch (true) {
        case (performance >= 90):
            mensagem = "Uau, você é um leitor ativo!"
            break
        case (performance >= 70):
            mensagem = "Mandou bem! Falta pouco para se tornar um leitor ativo!"
            break
        case (performance >= 50):
            mensagem = "Você foi bem, mas pode melhorar!"
            break
        default:
            mensagem = "Poxa, você precisa ler mais!"
    }

    cardQuestoes.innerHTML = 
    `
    <p class="quiz-mensagemFinal">
    Você acertou ${totalRespostasCorretas} de ${totalQuestoes} questões!
    <span>Resultado: ${mensagem}</span>
    </p>

    <button onclick=window.location.reload() class="button">Refazer Teste</button>
    `
    cadastrarRespostasQuiz();
}

function cadastrarRespostasQuiz() {
    fetch("quiz/cadastrarRespostasQuiz", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         qtdAcertosServer: totalRespostasCorretas,
         qtdErrosServer: totalErros,
       }),
     })
       .then(function (resposta) {
         console.log("resposta: ", resposta);
   
         if (resposta.ok) {
           cardErro.style.display = "block";
   
           mensagem_erro.innerHTML =
             "Respostas cadastradas com sucesso!";
   
         } else {
           throw "Houve um erro ao cadastrar as respostas!";
         }
       })
       .catch(function (resposta) {
         console.log(`#ERRO: ${resposta}`);
       });
   
     return false;
   
   function sumirMensagem() {
     cardErro.style.display = "none";
   }
}

const perguntasQuiz = [
    {
        question: 'Qual o conflito enfrentado pelos personagens de Dezesseis Luas?',
        answers: [
            { text: "Guerra entre lobisomens e vampiros", correct: false },
            { text: "Desaparecimento de uma criança", correct: false },
            { text: "Amor impossível", correct: false },
            { text: "Uma maldição de família", correct: true }
        ]
    },
    {
        question: 'Quais os seres sobrenaturais de Sussuro?',
        answers: [
            { text: 'Fantasmas', correct: false },
            { text: 'Anjos', correct: true },
            { text: 'Lobisomens', correct: false },
            { text: 'Vampiros', correct: false }
        ]
    },
    {
        question: 'Qual é a arte marcial praticada em Mo Dao Zu Shi?',
        answers: [
            { text: 'Cultivo espiritual', correct: true },
            { text: 'Karatê', correct: false },
            { text: 'Tai Chi', correct: false },
            { text: "Kung Fu", correct: false }
        ]
    },
    {
        question: 'Qual o nome da cidade de A História sem Fim?',
        answers: [
            { text: 'Sonho', correct: false },
            { text: 'Desejos', correct: false },
            { text: 'Estrela', correct: false },
            { text: 'Fantasia', correct: true }
        ]
    },
    {
        question: 'Método usado pela personagem principal de Os 13 Porquês para contar sua história:',
        answers: [
            { text: 'Cartas', correct: false },
            { text: 'E-mails', correct: false },
            { text: 'Fitas cassete', correct: true },
            { text: 'Mensagens de texto', correct: false }
        ]
    },
    {
        question: 'Qual é a flor que o Pequeno Príncipe cuida com carinho?',
        answers: [
            { text: 'Rosa', correct: true },
            { text: 'Tulipa', correct: false },
            { text: 'Margarida', correct: false },
            { text: 'Girassol', correct: false }
        ]
    },
    {
        question: 'Em A Bússola de Ouro, o que são os daemons?',
        answers: [
            { text: 'Criaturas mágicas', correct: false },
            { text: 'Espíritos protetores', correct: false },
            { text: 'Manifestações físicas da alma humana', correct: true },
            { text: 'Animais de estimação das bruxas', correct: false },
        ]
    },
    {
        question: 'Qual é o principal poder ou característica da personagem Tomie?',
        answers: [
            { text: 'Ela pode controlar o clima', correct: false },
            { text: 'Ela é imortal e se regenera a partir de seus fragmentos', correct: true },
            { text: 'Ela tem o poder de ler mentes', correct: false },
            { text: 'Ela pode se transformar em animais', correct: false },
        ]
    },
    {
        question: 'O que Coraline encontra atrás da porta secreta em seu novo apartamento?',
        answers: [
            { text: 'Um espelho mágico', correct: false },
            { text: 'Uma passagem para outro mundo', correct: true },
            { text: 'Uma caixa de brinquedos antigos', correct: false },
            { text: 'Um túnel subterrâneo', correct: false },
        ]
    },
    {
        question: 'Qual é o título do livro de Maquiavel que discute estratégias políticas?',
        answers: [
            { text: 'A Arte da Guerra', correct: false },
            { text: 'Leviatã', correct: false },
            { text: 'O Príncipe', correct: true },
            { text: ' O Processo', correct: false },
        ]
    },
]