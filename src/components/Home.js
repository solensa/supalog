import "../App.css";
import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/hsm");
  };

  return (
    <div id="appBox" className="panel wideClear active">
      <div className="quizHeader">
        <h1>The Experience Log (pilot)</h1>
        <p>
          Welcome to the Supervisor Experience Log - a new digitised version of
          the experience log. You will be asked questions from the competency
          framework to get an initial score. This exercise will then be repeated
          at the end of the supervisor programme to show you how far you've
          come!
        </p>
        <p>
          <strong>
            Once you have your results please press VALIDATE to save them via
            email!
          </strong>
        </p>
        <p>
          This will send the unique URL to an email of your choice. Failing to
          do so will result in your answers being lost. This works on computer
          or any mobile device.
        </p>
      </div>
      <button
        id="send1"
        className="hvr-bounce-to-top bounceBtn"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  );
};

export default Home;

// http://localhost:3000/supalog#/results?qb5=9Szgu0nj86vc7
// http://localhost:3000/supalog#/hsm?VALIDATE=5&qb5=9Szgu0nj86vc7    1234
// http://localhost:3000/supalog#/hsm?qb5=9Szgu0nj86vc7&qa5=1lqNNDPoBxZNS4&FINALISE=5     4321
