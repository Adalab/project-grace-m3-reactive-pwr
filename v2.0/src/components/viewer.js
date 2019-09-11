import React from "react";

class Viewer extends React.Component {
  render() {
    const resetForm = this.props.resetForm;
    return (
      <section className="visualization">
        <form className="blue js-visualizationReset">
          <div className="visualization__wrap">
            <button
              className="visualization__reset home--subtitle js-reset"
              type="reset"
              onClick={resetForm}
            >
              <i className="visualization__reset__icon far fa-trash-alt"></i>
              Reset
            </button>
            <div className="visualization__user">
              <div className="text__wrap text--border">
                <h3 className="visualization__user__name name--color js-visualization-data">
                  {this.props.data.name === ""
                    ? "Nombre Apellido"
                    : this.props.data.name}
                </h3>
                <p className="visualization__user__job js-visualization-data">
                  {this.props.data.job === ""
                    ? "Front-end developer"
                    : this.props.data.job}
                </p>
              </div>
              <div className="visualization__user__img"></div>
              <ul className="visualization__user__icon-list">
                <li className="icon-wrap border--color js-phone">
                  <i className="icon fa fa-mobile-alt"></i>
                </li>
                <li className="icon-wrap border--color js-email">
                  <i className="icon fa fa-envelope"></i>
                </li>
                <li className="icon-wrap border--color js-linkedin">
                  <i className="icon fab fa-linkedin-in"></i>
                </li>
                <li className="icon-wrap border--color js-github">
                  <i className="icon fab fa-github-alt"></i>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
export default Viewer;
