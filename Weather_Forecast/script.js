// https://api.openweathermap.org/responce/2.5/weather?q=nandyal&appid=f18d24a7eedccc715d014d6f2c94e35b&units=metric
// clouds, clear, rain, drizzle, mist, snow
// calcius to farenheat = (0°C × 9/5) + 32 = 32°F

//global tags
const globalInput = document.getElementById("global-search-input");
const globalInputBtn = document.getElementById("global-search-icon");
const bodyContainer = document.getElementById("body-container");
const temperature = document.getElementById("temperature");
// const globalPlace = document.getElementById("global-place");
// const temperature = document.getElementById("temperature");
// const weatherCondition = document.getElementById("weather-condition");
// const humidityValue = document.getElementById("humidity-value");
// const windValue = document.getElementById|("wind-value")
const weatherList = document.getElementById("weather-list-ul");
const clearBtn = document.getElementById("clear-btn");
const menuBars = document.getElementById("menu-bars");

//weatherList tags
const weatherListInput = document.getElementById("weather-list-search-input");
const weatherListbtn = document.getElementById("weather-list-search-icon");

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=f18d24a7eedccc715d014d6f2c94e35b&units=metric";

async function checkWeather(city) {
    try {
        const responce = await fetch(apiUrl + city + apiKey);
        const data = await responce.json();
        if (!responce.ok) {
            throw new Error(data.message);
        } else {
            return data;
            // console.log(data)
        }
    } catch (error) {
        return error.message;
    }

}

const unitToggles = document.getElementById("units-toggle");
let isPopDown = false;

menuBars.addEventListener("click", () => {
    if (!isPopDown) {
        unitToggles.style.display = "block";
        isPopDown = true;
        menuBars.classList.replace("fa-bars", "fa-xmark");
    } else {
        unitToggles.style.display = "none";
        isPopDown = false;
        menuBars.classList.replace("fa-xmark", "fa-bars");
    }
})

let isWeatherCardCreated = false;
let isInCelcius = true; // if is in true means is in calcius unit type
let isDataCreated = false;
let temperatureTemp;

const unit = document.getElementsByClassName("unit");
const unitType = document.getElementsByClassName("unit-type");
// console.log(unit, unitType)

let celciusTempArr = [];

for (let i = 0; i < unit.length; i++) {
    unit[i].addEventListener("click", async () => {
        if (isInCelcius) {      //In Fararenheit unit
            unitType[1].checked = true;     //Farebheit is checked
            unitType[0].checked = false;    //Celcius is Unchecked
            if (isDataCreated) {
                temperature.textContent = unitConvertion(temperatureTemp) + "°";
                if (isWeatherCardCreated) {
                    const cardTemperature = document.getElementsByClassName("card-temperature");
                    for (let i = 0; i < cardTemperature.length; i++) {
                        cardTemperature[i].textContent = unitConvertion(celciusTempArr[i]) + "°";
                    }
                }
            }
            isInCelcius = false;
        } else {        //In Celcius Unit
            unitType[1].checked = false;    //Farenheit is Unchecked
            unitType[0].checked = true;     //Celcius is Checked
            if (isDataCreated) {
                temperature.textContent = temperatureTemp + "°";
                if (isWeatherCardCreated) {
                    const cardTemperature = document.getElementsByClassName("card-temperature");
                    for (let i = 0; i < cardTemperature.length; i++) {
                        cardTemperature[i].textContent = celciusTempArr[i] + "°";
                    }
                }
            }
            isInCelcius = true;
        }
    })
}

function unitConvertion(number) {
    return Math.round((number * 9/5) + 32);
}

// console.log(unitConvertion(33))

async function updateData(data) {
    bodyContainer.style.opacity = 1;
    document.getElementById("global-place").innerHTML = `${data.name} <i class="fa-solid fa-location-dot loc-icon"></i>`;
    temperatureTemp = Math.round(data.main.temp);
    // celciusTempArr[0] = temperatureTemp;
    if (celciusTempArr.length) {
        celciusTempArr[0] = temperatureTemp;
    }
    // if (isInCelcius) {
    //     temperature.textContent = temperatureTemp + "°";
    // } else {
    //     temperature.textContent = unitConvertion(temperatureTemp) + "°";
    // }
    isInCelcius ? temperature.textContent = temperatureTemp + "°" : temperature.textContent = unitConvertion(temperatureTemp) + "°";
    document.getElementById("weather-condition").textContent = data.weather[0].main;
    document.getElementById("humidity-value").textContent = Math.floor(data.main.humidity) + " %";
    document.getElementById("wind-value").textContent = Math.round(data.wind.speed);
    document.body.style.backgroundImage = `url(images/${await background(data)}.jpg)`;
    // weatherList.innerHTML = '';
    if (!isWeatherCardCreated) {
        weatherList.append(await weatherCard(data));
        isWeatherCardCreated = true;
    } else {
        document.getElementById("card-place").innerHTML = `${data.name} <i class="fa-solid fa-location-dot loc-icon"></i>`;
        const cardTemperature = document.getElementsByClassName("card-temperature")[0];
        // if (isInCelcius) {
        //     cardTemperature.textContent = temperatureTemp + "°";
        // } else {
        //     cardTemperature.textContent = unitConvertion(temperatureTemp) + "°";
        // }
        isInCelcius ? cardTemperature.textContent = temperatureTemp + "°" : cardTemperature.textContent = unitConvertion(temperatureTemp) + "°";
        document.getElementById("card-weather-condition").textContent = data.weather[0].main;
        document.querySelector(".weather-card").style.backgroundImage = `url(images/${await background(data)}.jpg)`;
    }
    isDataCreated = true;
}

async function background(data) {
    switch (data.weather[0].main) {
        case "Rain":
            return "Rain";
        case "Clouds":
            return "Clouds"
        case "Clear":
            return "Clear"
        case "Drizzle":
            return "Rain";
        case "Mist":
            return "Mist";
        case "Fog":
            return "Mist";
        case "Haze":
            return "Mist"
    }
}

async function weatherCard(data) {
    let temp1 = Math.round(data.main.temp);
    let cardData = `<div id="card-place" class="place">${data.name} <i class="fa-solid fa-location-dot loc-icon"></i></div>
                    <div id="card-data">
                        <span class="card-temperature">${isInCelcius ? temp1 : unitConvertion(temp1) + "°"}</span>
                        <div id="card-weather-condition">
                            ${data.weather[0].main}
                        </div>
                    </div>`
    celciusTempArr.push(Math.round(data.main.temp));
    const card = document.createElement("li");
    card.setAttribute("class", "weather-card");
    card.innerHTML = cardData;
    card.style.backgroundImage = `url(images/${await background(data)}.jpg)`  
    return card;
} 


globalInputBtn.addEventListener("click", async () => {
    const globalCityName = globalInput.value;
    if (globalCityName == '') {
        alert("Please Enter City Name!");
    } else {
        const result = await checkWeather(globalCityName);
        if (result == "city not found") {
            alert(result);
        } else {
            updateData(result);
        }
    }
    globalInput.value = '';
})

weatherListbtn.addEventListener("click", async () => {
    const weatherListCityName = weatherListInput.value;
 
    if (weatherListCityName == '') {
        alert("Please Enter City Name!");
    } else {
        const result = await checkWeather(weatherListCityName);
        if (weatherList.children.length == 0) {
            updateData(result);
        } else if (result == "city not found") {
            alert(result);
        } else {
            // console.log(result)
            const card = await weatherCard(result);
            weatherList.append(card);
            clearBtn.style.display= "block";
        }
    }
    weatherListInput.value = '';
})

clearBtn.addEventListener("click", () => {
    const weartherCardArr = Array.from(weatherList.children);
    for (let i = 1; i < weartherCardArr.length; i++) { 
        weatherList.removeChild(weartherCardArr[i])
    }
    clearBtn.style.display = "none";
})

