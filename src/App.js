import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import QBank1 from "./components/QBank1";
import QBank5 from "./components/QBank5";
import Home from "./components/Home";
import Results from "./components/Results";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="wideClear" id="container">
      <div className="quiz" id="main-content">
        {/* <div>
        <Link to="/">Home</Link>
        <Link to="/hsm">HSM</Link>
        <Link to="/contact">Contact</Link>
      </div> */}
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hsm">
            <QBank5 />
          </Route>
          <Route path="/lmgt">
            <QBank1 />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
