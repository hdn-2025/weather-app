// 🔧 Configuration
const API_KEY = '994651d5d3fbfdab668e1d319e079f81'; // Replace with your actual key
const API_ENDPOINTS = {
  geocoding: 'http://api.openweathermap.org/geo/1.0/direct',
  forecast: 'https://api.openweathermap.org/data/2.5/forecast'
};

let unit = 'metric';
let lastCoords = null;
let lastCityName = '';

// 🔗 DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const toggleUnitBtn = document.getElementById('toggleUnit');
const currentWeather = document.getElementById('currentWeather');
const forecastContainer = document.getElementById('forecast');
const weatherAlert = document.getElementById('weatherAlert');
const recentCitiesWrapper = document.getElementById('recentCities');
const cityDropdown = document.getElementById('cityDropdown');
const clearRecentBtn = document.getElementById('clearRecentBtn');

// 🔍 Search by city
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) return showError('Please enter a city name.');
  fetchCoordsFromCity(city);
  updateRecentCities(city);
});

// 📍 Use current location
locationBtn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(
    pos => {
      const { latitude, longitude } = pos.coords;
      lastCoords = { lat: latitude, lon: longitude };
      lastCityName = 'Your Location';
      fetchWeatherByCoords(latitude, longitude, lastCityName);
    },
    () => showError('Location access denied.')
  );
});

// 🌡️ Toggle °C/°F
toggleUnitBtn.addEventListener('click', () => {
  unit = unit === 'metric' ? 'imperial' : 'metric';
  toggleUnitBtn.textContent = unit === 'metric' ? 'Switch to °F' : 'Switch to °C';

  if (lastCoords) {
    fetchWeatherByCoords(lastCoords.lat, lastCoords.lon, lastCityName);
  } else {
    const city = cityInput.value.trim();
    if (city) fetchCoordsFromCity(city);
  }
});

// 🕘 Dropdown selection
cityDropdown.addEventListener('change', () => {
  const city = cityDropdown.value;
  if (city) fetchCoordsFromCity(city);
});

// 🧹 Clear recent searches
clearRecentBtn.addEventListener('click', () => {
  localStorage.removeItem('recentCities');
  renderRecentCities();
  showMessage('Recent searches cleared.');
});

// 🌐 Convert city name to coordinates
function fetchCoordsFromCity(city) {
  const geoURL = `${API_ENDPOINTS.geocoding}?q=${city}&limit=1&appid=${API_KEY}`;
  fetch(geoURL)
    .then(res => res.json())
    .then(data => {
      if (!data.length) throw new Error('City not found.');
      const { lat, lon, name } = data[0];
      lastCoords = { lat, lon };
      lastCityName = name;
      fetchWeatherByCoords(lat, lon, name);
    })
    .catch(err => showError(err.message));
}

// 🌦️ Fetch weather data by coordinates
function fetchWeatherByCoords(lat, lon, cityName = '') {
  const weatherURL = `${API_ENDPOINTS.forecast}?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
  fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      displayCurrentWeather(data.list[0], cityName);
      displayForecast(data.list);
    })
    .catch(err => showError(err.message));
}

// 🌤️ Display current weather
function displayCurrentWeather(data, name) {
  const temp = Math.round(data.main.temp);
  const wind = data.wind.speed;
  const condition = data.weather[0].description.toLowerCase();

  // 🔥 Heat alert
  if (temp > 40 && unit === 'metric') {
    weatherAlert.textContent = '🔥 Extreme heat alert!';
    weatherAlert.classList.remove('hidden');
  } else {
    weatherAlert.classList.add('hidden');
  }

  // 🌧️ Background only if rainy
  const isRainy = condition.includes('rain') || condition.includes('drizzle') || condition.includes('shower');
  document.body.className = isRainy ? 'bg-blue-200' : 'bg-gray-100';

  currentWeather.innerHTML = `
    <div class="flex items-center gap-4">
      <div>
        <h3 class="text-2xl font-bold">${name}</h3>
        <p>${temp}° ${unit === 'metric' ? 'C' : 'F'} - ${condition}</p>
        <p>💨 Wind: ${wind} ${unit === 'metric' ? 'm/s' : 'mph'}</p>
      </div>
    </div>
  `;
}

// 📅 Display 5-day forecast
function displayForecast(list) {
  forecastContainer.innerHTML = '';
  for (let i = 0; i < list.length; i += 8) {
    const item = list[i];
    const date = item.dt_txt.split(' ')[0];
    const tempMax = Math.round(item.main.temp_max);
    const tempMin = Math.round(item.main.temp_min);
    const wind = item.wind.speed;
    const rain = item.rain?.['3h'] || 0;

    forecastContainer.innerHTML += `
      <div class="bg-white p-4 rounded shadow">
        <h4 class="font-semibold">${date}</h4>
        <p>🌡️ Temp: ${tempMin}° - ${tempMax}°</p>
        <p>💨 Wind: ${wind} ${unit === 'metric' ? 'm/s' : 'mph'}</p>
        <p>🌧️ Rain: ${rain} mm</p>
      </div>
    `;
  }
}

// 🧠 Update recent cities
function updateRecentCities(city) {
  let cities = JSON.parse(localStorage.getItem('recentCities')) || [];
  if (!cities.includes(city)) {
    cities.unshift(city);
    if (cities.length > 5) cities.pop();
    localStorage.setItem('recentCities', JSON.stringify(cities));
  }
  renderRecentCities();
}

// 📂 Render dropdown
function renderRecentCities() {
  const cities = JSON.parse(localStorage.getItem('recentCities')) || [];
  clearRecentBtn.disabled = cities.length === 0;
  if (cities.length === 0) {
    recentCitiesWrapper.classList.add('hidden');
    return;
  }
  recentCitiesWrapper.classList.remove('hidden');
  cityDropdown.innerHTML = cities.map(c => `<option value="${c}">${c}</option>`).join('');
}

// ⚠️ Show error message
function showError(message) {
  weatherAlert.textContent = `⚠️ ${message}`;
  weatherAlert.classList.remove('hidden');
}

// ℹ️ Show info message
function showMessage(msg) {
  weatherAlert.textContent = `ℹ️ ${msg}`;
  weatherAlert.classList.remove('hidden');
  setTimeout(() => weatherAlert.classList.add('hidden'), 3000);
}

// 🚀 Initialize recent cities on load
window.addEventListener('DOMContentLoaded', renderRecentCities);

