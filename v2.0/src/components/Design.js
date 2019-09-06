import React from "react";
import Colors from "./Color";
import "../stylesheets/design.scss";

class Design extends React.Component {
  render() {
    return (
      <section className="design  js-collapse">
        <div className="design__title">
          <h2 className="design__title__text home--title">
            <i className="design__title__icon far fa-object-ungroup"></i>Diseña
          </h2>
          <button className="design__title__btn js-btn-collapse">
            <i className="fa fa-chevron-up icon"></i>
          </button>
        </div>
        <div className="design__colors collapse">
          <p className="design__colors__text home--subtitle">Colores</p>
          <div className="design__colors__choose js-palett-choose">
            <Colors colorClass="blue" id="blue" inputvalue="1" />
            <Colors colorClass="red" id="red" inputvalue="2" />
            <Colors colorClass="yell" id="yell" inputvalue="3" />
            <Colors colorClass="gre" id="gre" inputvalue="4" />
            <Colors colorClass="pur" id="pur" inputvalue="5" />
          </div>
        </div>
      </section>
    );
  }
}

export default Design;
