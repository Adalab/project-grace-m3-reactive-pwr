import React from "react";
import "../stylesheets/App.scss";
import Headerjs from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Headerjs />
        <Footer />
      </div>
    );
  }
}

export default App;
