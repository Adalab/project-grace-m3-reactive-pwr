import React from "react";
import logo from "../images/logo.svg";
import "../stylesheets/indexMain.scss";
import { Link } from "react-router-dom";

class IndexMain extends React.Component {
  render() {
    return (
      <main className="layout-page">
        <img src={logo} alt="Bienvenid@s a Aweseme Profile-Cards" className="layout-page__logo" />
        <div className="layout-page__description">
          <h1 className="layout-page__description__title">Crea tu tarjeta de visita</h1>
          <p className="layout-page__description__text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
        </div>
        <nav className="layout-page__menu">
          <ul className="layout-page__menu__list">
            <li className="layout-page__menu__list__itens">
              <i className="far fa-object-ungroup"></i>
              <p className="layout-page__menu__list__description">Diseña</p>
            </li>
            <li className="layout-page__menu__list__itens">
              <i className="far fa-keyboard"></i>
              <p className="layout-page__menu__list__description">Rellena</p>
            </li>
            <li className="layout-page__menu__list__itens">
              <i className="fas fa-share-alt"></i>
              <p className="layout-page__menu__list__description">Comparte</p>
            </li>
          </ul>
        </nav>
        <Link to="/home">
          <button className="layout-page__button" type="button">
            COMENZAR
          </button>
        </Link>
      </main>
    );
  }
}

export default IndexMain;
