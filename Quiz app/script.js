
// const optionData = document.querySelectorAll("[data-option]")
const bodyElement = document.body
const qnaContainer = document.querySelector("#qna-container")
const ansContainer = document.querySelector("#ans-container")
const currentQue = document.querySelector(".current-que")
const totalQue = document.querySelectorAll(".total-que")
const question = document.querySelector("#que")

// console.log(ansContainer)

// let optionsChild = document.createElement("div")
// optionsChild.setAttribute("class", "options")

// let radioChild = document.createElement("input")
// radioChild.setAttribute("type", "radio")
// radioChild.setAttribute("class", "radio")


// let spanChild = document.createElement("span")
// spanChild.setAttribute("data-option", "")

// console.log(optionsChild.appendChild(radioChild).appendChild(spanChild))

// const inputAtt = {class: "radio", type: "radio" }

// radioChild = Object.assign(inputAtt)
// console.log(radioChild)

// ansContainer
//     // .appendChild(document.createElement("div"))
//     // .appendChild(Object.assign(document.createElement("input"),{class: "radio", type: "radio"}))
//     // .appendChild(document.createElement("span"))
//     .appendChild(optionsChild)
//     .appendChild(radioChild)
//     .appendChild(spanChild)
// // optionsChild.setAttribute("class", "options")
// console.log(ansContainer)

// radioChild.setAttribute("type", "radio")
// spanChild.setAttribute("data-option", "")


// console.log(options, radioBtn)

// eventArr = [options ,radioBtn]
// console.log(optionData[0].textContent)

const qnaArr = [
    {
        11: "Q. Which is the most beloved pet?",
        12: ["dog","snake","elepahant","parrot"]
    },
    {
        21: "Q. which Operating System avilable on laptops?",
        22: ["ios","miui","windows","pixelOS"]
    },
    {
        31: "Q. true/false: are you a Human Being?",
        32: ["true","false"]
    },
    {
        41: "Q. find the color green:",
        42: ["yellow","green","blue","purple"]
    },
    {
        51: "Q. How many numbers present in range 1 to 10? (Note: Including 10)",
        52: [11, 9, 12, 10]
    },
]

const keySheet = {1: "dog", 2: "windows", 3: "true", 4: "green", 5: 10}

let keyCount = 0
for (let i in keySheet) {
    keyCount++
}

let userKeySheet = {}

// console.log(keyCount, qnaArr.length)
// console.log(`${qnaVar.toString()+qnaVar}`)

function createOptions(qnaVar) {
    totalQue.forEach((i) => {
        i.textContent = qnaArr.length
    })
    currentQue.textContent = qnaVar+1
    question.innerHTML = qnaArr[qnaVar][(qnaVar+1).toString()+1]
    for (let j=0; j<qnaArr[qnaVar][(qnaVar+1).toString()+2].length; j++) {

        let optionsChild = document.createElement("div")
        optionsChild.setAttribute("class", "options")
    
        // let radioChild = document.createElement("input")
        // radioChild.setAttribute("type", "radio")
        // radioChild.setAttribute("class", "radio")
    
        // let spanChild = document.createElement("span")
        // spanChild.setAttribute("data-option", "")
        // spanChild.textContent = qnaArr[qnaVar][(qnaVar+1).toString()+2][j]
    
        // ansContainer.appendChild(optionsChild).appendChild(radioChild).appendChild(spanChild)

        ansContainer.appendChild(optionsChild)

        const option = document.getElementsByClassName("options")

        // let colorBlockChild = document.createElement("div")
        // colorBlockChild.setAttribute("class", "colorBlock")

        // ansContainer.appendChild(colorBlockChild)

        // console.log(option[j],qnaArr[qnaVar][(qnaVar+1).toString()+2][j]) 
        let colorBlock = (qnaArr[qnaVar][(qnaVar+1).toString()+2][j] == "yellow") ? option[j].innerHTML = `<input class="radio" type="radio"/><div class="colorBlock" style= "background-color: ${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]};">${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]}</div>`
                        :(qnaArr[qnaVar][(qnaVar+1).toString()+2][j] == "green") ? option[j].innerHTML = `<input class="radio" type="radio"/><div class="colorBlock" style= "background-color: ${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]};">${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]}</div>`                       
                        :(qnaArr[qnaVar][(qnaVar+1).toString()+2][j] == "blue") ? option[j].innerHTML = `<input class="radio" type="radio"/><div class="colorBlock" style= "background-color: ${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]};">${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]}</div>`                       
                        :(qnaArr[qnaVar][(qnaVar+1).toString()+2][j] == "purple") ?option[j].innerHTML = `<input class="radio" type="radio"/><div class="colorBlock" style= "background-color: ${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]};">${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]}</div>`

                    :option[j].innerHTML = `<input class="radio" type="radio"/>${qnaArr[qnaVar][(qnaVar+1).toString()+2][j]}`
        // console.log(i)
    }
    // const optionData = document.querySelectorAll("[data-option]")
    // const option = document.getElementsByClassName("options")

    // for (let i=0; i<4; i++) {

    //     let radioChild = document.createElement("input")
    //     radioChild.setAttribute("type", "radio")
    //     radioChild.setAttribute("class", "radio")
        
    //     console.log(option[i],qnaArr[qnaVar][(qnaVar+1).toString()+2][i]) 
    //     option[i].textContent = qnaArr[qnaVar][(qnaVar+1).toString()+2][i]
            
    // // }
    var option = document.getElementsByClassName("options")
    // const radioBtn = document.getElementsByClassName("radio")

    // slectingOptions()
    for (let k=0; k<option.length; k++) {
        // console.log(option[k].childNodes[0], radioBtn.length)
        option[k].addEventListener("click", () => {
            option[k].childNodes[0].checked = true
            // console.log(radioBtn[k])
            for (let j = 0; j < radioBtn.length; j++) {
                if (radioBtn[j] != option[k].childNodes[0]) {
                    radioBtn[j].checked = false
                }
            }
            // console.log(radioBtn[k].checked === true) 
            selectedOptionText = option[k].textContent
            // return option[k].textContent
            // console.log(option[k].textContent)
        })
        // console.log(option[k].textContent)
    
        // if (option[k].childNodes[0].checked == true) {
        //     console.log(option[k].textContent)
        // }
    }
}
createOptions(0)

// console.log(option)
const option = document.getElementsByClassName("options")
const radioBtn = document.getElementsByClassName("radio")
const nextBtn = document.querySelector("#next")
const submitBtn = document.querySelector("#submit")

let selectedOptionText = ''
function userKeySheetStore(qnaVar) {
    // const option = document.getElementsByClassName("options")
    // console.log(slectionOptions())
    // console.log(radioBtn[k].checked === true) 

    // for (let k=0; k<option.length; k++) {
    //     console.log(radioBtn[k].checked === true) 
    //     // console.log(option[k].childNodes[0], radioBtn.length)
    //     // console.log(option[k].textContent)
    //     if (option[k].childNodes[0].checked == true) {
    //         console.log(option[k])
    //     }
    // console.log(createOptions())

    // const option = document.getElementsByClassName("options")
    // const radioBtn = document.getElementsByClassName("radio")

    // for (let k=0; k<option.length; k++) {
    //     // console.log(option[k].childNodes[0], radioBtn.length)
    //     if (!radioBtn[k].checked) {
    //         console.log(option[k].textContent)
    //     }
    //     else {
    //         console.log("none")
    //     }
    // }
    // console.log(slectingOptions)
    // for (let i=0; i<radioBtn.length; i++) {
    //     console.log(radioBtn[i], option[i].textContent)
    // }
    // console.log(selectedOptionText, qnaVar-1)

    // }
    // console.log(slectingOptions())

    userKeySheet.id = qnaVar
    userKeySheet[qnaVar] = selectedOptionText
    // selectedOptionText = ''

    // console.log(userKeySheet[qnaVar])
}

// console.log(ansContainer.children)

// function update(qnaVar) {

//     // ansContainer.appendChild(optionsChild).appendChild(radioChild).appendChild(spanChild)
        
//     // console.log(ansContainer.children)

//     // const optionData = document.querySelectorAll("[data-option]")

//     // for (let i=0; i<4; i++) {
//     //     console.log(optionData[i],qnaArr[qnaVar][(qnaVar+1).toString()+2][i]) 
//     //     optionData[i].textContent = qnaArr[qnaVar][(qnaVar+1).toString()+2][i]
        
//     // }
// }

// update(0)

// console.log(option.childNodes)

// question.innerHTML = 

// qnaArr.forEach((i) => {
//     i.a1.forEach((j) => {
//         console.log(j)
//     })
// })

// for (let i = 0; i < 3; i++) {
//     console.log(optionsArr[i])
// }

// options.forEach((i) => 
//     i.addEventListener("click", () => {
        
//         console.log(i,)
//     })
// )

// options.forEach((i) => {
//     i.addEventListener("click", () => {
//         i.childNodes[0].checked = true
            
//     })
// })

// for(let i = 0; i < options.length; i++) {
//     // console.log(options[i])
//     options[i].addEventListener("click", () => {
//         console.log(options[i])
//         console.log(radioBtn[i].checked = true)

//     })
//     break;
// }

// for (let i=0; i<3; i++) {
//     console.log(radioBtn[i])
// }

// console.log(radioBtn)

// function radioChange(i) {
//     radioBtn[i].addEventListener("change", () => {
//         // console.log(radio)
//         for (let j = 0; j < radioBtn.length; j++) {
//             if (radioBtn[j] !== radioBtn[i]) {
//                 radioBtn[j].checked = false
//             }
//         }
//     })
    
// }

// for (let k=0; k<option.length; k++) {
//     // console.log(option[k].childNodes[0], radioBtn.length)
//     option[k].addEventListener("click", () => {
//         option[k].childNodes[0].checked = true
//         for (let j = 0; j < radioBtn.length; j++) {
//             if (radioBtn[j] !== option[k].childNodes[0]) {
//                 radioBtn[j].checked = false
//             }
//         }

//     })
// }

// for(let k=0; k<option.length; k++) {
//     option[k].addEventListener("click", () => {
//         console.log(option[k].classList.add("slected"))
//     })
// 

let qnaPos = 1
let isOptionSlected = false

nextBtn.addEventListener("click", () => {
    // console.log(qnaPos)
    // console.log(qnaPos)
    // for (let i=0; i<radioBtn.length; i++) {
    //     console.log(radioBtn[i].checked) 
    //         // console.log(option[i])
    // }
    optionCheck()
    if (isOptionSlected) {
        while (ansContainer.firstChild) {
            ansContainer.removeChild(ansContainer.firstChild)
        }
        // userKeySheetStore(qnaPos - 1)
        createOptions(qnaPos)
        userKeySheetStore(qnaPos)
    
        // if (userKeySheet[1] == "" || userKeySheet[qnaPos] == userKeySheet[qnaPos - 1]) {
            
        //     console.log(qnaPos - 1)
        //     createOptions(qnaPos-1)
        //     userKeySheetStore(qnaPos - 1)
        // }
        // else {
        qnaPos++
        if(qnaPos == (qnaArr.length)){  
            submitBtn.classList.add("active")
            nextBtn.classList.remove("active")
            nextBtn.disabled = true
            submitBtn.disabled = false
        }
        isOptionSlected = false
    }
    else {
        alert("Please select one option to Save & Continue to next Question!")
    }

    // alert("Please select one option to Save & Continue to next Question!")

    // console.log(userKeySheet[qnaPos-1] == "")
    
})

function optionCheck() {
    for (let i=0; i<radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            isOptionSlected = true
            // console.log(isOptionSlected)
            break;
        }
    }
}

// function call(qnaPos) {
//     console.log(qnaPos, userKeySheet, userKeySheet[qnaPos])
//     console.log(userKeySheet[1] == "" || userKeySheet[qnaPos] == userKeySheet[qnaPos - 1])
//     if (userKeySheet[1] == "" || userKeySheet[qnaPos] == userKeySheet[qnaPos - 1]) {
//         alert("Please select one option to Save & Continue to next Question!")
//         createOptions(qnaPos-1)
//         userKeySheetStore(qnaPos-1)
//     }
//     else {
//         nextBtn.disabled = false
//     }

//     // console.log(userKeySheet[1] == "" && userKeySheet[qnaPos] == userKeySheet[qnaPos - 1])

// }

// qnaPos++
    
// console.log(qnaPos)

// ansContainer.document.createElement("div"),(class: "colorBlock")

// ansContainer.appendChild(Object.assign(document.createElement("div"),{class: "colorBlock"}))

// let colorBlockChild = document.createElement("div")
// colorBlockChild.setAttribute("class", "colorBlock")

// ansContainer.appendChild(colorBlockChild)

const correctAns = document.querySelectorAll(".correct-ans")
const ProgressPercentageScore = document.querySelector(".progress-percentage")
const progressBar = document.querySelector("#progress-bar")
const declareTittle = document.querySelector(".declare")
const finalResult = document.querySelector("#result")

// finalResult.setAttribute("class", "resultBlock")
// console.log(keyCount)
// console.log(correctAns.textContent, ProgressPercentageScore.textContent, progressBar, declareTittle, finalResult.className)

let correctCount = 0
submitBtn.addEventListener("click", () => {
    console.log(qnaPos, userKeySheet, keySheet)
    optionCheck()

    if (isOptionSlected) {
        userKeySheetStore(qnaPos)
        // userKeySheet.id = qnaPos
        // userKeySheet[qnaPos] = selectedOptionText
        // selectedOptionText = ''
        
            // console.log(userKeySheet)
        for (let i in keySheet) {
            for (let j in userKeySheet) {
                if (keySheet[i] == userKeySheet[j]) {
                    correctCount++
                    // console.log(correctCount)
                }
            }
        }
        if (correctCount > keyCount) {
            correctCount = keyCount
        }
        // console.log(correctCount)
        qnaContainer.style.filter= "blur(2px)";
        finalResult.setAttribute("class", "resultBlock")
        qnaContainer.classList.add("blur-bg")
        correctAns.forEach((i) => {
            i.textContent = correctCount
        })
        let scorePercentage = Math.floor(correctCount / keyCount * 100)
        // console.log(scorePercentage)
        ProgressPercentageScore.textContent = scorePercentage
        progressBar.style.width =`${scorePercentage}%`
        if (scorePercentage > 61) {
            declareTittle.innerHTML = "Congragulations!"
        }
        else {
            declareTittle.textContent = "You'r one step Ahead!Try Hard"
        }
        isOptionSlected = false
        console.log(correctCount,keyCount)
        correctCount = 0
    }
    else {
        alert("Please select one option to Save & Continue to next Question!")
    }

})
// console.log(keySheet.length)

