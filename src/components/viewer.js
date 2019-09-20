import React from "react";
import ViewerImg from "./ViewerImg";
import ViewerIcon from "./ViewerIcon";

class Viewer extends React.Component {
  render() {
    let palette = this.props.data.palette;
    let className;
    const changeClass = () => {
      if (palette === "1") {
        className = "blue";
      } else if (palette === "2") {
        className = "red";
      } else if (palette === "3") {
        className = "yell";
      } else if (palette === "4") {
        className = "gre";
      } else if (palette === "5") {
        className = "pur";
      }
      return className;
    };

    const resetForm = this.props.resetForm;
    return (
      <section className={`visualization ${changeClass()}`}>
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
              <ViewerImg data={this.props.data} />
              <ViewerIcon data={this.props.data} />
            </div>
          </div>
        </form>
      </section>
    );
  }
}
export default Viewer;
