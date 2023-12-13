export default function CurrentDate(props) {
  let now = new Date();
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
  let days = [
    "Monday",
    "Thursday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let year = now.getFullYear();
  let dayName = days[now.getDay()];
  let month = months[now.getMonth()];
  let dayNumber = now.getDate();
  let hour = now.getHours();
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  return (
    <header>
      <ul>
        <li>
          {dayName}, {dayNumber} {month} {year}
        </li>
        <li>
          {hour}:{min}
        </li>
      </ul>
    </header>
  );
}
