import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <header>
      <nav className="header">
        <img src={logo} alt="logo" className="app-logo" />
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
