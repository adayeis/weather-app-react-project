import DisplayDate from "./DisplayDate";
import WeatherIcon from "./WeatherIcon";
import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  return (
    <main className="DisplayWeather">
      <div className="city-name">
        <h2>{props.info.city}</h2>{" "}
        <i
          className="fa-solid fa-location-dot"
          Style="color: #000000; font-size:18px"
        ></i>
      </div>
      <div>
        <DisplayDate />
        <div className="temp-container">
          <ul>
            <li className="current-temp">
              {props.info.temperature}
              <span>°C</span>{" "}
            </li>
            <li>
              {props.info.min}° / {props.info.max}°
            </li>
            <li className="description">{props.info.description}</li>
          </ul>
          <WeatherIcon code={props.info.icon} size={180} />
        </div>
      </div>
    </main>
  );
}
