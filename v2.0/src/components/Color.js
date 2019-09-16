import React from "react";
import "../stylesheets/colors.scss";

class Colors extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.colorClass} color-pallet`}
        id={this.props.id}
        data-value={this.props.inputvalue}
      >
        <input
          type="radio"
          name="palette"
          id={`palette${this.props.inputvalue}`}
          className="color-btn js-palett-btn"
          value={this.props.inputvalue}
          onClick={this.props.actionToForm}
        />
        <label
          htmlFor={`palette${this.props.inputvalue}`}
          className="color-pallet__colors "
        >
          <div className="color-pallet__colors__box box-1"></div>
          <div className="color-pallet__colors__box box-2"></div>
          <div className="color-pallet__colors__box box-3"></div>
        </label>
      </div>
    );
  }
}

export default Colors;
