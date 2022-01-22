// js에서 Geolocation.getCurrentPosition() 함수 실행시 장치의 현재 위치를 가져온다.
const API_KEY = "5105d5697329c5c37681672123a127ed";

function onGeoOk(positon) {
    const lat = positon.coords.latitude;
    const lon = positon.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);