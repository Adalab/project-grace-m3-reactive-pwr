import React from "react";
import "../stylesheets/App.scss";
import "../stylesheets/home.scss";
import "../stylesheets/typography.scss";
import Header from "./Header";
import Footer from "./Footer";
import IndexMain from "./IndexMain";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <IndexMain />
        <Footer />
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
