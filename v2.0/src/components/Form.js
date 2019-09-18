import React from "react";
import "../stylesheets/form.scss";
import FileImage from "./FileImage";

class Form extends React.Component {
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
    const actionToForm = this.props.actionToForm;
    return (
      <section className={`data js-collapse ${this.state.class}`}>
        <div className="data__title">
          <h2 className="data__title__text home--title">
            <i className="data__title__text__icon far fa-keyboard"></i>Rellena
          </h2>
          <button
            className="data__title__btn js-btn-collapse"
            onClick={this.putHiddenClass}
          >
            <i className="fa fa-chevron-up"></i>
          </button>
        </div>
        <div className="data__form--wrapper collapse">
          <div action="" className="data__form" method="POST">
            <label htmlFor="name" className="data__form-label">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              className="data__form-item js-form_name"
              placeholder="Ej: Sally Jill"
              value={this.props.data.name}
              onChange={actionToForm}
            />
            <label htmlFor="job" className="data__form-label">
              Puesto
            </label>
            <input
              type="text"
              name="job"
              className="data__form-item js-form__job"
              placeholder="Ej: Front-end unicorn"
              value={this.props.data.job}
              onChange={actionToForm}
            />
            <FileImage
              data={this.props.data}
              handleSubmit={this.props.handleSubmit}
              fileInput={this.props.fileInput}
            />
            <label htmlFor="email" className="data__form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="data__form-item js-link_email"
              placeholder="Ej: adalab@gmail.com"
              value={this.props.data.email}
              onChange={actionToForm}
            />
            <label htmlFor="job" className="data__form-label">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              className="data__form-item js-link_phone"
              placeholder="Ej: 632-54-12-36"
              value={this.props.data.phone}
              onChange={actionToForm}
            />
            <label htmlFor="linkedin" className="data__form-label">
              LinkedIn
            </label>
            <input
              type="text"
              name="linkedin"
              className="data__form-item js-link_linkedin"
              placeholder="Ej: sally.hill"
              value={this.props.data.linkedin}
              onChange={actionToForm}
            />
            <label htmlFor="github" className="data__form-label">
              GitHub
            </label>
            <span className="data__form-before">@</span>
            <input
              type="text"
              name="github"
              className="data__form-item js-link_github"
              placeholder="Ej: sallyHill"
              value={this.props.data.github}
              onChange={actionToForm}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
