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
                message =` <p> Parabéns você foi aprovado no curso </p>
                <a href="imagens/certificado.pdf" target= "_blank" class="bntproje">  Imprimir Certificado </a> `
            break
            
            case (performace >= 70):
               message =` <p> Parabéns você foi aprovado no curso </p>
               <a href="imagens/certificado.pdf" target= "_blank" class="bntproje"> Imprimir Certificado </a> `
            break

            case(performace >= 50):
                message=`<p> Faltou pouco para você conseguir concluir tente novamente</p>
                <button onclick=window.location.reload() class= "button"> Refazer teste</button>
                `
            break
            default:
                message=`<p> Faltou pouco para você conseguir concluir tente novamente</p>
                <button onclick=window.location.reload() class= "button"> Refazer teste</button>
                `
        }

        $questionsContainer.innerHTML= 
        `
            <p class="mensagem-final">
                Você acertou ${totalCorrect} de ${totalQuestion} questões!
                <span> Resultado ${message}</span>
            </p>
            
            <a href="home.html" class="bntproje"> Voltar a para os cursos </a>
         `
}



//BANCO DE PERGUNTAS

const questions =[
    {
        //Questão
        questions:" 1 – Qual era a paixão de Lucas? ",
        //Array de resposta
        answers:[
            {text:" Uma paixão por futebol. ", correct: false },
            {text:" Uma paixão por empinar pipa. ", correct: false},
            {text:" Uma paixão por computadores e tecnologia. ", correct: true},
            {text:" Uma paixão por carros. ", correct: false}
        ]
    },
    
    {
        //Questão
        questions:" 2 – Quando o CyberGuerreiro zombava das fotos de perfil de Lucas, criticava suas postagens e espalhava rumores sobre ele na comunidade virtual que frequentavam, o que Lucas fez?",

        //Array de resposta
        answers:[
            {text:" Tentou bloquear o CyberGuerreiro. ", correct: false},
            {text:" Contou para seus pais o que estava acontecendo. ", correct: true},
            {text:" Tentou deletar a rede social. ", correct: false},
            {text:" Brigou com o CyberGuerreiro. ", correct: false}
        ]
    },

    {
        questions:" 3 – O que aprendemos com curso Cyberbulling? ",

        answers:[
            {text:" Que devemos ter cuidado com as pessoas na internet e caso ocorra o cyberbulling, devemos contar para nossos pais. ", correct: true},
            {text:" Não devemos usar rede social. ", correct: false},
            {text:" Devemos aceitar o cyberbulling. ", correct: false},
            {text:" Que a internet é um lugar onde se pode fazer qualquer coisa. ", correct: false}
        ]
    },

    {
        questions:" 4 – Quais são os truques mágicos para fazer compras online de maneira segura?",

        answers:[
            {text:" A Varinha Mágica, Os Feitiços de Sistema, Comentários Encantados e Livro de Devoluções. ", correct: false },
            {text:" Livro de Devoluções, Os Comentários Encantados, Os Feitiços de Segurança e Varinha Mágica dos Pais. ", correct: true},
            {text:" Livro de Receita, Os Comentários Mágicos, Os Feitiços Malvados e Varinha Mágica dos Pais. ", correct: false},
            {text:" Os Feitiços de Segurança e Varinha Mágica dos Pais. ", correct: false}
        ]
    },

    {
        questions:" 5 – O que aprendemos no curso de compras online?",

        answers:[
            {text:" Que devemos comprar em qualquer site ou anúncio que aparecer. ", correct: false },
            {text:" Que podemos comprar sem os pais saberem. ", correct: false},
            {text:" Que só podemos compra na loja do shopping. ", correct: false},
            {text:" Que devemos ter cuidado ao comprar qualquer coisa na internet e sempre avisar os pais. Somente após a autorização deles, podemos comprar. ", correct: true}
        ]
    },

    {
        questions:" 6 - Lila era uma garotinha curiosa e inteligente, que adorava explorar o mundo mágico da internet. Quais os cuidados que seus pais ensinaram?",

        answers:[
            {text:" Compartilhar senhas.", correct: false },
            {text:" Falar com estranhos na internet. ", correct: false},
            {text:" Entrar em qualquer site. ", correct: true},
            {text:" Que devemos ter cuidado ao comprar qualquer coisa na internet e sempre avisar os pais. Somente após a autorização deles, podemos comprar. ", correct: false}
        ]
    },

    {
        questions:" 7 - O que a Lila aprendeu ao conversar com o Mago ? ",

        answers:[
            {text:" Que é importante ter cuidados na internet e caso conheça uma pessoa pedindo informações pessoais, não informar.", correct: true },
            {text:" Que sempre poderá compartilhar dados pessoais. ", correct: false},
            {text:" Que pode acessar qualquer site e compartilhar senha do cartão. ", correct: false},
            {text:" Que o Mago era seu amigo virtual e não tinha problema em contar seus dados pessoais. ", correct: false}
        ]
    },

    {
        questions:" 8 – O que o Avô Tecnológico ensinou ao grupo de amigos? ",

        answers:[
            {text:"Nunca falem com estranhos online, como você não falaria na vida real; pense antes de compartilhar fotos ou informações. ", correct: true },
            {text:" Falem com estranhos online. ", correct: false},
            {text:" Compartilhe suas fotos ou informações na internet. ", correct: false},
            {text:" Que o Mago era seu amigo virtual e não tinha problema em contar seus dados pessoais. ", correct: false}
        ]
    },


    {
        questions:" 9 - Qual eram os nomes dos amigos do grupo? ",

        answers:[
            {text:"Enzo, João e Maria. ", correct: false },
            {text:" Ronaldo, Lucas e Sara. ", correct: false},
            {text:" Laura, Lucas e Sofia. ", correct: true},
            {text:" João, Pedro e Lucas. ", correct: false}
        ]
    },


    {
        questions:" 10 - Quais informações que o Mago pediu para Lila? ",

        answers:[
            {text:" Lugar onde gosta de brincar. ", correct: false },
            {text:" Número do cartão dos pais. ", correct: false},
            {text:" Telefone de contato. ", correct: false},
            {text:" O nome da escola de Lila e onde ela morava. ", correct: true}
        ]
    }

]