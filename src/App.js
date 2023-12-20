import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="İstanbul" />
      <footer>
        coded by 👩🏻‍💻{" "}
        <a href="https://adayeis.com/" target="_blank" rel="noreferrer">
          {" "}
          Ada Yeis
        </a>{" "}
        | open-sourced on{" "}
        <a
          href="https://github.com/adayeis/weather-app-react-project"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
