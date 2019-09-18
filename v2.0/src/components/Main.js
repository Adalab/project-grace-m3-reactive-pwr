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

class Main extends React.Component {
  constructor() {
    super();
    const savedData = getDataFromLocalStorage();
    this.state = {
      palette: !savedData ? "" : savedData.palette,
      name: !savedData ? "" : savedData.name,
      job: !savedData ? "" : savedData.job,
      phone: !savedData ? "" : savedData.phone,
      email: !savedData ? "" : savedData.email,
      linkedin: !savedData ? "" : savedData.linkedin,
      github: !savedData ? "" : savedData.github,
      photo: !savedData ? "" : savedData.photo
    };
    this.updateForm = this.updateForm.bind(this);
    this.saveDataToLocalStorage = this.saveDataToLocalStorage.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.fr = new FileReader();
    this.getImage = this.getImage.bind(this);
  }

  handleSubmit(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.setState({
      photo: image
    });
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
      palette: "1",
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

        <form className="js-data__input responsive">
          <Design data={this.state} actionToForm={this.updateForm} />
          <Form
            data={this.state}
            actionToForm={this.updateForm}
            handleSubmit={this.handleSubmit}
            fileInput={this.fileInput}
          />
          <Share />
        </form>
      </main>
    );
  }
}

export default Main;
