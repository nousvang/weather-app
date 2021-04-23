function text() {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  search(searchInput.value);
}

function search(city) {
  let apiKey = "e84830669835db80ec691f78d61d1107";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", text);

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
}

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let h2 = document.querySelector("h2");
h2.innerHTML = `${day} ${hour}:${minutes}`;

function showPosition(position) {
  let latitude = `${position.coords.latitude}`;
  let longitude = `${position.coords.longitude}`;
  let apiKey = "e84830669835db80ec691f78d61d1107";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function currentLocation() {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", currentLocation);
