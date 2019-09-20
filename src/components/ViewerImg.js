import React from "react";
import foto from "../images/blank-profile.png";

class ViewerImg extends React.Component {
  render() {
    let photo = this.props.data.photo === "" ? foto : this.props.data.photo;
    return (
      <div
        className="visualization__user__img"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
    );
  }
}

export default ViewerImg;
