// js에서 Geolocation.getCurrentPosition() 함수 실행시 장치의 현재 위치를 가져온다.
const WEATHER_API_KEY = "5105d5697329c5c37681672123a127ed";
const CITY_API_KEY = "AIzaSyBIbHcjObEteHebcV2mM6n1tr8uFAkDO2k";

async function onGeoOk(positon) {
    const lat = positon.coords.latitude;
    const lon = positon.coords.longitude;
    const cityUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${CITY_API_KEY}&language=en`;
    
    let response = await fetch(cityUrl);
    let data = await response.json();

    const cityName = data.results[9].formatted_address.split(" ")[0].replace(",","");
    document.querySelector(".weather__city").innerText = cityName;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`;

    response = await fetch(weatherUrl);
    data = await response.json();

    const weatherIcon = document.querySelector(".weather__icon");
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const weatherTemp = document.querySelector(".weather__temp");
    weatherTemp.innerText = `${data.main.temp.toFixed(0)}°`;
}

function onGeoError() {
    document.querySelector(".weather").style.display = "none";
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);