function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let searchInputValue = searchInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInputValue;
}
let inputForm = document.querySelector(".input-form");
inputForm.addEventListener("submit", search);

function displayForecast() {
  let forecast = document.querySelector("#forecast");
  let forecastHtml = "";
  let days = ["mon", "tue", "wed", "thu", "fri"];

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weatherforecast-day">< div class = "row " >
            < div class = "col-2 " >
            < div class = "weather-forecast-date " > ${day} < /div>
             < img src = " http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png "
        class = "weatherapp-icon" / >
            </div> <
            div class = "weatherforecast-app-temperature " >
            < span class = "max-temp " > 18 < /span> <span class="min-temp ">12</span >
            </div> </div></div>`;
  });
  forecast.innerHTML = forecastHtml;
}
displayForecast();
