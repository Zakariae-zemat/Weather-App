const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const appKey = "64ef817b424787bb9bb1fdad27df3523";

const searchValue = document.getElementById('search');

async function checkWeather() {
    const city = searchValue.value;
    
    const cityName = document.getElementById('city');
    const windSpeed = document.getElementById('wind-speed');
    const humidity = document.getElementById('humidity');
    const temperature = document.getElementById('temperature');

    const api = apiUrl + city + "&appid=" + appKey;
    const response = await fetch(api);
    const data = await response.json();
    if (!response.ok) {
        alert('City not found!');
    }
    const tempC = Math.floor(data.main.temp - 273.15); 
    cityName.textContent = city;
    windSpeed.textContent = data.wind.speed + " km/h"; 
    humidity.textContent = data.main.humidity + " %"; 
    temperature.textContent = tempC + " °C"; 
}

document.getElementById('searchBtn').addEventListener('click', checkWeather);
