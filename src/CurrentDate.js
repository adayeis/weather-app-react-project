export default function CurrentDate(props) {
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
  let dayName = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let dayNumber = props.date.getDate();
  let hour = props.date.getHours();
  let min = props.date.getMinutes();
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
          {dayNumber} {month}, {dayName}
        </li>
        <li>
          {hour}:{min}
        </li>
      </ul>
    </header>
  );
}
