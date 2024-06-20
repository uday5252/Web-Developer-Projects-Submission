const steps = document.querySelectorAll("#step");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progressBar = document.querySelector("#progress");

// console.log(steps, nextBtn, prevBtn, progressBar, progressContainer.offsetWidth);

//-----creating a pointing varibale for interation steps

let stepNumber = 1;

//-----click event on nextbtn, prevbtn should disable and next step number become primary and bridge between prevbtn and current step should next step
nextBtn.addEventListener("click", () => {
    prevBtn.disabled = false;
    steps[stepNumber].classList.add("border-primary");
    // console.log(stepNumber / steps.length * 100);
    progressBar.style.width = `${stepNumber / (steps.length - 1) * 100}%`;
    stepNumber++;
    if (stepNumber >= steps.length) {
        // stepNumber = 1;
        nextBtn.disabled = true;
    }
})

//-----click event oon prevbtn, netbtn shold disable and prev step number removed from primary as well as bridge b/w current step and prev step
prevBtn.addEventListener("click", () => {
    nextBtn.disabled = false;
    stepNumber--;
    steps[stepNumber].classList.remove("border-primary");
    // console.log((stepNumber - 1) / (steps.length-1) * 100);
    progressBar.style.width = `${(stepNumber - 1) / (steps.length-1) * 100}%`;
    if (stepNumber <= 1) {
        prevBtn.disabled = true;
    }
})


