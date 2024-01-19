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
  console.log(responsedata);
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
  let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let day = days[now.getDay()];
  let minute = now.getMinutes();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0 ${hour}
    `;
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
getForecast("paris ");
