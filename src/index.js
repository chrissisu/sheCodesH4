let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  moscow: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city");

if (weather[city] !== undefined) {
  let temp = weather[city].temp;
  let celsiusTemp = Math.round(temp);
  let fahrenheitTemp = Math.round((temp * 9) / 5 + 32);
  let humidity = weather[city].humidity;

  alert(
    `"It is currently ${celsiusTemp}°C (${fahrenheitTemp}°F) in ${city} with a humidity of ${humidity}"`
  );
} else {
  alert(
    `"Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"`
  );
}

let now = new Date();
let currentdate = document.querySelector("#current-date");

let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();

currentdate.innerHTML = `${day} ${hours}:${minutes}`;

function changeCity(event) {
  event.preventDefault();
  let changeCity = document.querySelector("#change-city");
  let city = document.querySelector("#current-city");
  city.innerHTML = `${changeCity.value}`;
}
let engine = document.querySelector("#browse");
engine.addEventListener("submit", changeCity);
