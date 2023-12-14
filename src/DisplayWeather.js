import CurrentDate from "./CurrentDate";
import "./DisplayWeather.css";

export default function DisplayWeather(props) {
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
          <img src={props.info.icon} alt={props.info.description} />
        </div>
      </div>
    </main>
  );
}
