const quiz = [
    {
        question: "HTML stands for",
        ans1: "HighText Machine Language",
        ans2: "HyperText and links Markup Language",
        ans3: "HyperText Markup Language",
        ans4: "None of these",
        answer:"HyperText Markup Language",
        
    },
    {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        ans1: "<pre>",
        ans2: "<a>",
        ans3: "<b>",
        ans4: "<br>",
        answer:"<b>",
       
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML?",
        ans1: "<br>",
        ans2: "<a>",
        ans3: "<pre>",
        ans4: "<b>",
        answer:"<br>",
    },
    {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        ans1: "<ul>",
        ans2: "<ol>",
        ans3: "<li>",
        ans4: "<i>",
        answer:"<ul>",
    }
]
//identify question
const question = document.getElementById("qtn");
console.log(question);
console.log(question.textContent);

//identifying answers
const answerElement=document.querySelectorAll(".options");
const Answer1 = document.getElementById("answer1")
const Answer2 = document.getElementById("answer2")
const Answer3 = document.getElementById("answer3")
const Answer4 = document.getElementById("answer4")
console.log(Answer1.textContent,Answer2.textContent,Answer3.textContent,Answer4.textContent);

//identifying next button

const next = document.getElementById("next");

let currentQuestion = 0;
let score = 0;


console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1);
console.log(quiz[currentQuestion].ans2);
console.log(quiz[currentQuestion].ans3);
console.log(quiz[currentQuestion].ans4);


question.textContent=quiz[currentQuestion].question;
Answer1.textContent=quiz[currentQuestion].ans1;
Answer2.textContent=quiz[currentQuestion].ans2;
Answer3.textContent=quiz[currentQuestion].ans3;
Answer4.textContent=quiz[currentQuestion].ans4;


console.log(answerElement)
    

next.addEventListener("click",function(){

   const checkedAns=document.querySelector('input[type="radio"]:checked')
   console.log(checkedAns);
   if(checkedAns===null){
    alert("please select answer")
   }
   else{
    if(checkedAns.nextElementSibling.textContent===quiz[currentQuestion].answer)
    score++;
   }
checkedAns.checked=false;
    currentQuestion ++;
    if(currentQuestion < quiz.length){
        question.textContent=quiz[currentQuestion].question;
Answer1.textContent=quiz[currentQuestion].ans1;
Answer2.textContent=quiz[currentQuestion].ans2;
Answer3.textContent=quiz[currentQuestion].ans3;
Answer4.textContent=quiz[currentQuestion].ans4;

    }
    else{
        alert("your score is"+score+"out of"+quiz.length);
alert("you are attempting the quiz again");
location.reload();
    }

})


