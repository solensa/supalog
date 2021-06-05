import "./App.css";
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import QBank5 from "./components/QBank5";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="wideClear" id="container">
      <div className="quiz" id="main-content">
        {/* <div>
        <Link to="/">Home</Link>
        <Link to="/hsm">HSM</Link>
        <Link to="/contact">Contact</Link>
      </div> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hsm">
            <QBank5 />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
