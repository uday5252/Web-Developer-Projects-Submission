const questions = [
    {
        question : "What is the capital of France?",
        answers: [
        {text : "Paris",correct: true},
        {text: "Rome",correct: false},
        {text: "London",correct: false},
        {text: "Madrid",correct: false}
        ]
    },
    {
        question : "Who wrote the play Romeo and Juliet?",
        answers: [
        {text : "Charles Dickens",correct: false},
        {text: "William Shakespeare",correct: true},
        {text: "Jane Austen",correct: false},
        {text: "F. Scott Fitzgerald",correct: false}
        ]
    },
    {
        question : " What is the chemical symbol for gold",
        answers: [
        {text : "Gu",correct: false},
        {text: "Au",correct: true},
        {text: "Lu",correct: false},
        {text: "Cu",correct: false}
        ]
    },
    {
        question : "  Which planet is known as the Red Planet",
        answers: [
        {text : "Mars",correct: true},
        {text: "Venus",correct: false},
        {text: "Sun",correct: false},
        {text: "Earth",correct: false}
        ]
    },   
    {
        question : "Add 2+2",
        answers: [
        {text : "1",correct: false},
        {text: "2",correct: false},
        {text: "3",correct: false},
        {text: "4",correct: true}
        ]
    }
];
const questionsElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currenQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currenQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

  function showQuestion(){
    resetState()
    let currenQuestion = questions[currenQuestionIndex];
    let questionNo = currenQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + "." + currenQuestion.
    question;


    currenQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);


    })
  }  

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }button.disabled = true;

    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionsElement.innerHTML = `you scored ${score} out of ${questions.length}! `
    nextButton.innerHTML = "Play Again "
    nextButton.style.display = "block"
}


function handleNextButton(){
    currenQuestionIndex++
    if(currenQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }


}


nextButton.addEventListener("click",()=>{
    if(currenQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})
startQuiz()










