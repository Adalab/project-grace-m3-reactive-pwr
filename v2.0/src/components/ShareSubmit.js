import React from "react";
import Twitter from "./Twitter";
import "../stylesheets/share.scss";

class Submit extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "hidden"
    };

    this.handleHiddenClass = this.handleHiddenClass.bind(this);
  }

  handleHiddenClass() {
    this.setState({
      class: ""
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="share__createcard__btn collapse">
          <button
            className="share__createcard__btn__title js-saveLocalStorage"
            onClick={this.handleHiddenClass}
          >
            Crear Tarjeta
            <i className="share__createcard__btn__icon fas fa-address-card"></i>
          </button>
        </div>
        <Twitter twitterClass={this.state.class} />
      </React.Fragment>
    );
  }
}

export default Submit;
