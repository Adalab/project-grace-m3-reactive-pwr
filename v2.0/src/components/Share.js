import React from "react";
import "../stylesheets/share.scss";

class Share extends React.Component {
  render() {
    return (
      <section className="share js-collapse">
        <div className="share__title">
          <h2 className="share__title__text home--title">
            <i className="share__title__icon fas fa-share-alt"></i>Comparte
          </h2>
          <button className="share__title__btn js-btn-collapse">
            <i className="fa fa-chevron-up"></i>
          </button>
        </div>
        <div className="share__createcard__btn collapse">
          <button className="share__createcard__btn__title js-saveLocalStorage">
            Crear Tarjeta
            <i className="share__createcard__btn__icon fas fa-address-card"></i>
          </button>
        </div>
        <div className="share__twitter js-hidden">
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
      </section>
    );
  }
}

export default Share;
