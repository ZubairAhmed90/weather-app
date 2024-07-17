const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIKEY = "6fc3fed028b9cc44bda9d61c944b31cd";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
  )
    .then((response) => response.json())
    .then((json) => {
     

      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .Wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "weather-icon-png-11104.jpg";
          break;

        case "Rain":
          image.src = "cloud-rain-icon-2.png";
          break;

        case "Snow":
          image.src = "6221304.png";
          break;

        case "Clouds":
          image.src =
            "weather.png";
          break;

        case "Mist":
          image.src = "blizzard.png";
          break;

        case "Haze":
          image.src = "blizzard.png";
          break;

        case "Smoke":
          image.src = "blizzard.png";
          break;

        default:
          image.src =
            "rainy-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>*C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
