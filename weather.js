const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const weather = JSON.parse(localStorage.getItem("data"));

console.log(weather);

icon.style.backgroundImage = `url(http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png)`;
temp.innerHTML = parseInt(weather.main.temp - 274) + "°C";
