import React from "react";
import "../stylesheets/colors.scss";

class Colors extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.colorClass} color-pallet`}
        id={this.props.id}
        data-value="@@inputvalue"
      >
        <input type="radio" name="radio" className="color-btn js-palett-btn" />
        <div className="color-pallet__colors ">
          <div className="color-pallet__colors__box box-1"></div>
          <div className="color-pallet__colors__box box-2"></div>
          <div className="color-pallet__colors__box box-3"></div>
        </div>
      </div>
    );
  }
}

export default Colors;
