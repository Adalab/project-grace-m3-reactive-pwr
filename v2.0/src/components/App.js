import React from "react";
import "../stylesheets/App.scss";
import Headerjs from "./Header";
import Footer from "./Footer";
import IndexMain from "./IndexMain";
import Design from "./Design";

class App extends React.Component {
  render() {
    return (
      <div>
        <IndexMain />
        <Footer />

        <Headerjs />
        <Design />
      </div>
    );
  }
}

export default App;
