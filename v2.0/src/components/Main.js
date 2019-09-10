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
  }
  render() {
    return (
      <main className="main">
        <Viewer />
        <section className="js-data__input responsive">
          <Design />
          <Form />
          <Share />
        </section>
      </main>
    );
  }
}

export default Main;
