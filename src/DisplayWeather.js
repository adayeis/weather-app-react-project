import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import "./DisplayWeather.css";

export default function DisplayWeather(props) {
  /*Find cool icons*/
  return (
    <main className="DisplayWeather">
      <div>
        <h2>{props.info.city}📍</h2>
      </div>
      <div>
        <CurrentDate />
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
          <WeatherIcon code={props.info.icon} />
        </div>
      </div>
    </main>
  );
}
