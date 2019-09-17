import React from "react";
import "../stylesheets/share.scss";

class Twitter extends React.Component {
  render() {
    return (
      <div className={`share__twitter ${this.props.twitterClass}`}>
        <h3 className="share__twitter__title">La tarjeta ha sido creada:</h3>
        <small className="share__twitter__link js-response">
          https://awesome-profile-card.com?id=A456DF0001
        </small>
        <button className="share__twitter__btn js-twitter-url">
          <a href="twitter.com" className="sharetwitter">
            Compartir en twitter
            <i className="share__twitter__icon fab fa-twitter"></i>
          </a>
        </button>
      </div>
    );
  }
}

export default Twitter;
