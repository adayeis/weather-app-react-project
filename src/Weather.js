import { useState } from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";
import DisplayWeather from "./DisplayWeather";
import DisplayForecast from "./DisplayForecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  function displayTemperature(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function callWeatherApi() {
    const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function searchingCityWeather(event) {
    event.preventDefault();
    callWeatherApi();
  }

  function setCityValue(event) {
    setCity(event.target.value);
  }

  /* Formu componente çevirmeye çalış */
  if (weather.ready) {
    return (
      <div className="Weather">
        <div>
          <form onSubmit={searchingCityWeather}>
            <input
              tyoe="search"
              placeholder="Search a city..."
              onChange={setCityValue}
            ></input>
            <input type="submit" value="Search" />
          </form>
        </div>
        <DisplayWeather info={weather} />
        <DisplayForecast lat={weather.lat} lon={weather.lon} />
      </div>
    );
  } else {
    callWeatherApi();
    return (
      <div className="Weather">
        <div>
          <form onSubmit={searchingCityWeather}>
            <input
              tyoe="search"
              placeholder="Search a city..."
              onChange={setCityValue}
            ></input>
            <input type="submit" value="Search" />
          </form>
        </div>
        <main className="loader">
          <Hearts
            height="100%"
            width="100%"
            radius="9"
            color="#d3e9f5"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </main>
      </div>
    );
  }
}
