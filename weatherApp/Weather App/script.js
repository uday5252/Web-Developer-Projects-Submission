// const apiKey="83272d97d40a2f9089ea8388662a663f"
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const cityName = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const cloudiness=document.getElementById('cloudiness');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const loadingScreen = document.querySelector('.loading');
const errorPage = document.querySelector('.error');


async function checkWeather(city){

    //input box is empty

    if(inputBox.value ==="")
    return alert("Please enter the city name");

    try{
        loadingScreen.style.display = "block";
        location_not_found.style.display = "none";
        weather_body.style.display = "none";
        errorPage.style.display = "none";
    const api_key = "83272d97d40a2f9089ea8388662a663f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    const response = await fetch(`${url}`)
    const  weather_data= await response.json();
    console.log(weather_data);

// //////////////if city name not found///////////////
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        console.log(weather_data.message);
        return;
    }

    cityName.innerHTML = weather_data.name;
    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    cloudiness.innerHTML=`${weather_data.clouds.all}%`;

    if(weather_data.weather[0].main=="Clouds")
            weather_img.src = "/assets/clouds.png";
     else if(weather_data.weather[0].main=="Clear")
            weather_img.src = "/assets/clear.png";
     else if(weather_data.weather[0].main=="Rain")
            weather_img.src = "/assets/rain.png";
     else if(weather_data.weather[0].main=="Mist")    
            weather_img.src = "/assets/mist.png";
     else if(weather_data.weather[0].main=="Snow") 
            weather_img.src = "/assets/snow.png";
     else if(weather_data.weather[0].main=="Haze") {
            weather_img.src = "/assets/drizzle.png";
     }

     loadingScreen.style.display = "none";
     location_not_found.style.display = "none";
     weather_body.style.display = "flex";   
    }
    

    // ////////////////Handling error////////////////////////////////
    

catch (error){
        console.log(error);
        alert("error in fetching Api or Network Error!!");
        loadingScreen.style.display = "none";
        errorPage.style.display = "block";
}
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
    inputBox.value=""
});

// ///////////////////After pressing enter key show output/////////////////////////////////////////////
inputBox.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        checkWeather(inputBox.value)
        inputBox.value=""
    }
})