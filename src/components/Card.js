import "../styles/Card.css";
import logo from "../logo.svg";

const Card = () => {
  return (
    <div className="card-container">
      <img alt="logo" className="app-logo" src={logo} />
      <div>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
