import React from "react";

class ViewerIcon extends React.Component {
  constructor() {
    super();

    this.state = {
      email: null
    };
  }

  render() {
    let email = this.props.data.email;

    console.log(email);

    return (
      <ul className="visualization__user__icon-list">
        <li className="icon-wrap border--color js-phone">
          <i className="icon fa fa-mobile-alt"></i>
        </li>
        <li className="icon-wrap border--color js-email">
          {email === "" ? (
            <i className="icon fa fa-envelope"> </i>
          ) : (
            <a href={`mailto:  ${email}`} target="_blank">
              <i className="icon fa fa-envelope js-envelope"></i>
            </a>
          )}
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
