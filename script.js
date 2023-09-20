const questions = [
  {
    question: "Q1: What is the largest country in the world?",
    choices: ["Russia", "China", "United States", "India"],
    correctAnswer: "Russia",
  },
  {
    question: "Q2: What is 10*2?",
    choices: ["2", "20", "15", "25"],
    correctAnswer: "20",
  },
  {
    question: "Q3: What is the capital of India?",
    choices: ["Delhi", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Delhi",
  },

  {
    question: "Q4: Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Earth", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "Q5: What is the currency of Japan?",
    choices: ["yuan", "Euro", "Yen", "Dollar"],
    correctAnswer: "Yen",
  },
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const resultcontainer = document.getElementById("result");
const startButton=document.querySelector(".start");
const hideElement = document.querySelector(".hide");



startButton.addEventListener("click",() => {
  hideElement.classList.remove("hide");
    showQuestion(questions[currentQuestionIndex]);
    startButton.style.display = "none";
});

let currentQuestionIndex = 0;

function showQuestion(question) {
  questionElement.textContent = question.question;
  choicesElement.innerHTML = "";

  for (const choice of question.choices) {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => checkAnswer(choice));
    choicesElement.appendChild(li);
  }
}

let numcorrect = 0;
function checkAnswer(userAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (userAnswer === currentQuestion.correctAnswer) {
    //alert("Correct!");
    numcorrect++;
    //choice[currentQuestionIndex].style.color = 'green'
  }
  // else{
  //   alert("Incorrect. The correct answer is: " + currentQuestion.correctAnswer);
  // }
  currentQuestionIndex++;

  if (currentQuestionIndex <= questions.length - 2) {
    showQuestion(questions[currentQuestionIndex]);
  } else if (currentQuestionIndex == questions.length - 1) {
    nextButton.textContent = "Submit";
    showQuestion(questions[currentQuestionIndex]);
  } else {
    showResults();
    nextButton.style.display = "none";
    //alert("Quiz completed!");
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    showQuestion(questions[++currentQuestionIndex]);
  }
  
  else if (currentQuestionIndex === questions.length - 1) {
    showResults();
    nextButton.style.display = "none";
  }
});

function showResults() {
  questionElement.style.display = "none";
  choicesElement.style.display = "none";
  resultcontainer.innerHTML = `Your Score : ${numcorrect} out of ${questions.length}`;

  const myRetake = document.getElementById("retake");
  const retakeElement = document.createElement("button");
  retakeElement.textContent = "Retake";
  myRetake.append(retakeElement);

  myRetake.addEventListener("click", () => {
    numcorrect = 0;
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
    questionElement.style.display = "inline";
    choicesElement.style.display = "inline";
    nextButton.style.display = "inline";
    resultcontainer.innerHTML = "";
    myRetake.innerHTML = "";
    nextButton.textContent = "next";
  });
}

//showQuestion(questions[currentQuestionIndex]);
