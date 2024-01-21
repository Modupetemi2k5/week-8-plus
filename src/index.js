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
  let apiUrl = ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function getForecast(city) {
  let apiKey = "03c85048t924o90fc221bd5189a06dda";
  let apiUrl = ` https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let forecast = document.querySelector("#forecast");
  let forecastHtml = `<div class ="row"> `;
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class ="col-2">
        <div class ="weather-forecast-date">${day}</div>
        <img src ="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
    class ="weatherapp-icon"/>
        <div class ="weatherforecast-app-temperature">  
        <span class ="max-temp">18</span><span class="min-temp">12</span>
        </div></div>`;
  });
  forecastHtml = forecastHtml + `</div>`;

  forecast.innerHTML = forecastHtml;
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
  if (minute < 0) {
    minute = `0${minute}`;
  }
  currentDate = `${day} ${hour}:${minute}`;
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = currentDate;
}
formatDate();
let inputForm = document.querySelector(".input-form");
inputForm.addEventListener("submit", search);
searchCity("paris");
getForecast("paris");
