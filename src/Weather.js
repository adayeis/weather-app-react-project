import { useState } from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";
import CurrentDate from "./CurrentDate";

import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function displayTemperature(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div>
          <form>
            <input tyoe="search" placeholder="Search a city..."></input>
            <input type="submit" value="Search" />
          </form>
        </div>
        <div>
          <h2>{weather.city} 📍</h2>
        </div>
        <div>
          <CurrentDate />
          <div className="temp-container">
            <ul>
              <li className="current-temp">
                {weather.temperature}
                <span>°C</span>{" "}
              </li>
              <li>
                {weather.min}° / {weather.max}°
              </li>
              <li className="description">{weather.description}</li>
            </ul>
            <img src={weather.icon} alt="description icon" />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayTemperature);
    return (
      <div className="Weather">
        <div>
          <form>
            <input tyoe="search" placeholder="Search a city..."></input>
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="loader">
          <Hearts
            height="100%"
            width="100%"
            radius="9"
            color="#d3e9f5"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      </div>
    );
  }
}
