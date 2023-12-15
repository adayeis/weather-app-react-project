import WeatherIcon from "./WeatherIcon";

import "./DisplayForecast.css";

export default function DisplayForecast() {
  return (
    <div className="DisplayForecast">
      <ul>
        <li>
          <span>Tomorrow</span> <WeatherIcon code="01d" size={28} />
          <span>19°C</span> <span>12°C</span>
        </li>
        <li>
          <span>22 September 2023</span> <WeatherIcon code="01d" size={28} />
          <span>19°C</span>
          <span>12°C</span>
        </li>
      </ul>
    </div>
  );
}
