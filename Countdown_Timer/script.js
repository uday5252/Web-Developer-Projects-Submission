const btn = document.querySelector("button")
const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minuts = document.querySelector("#min")
const seconds = document.querySelector("#sec")


// console.log(daysCount, hoursCount, minCount, secCount)

function counter() {  
    const date = new Date().getTime()
    const setDate = new Date("09-30-2023").getTime()

    let countDownMilliSecTime = setDate - date
    let countDownSecTinme = countDownMilliSecTime / 1000

    let daysCount = Math.floor(countDownSecTinme / (24*60*60))
    let hoursCount = Math.floor(countDownSecTinme % (24*60*60) / (60*60))
    let minCount = Math.floor(countDownSecTinme % (60*60) / 60)
    let secCount = Math.floor(countDownSecTinme % (60))

    days.textContent = daysCount
    hours.textContent = hoursCount
    minuts.textContent = minCount
    seconds.textContent = secCount
}

btn.addEventListener("click", () => {
    setInterval(counter, 1000)
})