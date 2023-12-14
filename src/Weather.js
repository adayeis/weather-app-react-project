import { useState } from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";
import DisplayWeather from "./DisplayWeather";
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
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function callWeatherApi() {
    const apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayTemperature);
  }

  function searchingCityWeather(event) {
    event.preventDefault();
    callWeatherApi();
  }

  function setCityValue(event) {
    setCity(event.target.value);
  }

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
