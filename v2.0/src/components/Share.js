import React from "react";
import ShareSubmit from "./ShareSubmit";
import "../stylesheets/share.scss";

const jsonLocalStor = localStorage.getItem("data");
class Share extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "collapsable"
    };
    this.putHiddenClass = this.putHiddenClass.bind(this);
  }
  putHiddenClass() {
    let nextState;
    this.setState(prevState => {
      if (prevState.class === "collapsable") {
        nextState = "";
      } else {
        nextState = "collapsable";
      }
      return {
        class: nextState
      };
    });
  }

  render() {
    console.log(jsonLocalStor);
    return (
      <section className={`share js-collapse ${this.state.class}`}>
        <div className="share__title" onClick={this.putHiddenClass}>
          <h2 className="share__title__text home--title">
            <i className="share__title__icon fas fa-share-alt"></i>Comparte
          </h2>
          <button className="share__title__btn js-btn-collapse">
            <i className="fa fa-chevron-up"></i>
          </button>
        </div>
        <ShareSubmit />
      </section>
    );
  }
}

export default Share;
