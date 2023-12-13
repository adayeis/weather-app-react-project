import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>
        <form>
          <input tyoe="search" placeholder="Search a city..."></input>
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        <h2>City name 📍</h2>
      </div>
      <div>
        <header>
          <ul>
            <li>21 September, Thursday</li>
            <li>9:41 am</li>
          </ul>
        </header>
        <div className="temp-container">
          <ul>
            <li className="current-temp">
              20<span>°C</span>{" "}
            </li>
            <li>10° / 22°</li>
            <li>Mostly sunny</li>
          </ul>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="description icon"
          />
        </div>
      </div>
    </div>
  );
}
