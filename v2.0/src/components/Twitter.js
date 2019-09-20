import React from "react";
import "../stylesheets/share.scss";

class Twitter extends React.Component {
  render() {
    return (
      <div className={`share__twitter ${this.props.twitterClass}`}>
        <h3 className="share__twitter__title">La tarjeta ha sido creada:</h3>
        <a
          href={`${this.props.twitterData}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share__twitter__link js-response"
        >
          {this.props.twitterData}
        </a>
        <button className="share__twitter__btn js-twitter-url">
          <a
            href={`https://twitter.com/intent/tweet?text=${this.props.twitterData}`}
            className="sharetwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compartir en twitter
            <i className="share__twitter__icon fab fa-twitter"></i>
          </a>
        </button>
      </div>
    );
  }
}

export default Twitter;
