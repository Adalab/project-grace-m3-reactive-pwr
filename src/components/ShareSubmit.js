import React from "react";
import Twitter from "./Twitter";
import "../stylesheets/share.scss";

class ShareSubmit extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "hidden",
      twitterData: ""
    };

    this.handleHiddenClass = this.handleHiddenClass.bind(this);
    this.createCard = this.createCard.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  handleHiddenClass() {
    this.setState({
      class: ""
    });
  }

  createCard(ev) {
    ev.preventDefault();
    this.handleHiddenClass();
    this.sendRequest(this.props.savedData);
  }

  sendRequest(json) {
    fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(json)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          twitterData:
            data.success === true
              ? data.cardURL
              : "ERROR: rellena todos los datos"
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="share__createcard__btn collapse">
          <button
            className="share__createcard__btn__title js-saveLocalStorage"
            onClick={this.createCard}
          >
            Crear Tarjeta
            <i className="share__createcard__btn__icon fas fa-address-card"></i>
          </button>
        </div>
        <Twitter
          twitterClass={this.state.class}
          twitterData={this.state.twitterData}
        />
      </React.Fragment>
    );
  }
}

export default ShareSubmit;
