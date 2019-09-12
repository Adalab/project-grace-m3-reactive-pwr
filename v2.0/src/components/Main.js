import React from "react";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Viewer from "./viewer";
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
    this.updateStateName = this.updateStateName.bind(this);
    this.updateStateJob = this.updateStateJob.bind(this);
    this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
    this.updateFromLocalStorage = this.updateFromLocalStorage.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  updateFromLocalStorage() {
    this.setState({
      palette: 1,
      name: savedData.name,
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: ""
    });
  }

  updateStateName(ev) {
    let inputName = ev.target.value;
    this.setState({
      name: inputName
    });
  }
  updateStateJob(ev) {
    let inputJob = ev.target.value;
    this.setState({
      job: inputJob
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
          <Design />
          <Form actionToName={this.updateStateName} actionToJob={this.updateStateJob} />
          <Share />
        </section>
      </main>
    );
  }
}

export default Main;
