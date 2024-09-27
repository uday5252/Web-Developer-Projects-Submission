const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");
const day = document.getElementById("day");
const month = document.getElementById("month");
const dateContainer = document.getElementById("date");
const format = document.getElementById("12h-format");
const needleHours = document.getElementById("needle-hours");
const needleMinuts = document.getElementById("needle-minuts");
const needleSeconds = document.getElementById("needle-seconds");

function update() {
    const date = new Date()
    hours.textContent = date.getHours() <= 12 ? digit(date.getHours()) + " :" : digit(date.getHours() - 12) + " :";
    minuts.textContent = digit(date.getMinutes()) + " :";
    seconds.textContent = digit(date.getSeconds()) + " ";
    day.textContent = findDay(date.getDay()) + ", ";
    month.textContent = findMonth(date.getMonth());
    dateContainer.textContent = date.getDate(); 
    format.textContent = date.getHours() <= 12 ? " AM" : " PM"

    needleSeconds.style.transform = `rotate(${(date.getSeconds() / 60) * 360}deg)`;
    needleMinuts.style.transform = `rotate(${(date.getMinutes() / 60) * 360}deg)`;
    needleHours.style.transform = `rotate(${(date.getHours() / 12) * 360}deg)`;
}

function digit(number) {
    return number <= 9 ? '0' + number : number;
}

function findDay(day) {
    switch(day) {
        case 0:
        return "Sunday";
        break;
        case 1:
        return "Monday";
        break;
        case 2:
        return "Tuesday";
        break;
        case 3:
        return "Wednesday";
        break;
        case 4:
        return "Thursday";
        break;
        case 5:
        return "Friday";
        break;
        case 6:
        return "Saturday";
        break;
    }
}

function findMonth(month) {
    switch(month) {
        case 0:
        return "January";
        break;
        case 1:
        return "February";
        break;
        case 2:
        return "March";
        break;
        case 3:
        return "April";
        break;
        case 4:
        return "May";
        break;
        case 5:
        return "June";
        break;
        case 6:
        return "July";
        break;
        case 7:
        return "August";
        break;
        case 8:
        return "September";
        break;
        case 9:
        return "October";
        break;
        case 10:
        return "November";
        break;
        case 11:
        return "December";
        break;
    }
}

const intervel = setInterval(update, 1);