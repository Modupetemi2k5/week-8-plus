function refreshWeather(response) {
  console.log(response.data);
  let cityElement = document.querySelector("h1");
  let timeElement = document.querySelector("#time");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#windspeed");
  let tempElement = document.querySelector(".temp");
  let iconElement = document.querySelector(".icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = currentDate;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windSpeed.innerHTML = response.data.wind.speed;
  tempElement.innerHTML = response.data.temperature.current;
  iconElement.innerHTML = response.data.condition.icon_url;
  getForecast(response.data.city);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let searchInputValue = searchInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInputValue;
}

function searchCity(city) {
  let apiKey = "03c85048t924o90fc221bd5189a06dda";
  let apiUrl = `https://api.shecodes.io/weather/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function getForecast(city) {
  let apiKey = "03c85048t924o90fc221bd5189a06dda";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let forecast = document.querySelector("#forecast");
  let forecastHtml = `<div class="row">`;

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `<div class="col-2" >
        <div class="weather-forecast-date" >${formatDay(day.time)}</div><
        img src="${day.condition.icon_url}"
    class ="weatherapp-icon"/>
        <div class="weatherforecast-app-temperature">
        <span class="max-temp">${Math.round(day.temperature.maximum)} º < /span>
         <span class="min-temp">${Math.round(
           day.temperature.minimum
         )} º < /span>
          </div></div>`;
    }
  });
  forecastHtml = forecastHtml + `</div>`;
  forecast.innerHTML = forecastHtml;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function formatDate() {
  let now = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let minute = now.getMinutes();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0 ${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  currentDate = `${day} ${hour}:${minute}`;
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = currentDate;
}
formatDate();
let inputForm = document.querySelector(".input-form");
inputForm.addEventListener("submit", search);
searchCity("lisbon");
