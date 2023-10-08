let display_weather = function(){
let city = document.getElementById("input-value").value; 
fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,{
    method:'GET',
    headers: {
      'X-RapidAPI-Key': 'af24bbdd68mshc6045d80593d0d2p150673jsnf8acb67b2c00',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
})
.then(res=>res.json())
.then(data => {
  console.log(data)
  console.log(data.current.humidity)


  let date = document.getElementById("date");
  date.innerHTML = data.current.last_updated;


  let loc_name = document.getElementById("country-name");
  loc_name.innerHTML="Weather in "+ data.location.name;


  let clouds = document.getElementById("cloud");
  clouds.style.display = "block"
  clouds.innerHTML= "Type : " + data.current.condition.text;

  let temp = document.getElementById("temperature");
  temp.style.display = "block"
  temp.innerHTML= "Temp : " + data.current.temp_c  +"<sup>o</sup>" + "c" ;

  let hum = document.getElementById("humidity");
  hum.style.display = "block"
  hum.innerHTML="Humidity: "+ data.current.humidity + "%";

  let speed = document.getElementById("speed");
  speed.style.display = "block"
  speed.innerHTML="WindSpeed: " +data.current.wind_kph + "km/h";

  
})
.catch((error)=>{
    // console.log(error) 

    let loc_name = document.getElementById("country-name");
    loc_name.innerHTML="Weather in these area is not found"
    let clouds = document.getElementById("cloud");
    clouds.style.display = "none"

    let temp = document.getElementById("temperature");
    temp.style.display = "none"
  
    let hum = document.getElementById("humidity");
    hum.style.display = "none"
  
    let speed = document.getElementById("speed");
    speed.style.display = "none"
})

}


let clicked = document.getElementById("search-icon");

clicked.addEventListener("click",function(){
    console.log("clicked the button");
    display_weather();
    document.getElementById("input-value").value ="";
})

display_weather()

document.getElementById("input-value").addEventListener('keyup',(e)=>{
     if(e.key === "Enter"){
        display_weather()
     }
})