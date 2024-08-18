const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "69e7d24054b6877fcb47f491fe478f15";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    pressure.innerHTML =`${weather_data.main.pressure}mBar`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/image/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/image/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/image/rain2.png";
            break;
        case 'Drizzle':
            weather_img.src = "/image/rain2.png";
            break;
        case 'Snow':
            weather_img.src = "/image/snow.png";
            break;
        case 'Mist':
            weather_img.src = "/image/mist2.png";
            break;
        case 'Smoke':
            weather_img.src = "/image/mist2.png";
            break;
        case 'Haze':
            weather_img.src = "/image/mist2.png";
            break;
    }

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});

