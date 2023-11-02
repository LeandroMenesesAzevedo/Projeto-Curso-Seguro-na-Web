const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer=document.querySelector(".questions-container")
const $answersContainer=document.querySelector(".answers-container")
const $questionText=document.querySelector(".question")
const $nextQuestionButton=document.querySelector(".next-question")


$startGameButton.addEventListener("click", startGame)
//criando um evento para a proxima pergunta
$nextQuestionButton.addEventListener("click", displayNextQuestion)
//variavel auxiliar
let currentQuestionIndex = 0
let totalCorrect = 0 // total de respostas certas

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if(questions.length == currentQuestionIndex){
        return finishGame()
    }
    //pegando a primeira questão e mostrando na tela
    $questionText.textContent = questions[currentQuestionIndex].questions

    //pegando todas as respostas e criando um novo botão para cada uma das respostas.
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        //colocando a classe button e answer do html
        newAnswer.classList.add("button", "answer")
        //Pegando o texto das respostas
        newAnswer.textContent = answer.text
        //Verificando se esta correta, para saber se usuário acertou a resposta que escolheu
        if(answer.correct){
            newAnswer.dataset.correct = answer.correct
        }
        //Adicionando o elemento filho
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState(){
        //Enquanto a variavel $respostacontainer tiver um filho ele irá remover até que não tenha nenhum filho

        while($answersContainer.firstChild){
            $answersContainer.removeChild($answersContainer.firstChild)
        }
    
        //Acessando o body para mudar a cor, removendo todas as classes
        document.body.removeAttribute("class")
        //Adicionando novamento o hide no botão avançar após responder
        $nextQuestionButton.classList.add("hide")
}

//função que detectar se o usuário escolheu a resposta correta
function selectAnswer(event) {
        const answerClicked = (event.target)

        //Quando a resposta for correta irá ficar com fundo verde errado com fundo vermelho
        if(answerClicked.dataset.correct){
            document.body.classList.add("correct")
            totalCorrect++
        } else{
            document.body.classList.add("incorrect")
        }

        //botão ficará verde quando for a correta
        document.querySelectorAll(".answer").forEach(button =>{
            if(button.dataset.correct){
                button.classList.add("correct")
            } else{
                button.classList.add("incorrect")
            }

            //Para o usuário não clicar em duas resposta 
            button.disabled = true
        })

        //Fazendo o botão de próxima pergunta 
        $nextQuestionButton.classList.remove("hide")
        //Acessando a proxima pergunta
        currentQuestionIndex++
}

function finishGame(){
        const totalQuestion = questions.length
        const performace = Math.floor(totalCorrect * 100/ totalQuestion)

        let message = ""

        switch(true){
            case (performace >= 90):
                message ="Excelente :D"
            break
            
            case (performace >= 70):
                message= "Muito Bom :D"
            break

            case(performace >= 50):
                message= "Bom"
            break
            default:
            message ="Pode melhorar"
        }

        $questionsContainer.innerHTML= 
        `
           <p class="mensagem-final">
                Você acertou ${totalCorrect} de ${totalQuestion} questões!
                <span> Resultado ${message}</span>
            </p>
            <button onclick=window.location.reload() class= "button"> Refazer teste</button>
            <a href="home.html" class="bntproje"> Voltar a para os cursos </a>
         `
}



//BANCO DE PERGUNTAS

const questions =[
    {
        //Questão
        questions:" Quanto é 2 + 2 ",
        //Array de resposta
        answers:[
            {text:" 3 ", correct: false },
            {text:" 5 ", correct: false},
            {text:" 4 ", correct: true},
            {text:" 6 ", correct: false}
        ]
    },
    
    {
        //Questão
        questions:" Quanto é 3 x 3 ",
        //Array de resposta
        answers:[
            {text:" 6 ", correct: false},
            {text:" 9 ", correct: true},
            {text:" 12 ", correct: false},
            {text:" 3 ", correct: false}
        ]
    },

    {
        questions:" Quanto é 6 - 1 ",

        answers:[
            {text:" 5 ", correct: true},
            {text:" 4 ", correct: false},
            {text:" 3 ", correct: false},
            {text:" 2 ", correct: false}
        ]
    }

]