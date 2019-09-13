import React from "react";
import Twitter from "./Twitter";
import "../stylesheets/share.scss";

class Submit extends React.Component {
  render() {
    return (
      <div>
        <div className="share__createcard__btn collapse">
          <button
            className="share__createcard__btn__title js-saveLocalStorage"
            onClick={this.handleHiddenClass}
          >
            Crear Tarjeta
            <i className="share__createcard__btn__icon fas fa-address-card"></i>
          </button>
        </div>
        <Twitter />
      </div>
    );
  }
}

export default Submit;
