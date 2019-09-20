import React from "react";
import logo from "../images/logo.svg";
import "../stylesheets/header.scss";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header__container">
          <Link to="/">
            <img
              className="header__container__image"
              src={logo}
              alt="Bienvenido a Awesome profile-cards"
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
