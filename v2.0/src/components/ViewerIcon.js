import React from "react";

class ViewerIcon extends React.Component {
  render() {
    return (
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
    );
  }
}

export default ViewerIcon;
