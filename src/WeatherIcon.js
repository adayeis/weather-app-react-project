import {
  WiDaySunny,
  WiMoonAltFull,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayRain,
  WiNightRain,
  WiThunderstorm,
  WiSnowflakeCold,
  WiDayFog,
  WiNightFog,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  switch (props.code) {
    case "01d":
      return <WiDaySunny size={180} color="#000" />;
      break;
    case "01n":
      return <WiMoonAltFull size={180} color="#000" />;
      break;
    case "02d":
      return <WiDayCloudy size={180} color="#000" />;
      break;
    case "02n":
      return <WiNightCloudy size={180} color="#000" />;
      break;
    case "03d":
      return <WiCloud size={180} color="#000" />;
      break;
    case "03n":
      return <WiCloud size={180} color="#000" />;
      break;
    case "04d":
      return <WiCloudy size={180} color="#000" />;
      break;
    case "04n":
      return <WiCloudy size={180} color="#000" />;
      break;
    case "09d":
      return <WiRain size={180} color="#000" />;
      break;
    case "09n":
      return <WiRain size={180} color="#000" />;
      break;
    case "10d":
      return <WiDayRain size={180} color="#000" />;
      break;
    case "10n":
      return <WiNightRain size={180} color="#000" />;
      break;
    case "11d":
      return <WiThunderstorm size={180} color="#000" />;
      break;
    case "11n":
      return <WiThunderstorm size={180} color="#000" />;
      break;
    case "13d":
      return <WiSnowflakeCold size={180} color="#000" />;
      break;
    case "13n":
      return <WiSnowflakeCold size={180} color="#000" />;
      break;
    case "50d":
      return <WiDayFog size={180} color="#000" />;
      break;
    case "50n":
      return <WiNightFog size={180} color="#000" />;
      break;
    default:
      return <span></span>;
  }
}
