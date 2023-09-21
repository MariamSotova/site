import logo from "./img/logo.svg";

export const Main = () => {
  return (
    <div className="main">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="header-text">Portfolio</h2>
        <a
          className="App-link"
          href="https://github.com/MariamSotova"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
