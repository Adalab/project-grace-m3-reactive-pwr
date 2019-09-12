import React from "react";
import logo from "../images/logo.svg";
import "../stylesheets/header.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header__container">
          <img className="header__container__image" src={logo} alt="Bienvenido a Awesome profile-cards" />
        </div>
      </header>
    );
  }
}

export default Header;
