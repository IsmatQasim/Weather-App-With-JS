let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");


const getCountryName = (code) =>{
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);


}
const getWeatherData = async() =>{
    const weatherUrl = `httpss://api.openweathermap.org/data/2.5/weather?q=karachi&APPID=9f3a3d8f87f542652b7877e6482c2310`;
    try{
        const res = await fetch(weatherUrl);
        const data = await res.json();
 
        const {main , name, weather, wind, sys , dt} = data; //destruction 
        cityName.textContent =` ${name} , ${getCountryName(sys.country)}`;
    }
    catch(error){
        console.log(error);
    }
}

document.body.addEventListener("load", getWeatherData()); //show the data when reload.
  

