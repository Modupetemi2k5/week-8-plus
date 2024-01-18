function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let searchInputValue = searchInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInputValue;
}

function displayForecast() {
  let forecastHtml = "";
  let days = ["mon", "tue", "wed", "thu", "fri"];

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
            < div class = "col-2 " >
            < div class = "weather-forecast-date " > ${day} < /div>
             < img src = " http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png "
        class = "weatherapp-icon"/>
            < div class = "weatherforecast-app-temperature " >
         '   < span class = "max-temp " > 18 < /span> <span class="min-temp ">12</span >
            </div> </div>`;
  });
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}
displayForecast();

function formatDate() {
  let now = new Date();
  let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  let day = days[now.getDay()];
  let minute = now.getMinutes();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 0) {
    minute = `0${minute}`;
  }
  currentDate = `${day}${hour}:${minute}`;
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = currentDate;
}
formatDate();
let inputForm = document.querySelector(".input-form");
inputForm.addEventListener("submit", search);
