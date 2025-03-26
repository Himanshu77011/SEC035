const API_KEY = '0126b46dba7cd6cd9b4ccd81f20f12b5';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const errorMsg = document.getElementById('errorMsg');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temp');
const description = document.getElementById('description');

async function fetchWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        
        displayWeather(data);
    } catch (error) {
        showError();
    }
}

function displayWeather(data) {
    cityName.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    
    weatherInfo.style.display = 'block';
    errorMsg.style.display = 'none';
}

function showError() {
    weatherInfo.style.display = 'none';
    errorMsg.style.display = 'block';
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
        cityInput.value = '';
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

fetchWeather('London');