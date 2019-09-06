import React from "react";
import "../stylesheets/App.scss";
import Headerjs from "./Header";
import Footer from "./Footer";
import IndexMain from "./IndexMain";

class App extends React.Component {
  render() {
    return (
      <div>
        <IndexMain />
        <Footer />
        <Headerjs />
      </div>
    );
  }
}

export default App;
