import { useState } from "react";
import DisplayForecastDay from "./DisplayForecastDay";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./DisplayForecast.css";

export default function DisplayForecast(props) {
  const [forecast, setForecast] = useState({});
  const [tomorrow, setTomorrow] = useState({});
  const [ready, setReady] = useState(false);

  function displayForecast(response) {
    setReady(true);
    setForecast(response.data.daily);
    setTomorrow({
      min: Math.round(response.data.daily[1].temp.min),
      max: Math.round(response.data.daily[1].temp.max),
      description: response.data.daily[1].weather[0].description,
      icon: response.data.daily[1].weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`,
    });
  }

  function callForacastapi() {
    const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiForecastUrl).then(displayForecast);
  }

  if (ready) {
    return (
      <div className="DisplayForecast">
        <ul>
          <li>
            <span>Tomorrow</span> <WeatherIcon code={tomorrow.icon} size={28} />
            <span className="forecast-max">{tomorrow.max}°C</span>{" "}
            <span className="forecast-min">{tomorrow.min}°C</span>
          </li>
          {forecast.map(function (dailyForecast, index) {
            if (index > 1) {
              return (
                <span key={index}>
                  <DisplayForecastDay info={dailyForecast} />
                </span>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    callForacastapi();
  }
}
