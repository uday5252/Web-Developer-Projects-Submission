
const submitButton=document.querySelector("#submt")
const lowOrHi = document.querySelector(".lowOrHi");
const user = document.querySelector(".guessField");
const score = document.querySelector(".tries");
const wrapperElement=document.querySelector("#wrapper")
const previousGuess= document.querySelector(".guess");



let attempts = 0;
let maxAttempts = 10;
let prev=[]
const randomNumber= Math.floor(Math.random() * 100+1);
//console.log(randomNumber);

function checkNumber() {
  let userNumber=user.value

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    lowOrHi.textContent = `Please enter a valid number between 1 and 100`;
    return;
  }
  attempts++;
  prev.push(userNumber)
  score.innerText=`${maxAttempts - attempts} `
  previousGuess.innerText= `${prev}`
  
   
   if (attempts==maxAttempts){
    lowOrHi.innerText = `Game Over. The correct number was ${randomNumber}.`;
    disableInput()
    
  }
   else if (randomNumber > userNumber) {
    lowOrHi.innerText = "Try bigger number";
    wrapperElement.style.borderColor ="red";
  } 

  else if(randomNumber < userNumber){
    lowOrHi.innerText = "Try smaller number";
    wrapperElement.style.borderColor ="red";
   
  }
  else{ 
    lowOrHi.innerText = `Congrats!You guessed it right in ${attempts} attempts 🎉. The number was ${randomNumber}`;
    wrapperElement.style.borderColor ="green";
    disableInput()
  }
}

// Function to disable input after game over
function disableInput() {
  document.getElementById('guessField').disabled = true;
  submitButton.disabled = true;
  
  
}
  
  submitButton.addEventListener("click", function(){
    checkNumber()
    user.value= "";
  })


  


 