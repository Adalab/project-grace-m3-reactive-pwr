import React from "react";
import logo from "../images/logo.svg";
import "../stylesheets/header.scss";

function App() {
  return (
    <header>
      <div className="header__container">
        <img
          className="header__container__image"
          src={logo}
          alt="Bienvenido a Awesome profile-cards"
        />
      </div>
    </header>
  );
}

export default App;
