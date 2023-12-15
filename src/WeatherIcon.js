import {
  WiDaySunny,
  WiMoonAltNew,
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
    case "01n":
      return <WiMoonAltNew size={180} color="#000" />;
    case "02d":
      return <WiDayCloudy size={180} color="#000" />;
    case "02n":
      return <WiNightCloudy size={180} color="#000" />;
    case "03d":
      return <WiCloud size={180} color="#000" />;
    case "03n":
      return <WiCloud size={180} color="#000" />;
    case "04d":
      return <WiCloudy size={180} color="#000" />;
    case "04n":
      return <WiCloudy size={180} color="#000" />;
    case "09d":
      return <WiRain size={180} color="#000" />;
    case "09n":
      return <WiRain size={180} color="#000" />;
    case "10d":
      return <WiDayRain size={180} color="#000" />;
    case "10n":
      return <WiNightRain size={180} color="#000" />;
    case "11d":
      return <WiThunderstorm size={180} color="#000" />;
    case "11n":
      return <WiThunderstorm size={180} color="#000" />;
    case "13d":
      return <WiSnowflakeCold size={180} color="#000" />;
    case "13n":
      return <WiSnowflakeCold size={180} color="#000" />;
    case "50d":
      return <WiDayFog size={180} color="#000" />;
    case "50n":
      return <WiNightFog size={180} color="#000" />;
    default:
      return <span></span>;
  }
}
