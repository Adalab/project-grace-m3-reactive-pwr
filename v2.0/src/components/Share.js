import React from "react";
import Submit from "./ShareSubmit";
import "../stylesheets/share.scss";

class Share extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "hidden"
    };
    this.putHiddenClass = this.putHiddenClass.bind(this);
  }
  putHiddenClass() {
    let nextState;
    this.setState(prevState => {
      if (prevState.class === "hidden") {
        nextState = "";
      } else {
        nextState = "hidden";
      }
      return {
        class: nextState
      };
    });
  }

  render() {
    return (
      <section className={`share js-collapse ${this.state.class}`}>
        <div className="share__title">
          <h2 className="share__title__text home--title">
            <i className="share__title__icon fas fa-share-alt"></i>Comparte
          </h2>
          <button
            className="share__title__btn js-btn-collapse"
            onClick={this.putHiddenClass}
          >
            <i className="fa fa-chevron-up"></i>
          </button>
        </div>
        <Submit />
      </section>
    );
  }
}

export default Share;
