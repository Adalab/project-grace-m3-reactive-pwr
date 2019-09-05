import React from "react";
import logoDebugger from "../images/logo-debugger.png";
import logoAdalab from "../images/logo-adalab-80px.png";

import "../stylesheets/footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_container">
          <p>Copyright 2018 Awesome profile-cards | by </p>
          <img className="footer_container_logo" src={logoDebugger} alt="logo del equipo Debugger" />
        </div>
        <div>
          <a href="index.html#index_page" className="footer_anchor">
            {" "}
            <img src={logoAdalab} alt="Logo de Adalab. Volver al home." className="footer_logo" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
