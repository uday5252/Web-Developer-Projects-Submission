// console.log("zoro")

const prevBtn = document.querySelector("#prev-btn")
const nextBtn = document.querySelector("#next-btn")

const stepList = document.querySelectorAll(".step")
const stepBridgeList = document.querySelectorAll(".steps-bridge-bg")

// console.log(nextBtn.disabled = true)

// console.log(stepList, stepBridgeList)

let currentStepNumber = 1

// console.log(1 >= currentStepNumber > 4)  // 4

// console.log(stepList.length < currentStepNumber)

function active() {
    if(currentStepNumber > stepList.length) {
        // console.log(currentStepNumber)
        currentStepNumber = 1
    }

    else {
        if(currentStepNumber === stepBridgeList.length){
            nextBtn.disabled = true
            nextBtn.classList.remove("btn-primary")
        }
        
        const activatingStepBridgeDiv = document.createElement("div")
        activatingStepBridgeDiv.setAttribute("id", "zoro")
        stepBridgeList[currentStepNumber - 1].append(activatingStepBridgeDiv)
        // activatingStepBridgeDiv.style.transition = "all 5S"
        stepList[currentStepNumber].className += " active"
        currentStepNumber++ 

        if(currentStepNumber >= 0) {
            prevBtn.disabled = false
            prevBtn.className += " btn-primary"
        }
        
    }
}



function inActive() {
    // if(currentStepBridgeNumber < 1) {  // <=1
    //     prevBtn.disabled = true
    //     prevBtn.classList.remove("btn-primary")
    //     // console.log("zoro")
    //     // currentStepNumber = stepList.length


    // }

    // else if (1 < currentStepNumber < 4) {
    //     console.log("hi")
    //     nextBtn.disabled = false
    //     nextBtn.className += " btn-primary"
    // }
 // >1
    // prevBtn.disabled = false  
    if(currentStepNumber === stepList.length) {
        nextBtn.disabled = false
        nextBtn.className += " btn-primary"
    }

    const inActivatingStepBrigeDiv = document.querySelectorAll("#zoro")
    inActivatingStepBrigeDiv[currentStepNumber - 2].remove()
    // stepBridgeList[currentStepNumber - 2].removeChild(stepBridgeList)
    stepList[currentStepNumber - 1].classList.remove("active")
    currentStepNumber--

    if(currentStepNumber < 2) {
        prevBtn.disabled = true
        prevBtn.classList.remove("btn-primary")
    }
}



nextBtn.addEventListener("click", ()=> {
    active()
    // console.log(currentStepNumber)

    // const myZoro = document.querySelector(".zoro")
    // myZoro.className += " zoro1"
})

prevBtn.addEventListener("click", ()=> {
    inActive()
    // console.log(currentStepNumber)
})
