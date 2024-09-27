const min = document.getElementById("min-number");
const max = document.getElementById("max-number");
const startBtn = document.getElementById("start");
const userGuess = document.getElementById("guess");
const submitBtn = document.getElementById("submit");
const resultBlock = document.getElementById("result");

function randomGenerator(min = 0, max) {
    return Math.round(Math.random() * (max - min) + min)   //range = max - min | range + min
}

// console.log(randomGenerator('', 1), resultBlock)
const rulesBtn = document.getElementById("rules-btn");
const rules = document.querySelector(".rules");
const ruleExitBtn = document.getElementById("rules-exit");
const getHelpBtn = document.getElementById("get-help");

rulesBtn.addEventListener("click", () => {
    rules.classList.add("active")
})

ruleExitBtn.addEventListener("click", () => {
    rules.classList.remove("active")
})

let randomTemp;
let randomTemp1;

startBtn.addEventListener("click", () => {
    let minValue;
    if (min.value == '') {      //seting defalut value of minimum value to zero
        minValue = 0;
    }
    else {
        minValue = parseInt(min.value);
    }
    const maxValue = parseInt(max.value);

    console.log(min.value, max.value)
    if (isNaN(minValue) && isNaN(maxValue)) {
        alert("Please select Minimum and Maximum values to Start Game!");
    }
    else {
        if (minValue >= maxValue) {
            alert("Minimum value should greater than the Maxmium value!");
        }
        else if (maxValue - minValue <= 5) {
            alert("Diffrence between Minimum value and Maximum value should greater than 5!")
        }
        else {
            const randomNumber = randomGenerator(minValue, maxValue);
            randomTemp = randomNumber;

            randomTemp1 = randomGenerator(minValue, maxValue);
            while (randomTemp == randomTemp1) {
                randomTemp1 = randomGenerator(minValue, maxValue);
            }

            console.log(randomNumber, randomTemp1);
            userGuess.disabled = false;
            submitBtn.disabled = false;
            getHelpBtn.disabled = false;
            min.disabled = true;
            max.disabled = true;
            startBtn.disabled = true;
        }

    }
    min.value = '';
    max.value = '';

})

let chanceCount = 5;
const currentChance = document.getElementById("current-chance");
const totalChance = document.getElementById("total-chance");

totalChance.textContent = chanceCount;
currentChance.textContent = chanceCount;
let userGuessValue;

submitBtn.addEventListener("click", () => {
    userGuessValue = parseInt(userGuess.value);
    if (isNaN(userGuessValue)) {
        alert("Please Guess the Number and Enter in Input Box!");
    }
    else {
        if (userGuessValue == randomTemp) {
            resultBlock.style.animation = "text-animation 0.2s"
            result()
            resultDeclare.textContent = "congratulations, You Won!";
        }
        else {
            resultBlock.textContent = ''
            resultBlock.textContent = "Wrong";
            resultBlock.style.animation = "text-animation 0.2s"
        }
        userGuess.value = '';
        chanceCount--;
        currentChance.textContent = chanceCount;
        if (chanceCount == 0) {
            result()
            resultDeclare.textContent = "You'r out off chances. Better Luck Next Time!";
        }
    }
})

const resultPopUp = document.querySelector(".result-pop-up");
const resultDeclare = document.getElementById("result-declare");

function result() {
    resultPopUp.classList.add("active");
}

function numberCard() {
    const card = document.createElement("div")
    card.setAttribute("class", "number-card")
    return card
}

let isCardCreated = false;

getHelpBtn.addEventListener("click", () => {
    resultBlock.textContent = "Now you have one chance to find the correct number!"
    const randomNumCardPos = randomGenerator(0, 1);
    resultBlock.append(numberCard())
    resultBlock.append(numberCard())
    const cards = document.getElementsByClassName("number-card")
    let otherRandomCardPos = 1;
    while (otherRandomCardPos == randomNumCardPos) {
        otherRandomCardPos = randomGenerator(0, 1)
    }
    if (chanceCount > 2) {
        if (!isCardCreated) {
            cards[randomNumCardPos].textContent = randomTemp;
            cards[otherRandomCardPos].textContent = randomTemp1;
            isCardCreated = true;
            getHelpBtn.disabled = true;
            submitBtn.disabled = true;
            userGuess.disabled = true;
        }
        for (let i = 0; i<cards.length; i++) {
            cards[i].addEventListener("click", () => {
                if (cards[i].textContent == randomTemp) {
                    result()
                    resultDeclare.textContent = "congratulations, You Won!";
    
                }
                else {
                    result()
                    resultDeclare.textContent = "You'r out off chances. Better Luck Next Time!";
                }
            })
        }
    }
    else {
        alert("You can't take Get Help!, Because you'r chances are less than 3.")
        resultBlock.innerHTML = '';
    }
})
