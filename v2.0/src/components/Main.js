import React from "react";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Viewer from "./Viewer";
import "../stylesheets/home.scss";
import "../stylesheets/main.scss";

function getDataFromLocalStorage() {
  let object = localStorage.getItem("data");
  return JSON.parse(object);
}
const savedData = getDataFromLocalStorage();

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      palette: 1,
      name: !savedData ? "" : savedData.name,
      job: !savedData ? "" : savedData.job,
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: ""
    };
    this.updateForm = this.updateForm.bind(this);
    this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  updateForm(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  saveDataToLocalStorage() {
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(this.state));
  }

  resetForm() {
    this.setState({
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: ""
    });
  }

  render() {
    this.saveDataToLocalStorage();
    return (
      <main className="main">
        <Viewer data={this.state} resetForm={this.resetForm} />
        <section className="js-data__input responsive">
          <Design actionToForm={this.updateForm} />
          <Form actionToForm={this.updateForm} />
          <Share />
        </section>
      </main>
    );
  }
}

export default Main;
