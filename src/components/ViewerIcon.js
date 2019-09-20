import React from "react";

class ViewerIcon extends React.Component {
  render() {
    let email = this.props.data.email;
    let linkedin = this.props.data.linkedin;
    let github = this.props.data.github;
    let phone = this.props.data.phone;

    return (
      <ul className="visualization__user__icon-list">
        <li className="icon-wrap border--color js-phone">
          {phone === "" ? (
            <i className="icon fa fa-mobile-alt"> </i>
          ) : (
            <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
              <i
                style={{ opacity: "1" }}
                className="icon fa fa-mobile-alt js-envelope"
              ></i>
            </a>
          )}
        </li>
        <li className="icon-wrap border--color js-email">
          {email === "" ? (
            <i className="icon fa fa-envelope"> </i>
          ) : (
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                style={{ opacity: "1" }}
                className="icon fa fa-envelope js-envelope"
              ></i>
            </a>
          )}
        </li>
        <li className="icon-wrap border--color js-linkedin">
          {linkedin === "" ? (
            <i className="icon fab fa-linkedin-in"> </i>
          ) : (
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                style={{ opacity: "1" }}
                className="icon fab fa-linkedin-in js-envelope"
              ></i>
            </a>
          )}
        </li>
        <li className="icon-wrap border--color js-github">
          {github === "" ? (
            <i className="icon fab fa-github-alt"> </i>
          ) : (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                style={{ opacity: "1" }}
                className="icon fab fa-github-alt js-envelope"
              ></i>
            </a>
          )}
        </li>
      </ul>
    );
  }
}

export default ViewerIcon;
