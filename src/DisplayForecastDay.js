import WeatherIcon from "./WeatherIcon";

export default function DisplayForecastDay(props) {
  let daily = {
    dt: props.info.dt * 1000,
    min: Math.round(props.info.temp.min),
    max: Math.round(props.info.temp.max),
    icon: props.info.weather[0].icon,
  };

  function forecastDate() {
    let date = new Date(daily.dt);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septemper",
      "October",
      "November",
      "December",
    ];

    month = months[month];

    return `${day} ${month} ${year}`;
  }

  return (
    <li>
      <span>{forecastDate()}</span> <WeatherIcon code={daily.icon} size={28} />
      <span className="forecast-max">{daily.max}°C</span>{" "}
      <span className="forecast-min">{daily.min}°C</span>
    </li>
  );
}
