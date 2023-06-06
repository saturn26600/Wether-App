// main.js
const API_KEY = "826d7a44b198cf8c95e55967b086ae22"
const weatherInfo = document.getElementById("weather-info")
const cityNameElement = document.getElementById("city-name")
const weatherIconElement = document.getElementById("weather-icon")
const tempElement = document.getElementById("temp")
const tempMinMaxElement = document.getElementById("temp-min-max")
const humidityElement = document.getElementById("humidity")
const windElement = document.getElementById("wind")
const cityInput = document.getElementById("city-input")
const button = document.getElementById("button-addon2")

button.addEventListener("click", getWeather)
cityInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    getWeather()
  }
})

function getWeather() {
  let city = cityInput.value
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      cityNameElement.textContent = data.name
      weatherIconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      tempElement.textContent = `온도: ${data.main.temp}℃`
      tempMinMaxElement.textContent = `최저/최고 온도: ${data.main.temp_min}℃ / ${data.main.temp_max}℃`
      humidityElement.textContent = `습도: ${data.main.humidity}%`
      windElement.textContent = `바람: ${data.wind.speed}m/s, 방향: ${data.wind.deg}도`
      weatherInfo.style.display = "block"
    })
    .catch(() =>
      alert("도시를 찾을 수 없습니다. 올바른 도시 이름을 입력해주세요.")
    )
}
