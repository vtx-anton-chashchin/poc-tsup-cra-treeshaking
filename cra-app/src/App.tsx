import logo from "./logo.svg";
import "./App.css";

import { Button, Time } from "tsup-lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Tsup lib button</Button>
        <Time date={new Date()} />
      </header>
    </div>
  );
}

export default App;
