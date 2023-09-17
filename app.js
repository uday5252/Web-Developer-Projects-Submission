//array object to store questions
const questions = [
    {
        question:"Sandy storm is the autobiography of which among the following veteran cricketers?",
        answers:[
            {text: "Dilip Vengsarkar",correct: false},
            {text: "Sandeep Patil",correct: true},
            {text: "Mohinder Amarnath",correct: false},
            {text: "Roger Binny",correct: false},

        ]
    },

    {
        question:"2023 ODI World cup is made with?",
        answers:[
            {text: "Silver and Gilt",correct: true},
            {text: "Gold and Bronze",correct: false},
            {text: "Copper and Silver",correct: false},
            {text: "Silver and Bronze",correct: false},

        ] 
    },

    {
        question:"Durand Cup is associated with?",
        answers:[
            {text: "Swimming",correct: false},
            {text: "Hockey",correct: false},
            {text: "Table Tennis",correct: false},
            {text: "Football",correct: true},

        ]  
    },

    {
        question:"Term Chinaman is related to which sports?",
        answers:[
            {text: "Golf",correct: false},
            {text: "Cricket",correct: true},
            {text: "Hockey",correct: false},
            {text: "Football",correct: false},

        ]  
    },

    {
        question:"Which team won the 2023 Durand Cup?",
        answers:[
            {text: "NorthEast United FC",correct: false},
            {text: "East Bengal",correct: false},
            {text: "FC Goa",correct: false},
            {text: "Mohun Bagan",correct: true},

        ]  
    }


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});

}
function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Retake Quiz";
    nextButton.style.display = "Block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",() =>{
if (currentQuestionIndex < questions.length) {
    handleNextButton();
}else{
    alert("Do You Want To Retake Quiz?");
    startQuiz();
}
});
startQuiz();
