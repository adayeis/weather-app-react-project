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
  let iconProps = {
    size: `${props.size}`,
    color: "#000",
  };
  switch (props.code) {
    case "01d":
      return <WiDaySunny size={iconProps.size} color={iconProps.color} />;
    case "01n":
      return <WiMoonAltNew size={iconProps.size} color={iconProps.color} />;
    case "02d":
      return <WiDayCloudy size={iconProps.size} color={iconProps.color} />;
    case "02n":
      return <WiNightCloudy size={iconProps.size} color={iconProps.color} />;
    case "03d":
      return <WiCloud size={iconProps.size} color={iconProps.color} />;
    case "03n":
      return <WiCloud size={iconProps.size} color={iconProps.color} />;
    case "04d":
      return <WiCloudy size={iconProps.size} color={iconProps.color} />;
    case "04n":
      return <WiCloudy size={iconProps.size} color={iconProps.color} />;
    case "09d":
      return <WiRain size={iconProps.size} color={iconProps.color} />;
    case "09n":
      return <WiRain size={iconProps.size} color={iconProps.color} />;
    case "10d":
      return <WiDayRain size={iconProps.size} color={iconProps.color} />;
    case "10n":
      return <WiNightRain size={iconProps.size} color={iconProps.color} />;
    case "11d":
      return <WiThunderstorm size={iconProps.size} color={iconProps.color} />;
    case "11n":
      return <WiThunderstorm size={iconProps.size} color={iconProps.color} />;
    case "13d":
      return <WiSnowflakeCold size={iconProps.size} color={iconProps.color} />;
    case "13n":
      return <WiSnowflakeCold size={iconProps.size} color={iconProps.color} />;
    case "50d":
      return <WiDayFog size={iconProps.size} color={iconProps.color} />;
    case "50n":
      return <WiNightFog size={iconProps.size} color={iconProps.color} />;
    default:
      return <span></span>;
  }
}
