const quizQuestionArr = [
    {
        question:"Which of the following keywords is used to define a variable in Javascript?",
        options: ["var", "let" , "Both A and B" , "None of the Above"],
        answer:"Both A and B",
        selected:"",
        result:NaN
    },
    {
        question:"Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementbyId", "getElementsByClassName" , "Both A and B" , "None of the Above"],
        answer:"Both A and B",
        selected:"",
        result:NaN
    },
    {
        question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
        options: ["Throws an error", "Ignores the statements" , "Gives a warning" , "None of the Above"],
        answer:"Ignores the statements",
        selected:"",
        result:NaN
    },
    {
        question:"What keyword is used to check whether a given property is valid or not?",
        options: ["in", "is in" , "exists" , "lies"],
        answer:"in",
        selected:"",
        result:NaN
    },
    {
        question:"What is the use of the noscript tag in Javascript?",
        options:["The Contents are displayed by non-js-based browsers.","Clears all the cookies and cache","Both A and B", "None of the Above"],
        answer:"The Contents are displayed by non-js-based browsers.",
        selected:"",
        result:NaN
    },
    {
        question:"print(NaN === NaN) output of the following statement?",
        options:["true","false","undefined","Error"],
        answer:"false",
        selected:"",
        result:NaN
    },
    {
        question:"print(typeof(NaN)) output of the following statement?",
        options:["object","string","number","None of the above"],
        answer:"number",
        selected:"",
        result:NaN
    }
    


]

const  questionBox = document.querySelector(".question_option")
const  nextClick   = document.querySelector("#next")
const  prevClick   = document.querySelector("#prev")
const submitClick  = document.querySelector("#submit") 
const cancelClick  = document.querySelector("#cancel")
const finishClick  = document.querySelector("#finish")
const submitModalClick  = document.querySelector(".submitModal")
const resultModalClick  = document.querySelector(".resultModal")
const noThanks = document.querySelector("#nothanks")
const answerSheet = document.querySelector("#answersheet")
const results_declare = document.querySelector(".answerSheet_container")
const answersOptions = document.querySelector(".answerSheet_main")
const minutesTag = document.querySelector(".minutes")
const secondsTag = document.querySelector(".seconds") 

let modalShow = true

let minutesCount = 5
let secondsCount = 0

setInterval(()=>{
  if(modalShow){
    if(secondsCount === 0){

        if(secondsCount === 0 && minutesCount === 0){
            secondsCount = 0
            resultModalClick.style.display = "flex"
            modalShow = false
        }
 
       else{
           minutesCount--
           minutesTag.innerText = minutesCount < 10 ?  minutesCount <= 0  ?  "0" +0 : "0" + minutesCount : minutesCount
           secondsCount = 59
           if(minutesCount === 0){
               if(secondsCount === 0){
                   secondsCount = 0
                  }
              }
        }            
     }
     else{
        secondsCount--
     }
  }
     
     secondsTag.innerText = secondsCount < 10 ?  "0" + secondsCount : secondsCount
},1000)

let count = 0

if(count === 0){
    prevClick.style.display = "none"
}

function questionLoop(count){
    
    let  loopBoxQuestions = `                               
                            <div  class="question_option_inside">
                            <h4 class="question"><span>${count+1}.</span>${quizQuestionArr[count].question}</h4>
                            <div class="ans">
                            <div>
                            <input  type="radio" name="answer"   data-num=${count} class="answers" />
                            <label for='answer1' >${quizQuestionArr[count].options[0]}</label>
                            </div>
                            <div>
                            <input  type="radio" name="answer"  data-num=${count} class="answers" />
                            <label for='answer2' >${quizQuestionArr[count].options[1]}</label>
                            </div>
                            <div>
                            <input  type="radio" name="answer"  data-num=${count} class="answers" />
                            <label for='answer3' >${quizQuestionArr[count].options[2]}</label>
                            </div>
                            <div> 
                            <input  type="radio" name="answer"  data-num=${count} class="answers"/>
                            <label for='answer4' >${quizQuestionArr[count].options[3]}</label>
                            </div>
                            </div>
                            </div>`
       
                            
                            questionBox.innerHTML = loopBoxQuestions
                            const selectedAnswer = document.querySelectorAll(".answers")
                     
                          for(let i=0; i<4;i++){
                            selectedAnswer[i].addEventListener("click",(e)=>{         
                            
                                let valueAnswered = e.target.nextElementSibling.innerText
                                let questionId = e.target.dataset.num
                                console.log("true")

                                if(quizQuestionArr[questionId].answer === valueAnswered){
                    
                                         quizQuestionArr[questionId].selected = valueAnswered
                                         quizQuestionArr[questionId].result = true
                                }
                                else{
         
                                    quizQuestionArr[questionId].selected = valueAnswered
                                    quizQuestionArr[questionId].result = false
                                }

                           })
                          }
 }


questionLoop(count)

nextClick.addEventListener("click",()=>{
    count = count + 1;

    if(count >= 1){
        prevClick.style.display = "flex"
    }
    questionLoop(count)
    if(count === quizQuestionArr.length-1){
        nextClick.style.display = "none"
        submitClick.style.display = "flex"
    }

})

prevClick.addEventListener("click",()=>{
    count = count - 1;
   
    if(count < quizQuestionArr.length-1){
        console.log("count prev",count)
        nextClick.style.display = "flex"
        submitClick.style.display = "none"
    }

    if(count >= 0){
        questionLoop(count)
        if(count === 0){
            prevClick.style.display = "none"
        }
    }
    else{
        count = 0
    }
 
})


submitClick.addEventListener("click",()=>{
       submitModalClick.style.display = "flex"
})

cancelClick.addEventListener("click",()=>{
       submitModalClick.style.display = "none"
})

document.querySelector(".notTag").innerText = quizQuestionArr.length

finishClick.addEventListener("click",()=>{
       
       const scoresCount = document.querySelector(".score")
    
       submitModalClick.style.display = "none"
       resultModalClick.style.display = "flex"
       let correct = 0
       let wrong = 0
       let notAttem = 0

       
       quizQuestionArr.filter(itm => itm.result === true && correct++)
       quizQuestionArr.filter(itm1 => itm1.result === false && wrong++)
       
       notAttem = quizQuestionArr.length - (correct+wrong)
       
       scoresCount.innerText = correct + "/" + quizQuestionArr.length

       document.querySelector(".correctTag").innerText = correct
       document.querySelector(".wrongTag").innerText = wrong
       document.querySelector(".notTag").innerText = notAttem

})

noThanks.addEventListener("click",()=>{
    resultModalClick.style.display = "none"
})

answerSheet.addEventListener("click",()=>{
 
    answersOptions.style.display = "block"

     let  loop_answers = ''

     console.log(quizQuestionArr)

     quizQuestionArr.map((itms,index)=>{
          loop_answers += `
                   
                    <div class="loop_role">
                        <h4>${index+1}.${itms.question}</h4>
                        <div class="options">
                            <div  class=``>
                               <input  type="radio" />
                               <label>${itms.options[0]}</label>
                            </div>
                            <div>
                                <input  type="radio" />
                                <label >${itms.options[1]}</label>
                            </div>
                            <div>
                                <input  type="radio" />
                                <label >${itms.options[2]}</label>
                            </div>
                            <div>
                                <input  type="radio" />
                                <label >${itms.options[3]}</label>
                            </div>
                        </div>
                    <div>
                        <p>your answer:${itms.selected} </p>
                        <p>result:${itms.result}</p>
                        <p>correctanswer:${itms.answer}</p>
                    </div>
                </div>    
          `
     })

     results_declare.innerHTML = loop_answers
    
})

const backHandler = ()=>{
    answersOptions.style.display = "none"
}
const retakeHandler = ()=>{
     window.location.reload()
     answerSheet.style.display = "none"
}