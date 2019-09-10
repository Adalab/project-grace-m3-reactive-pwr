import React from "react";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Viewer from "./viewer";
import "../stylesheets/home.scss";
import "../stylesheets/main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: ""
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(ev) {
    console.log(this.state.name);
    let inputName = ev.target.value;
    this.setState({
      name: inputName
    });
    console.log(this.state);
  }

  render() {
    return (
      <main className="main">
        <Viewer data={this.state} />
        <section className="js-data__input responsive">
          <Design />
          <Form actionToForm={this.updateState} />
          <Share />
        </section>
      </main>
    );
  }
}

export default Main;
