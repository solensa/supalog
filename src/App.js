import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import QBank1 from "./components/QBank1";
import QBank2 from "./components/QBank2";
import QBank3 from "./components/QBank3";
import QBank4 from "./components/QBank4";
import QBank5 from "./components/QBank5";
import QBank6 from "./components/QBank6";
import QBank7 from "./components/QBank7";
import QBank8 from "./components/QBank8";
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
          <Route path="/lmgt">
            <QBank1 />
          </Route>
          <Route path="/qlty">
            <QBank2 />
          </Route>
          <Route path="/pln">
            <QBank3 />
          </Route>
          <Route path="/engd">
            <QBank4 />
          </Route>
          <Route path="/hsm">
            <QBank5 />
          </Route>
          <Route path="/sus">
            <QBank6 />
          </Route>
          <Route path="/dig">
            <QBank7 />
          </Route>
          <Route path="/buu">
            <QBank8 />
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
