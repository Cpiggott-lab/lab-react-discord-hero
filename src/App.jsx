import background from "./assets/discord-background.png";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav-inner">
          <img src={logo} alt="discord logo" />
          <img src={menu} alt="hamburger menu" />
        </div>
      </nav>

      <div className="container">
        <div className="main-content">
          <div className="hero">
            <h1>IMAGINE A PLACE...</h1>
            <p>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <div className="buttons">
              <button className="white-button">Download for Mac</button>
              <button className="black-button">
                Open Discord in your browser
              </button>
            </div>
          </div>

          <img
            src={background}
            alt="Monsters on a couch"
            className="background-image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
