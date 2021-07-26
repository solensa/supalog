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
        <h1>Supervisor Experience Log</h1>
        <p>
          Welcome to the Supervisor Experience Log - a new digitised version
          that is being developed.
        </p>
        <p>
          You will be asked to answer questions from to the Supervisor
          competency framework which will give you a score. This exercise will
          then be repeated at the end of the supervisor programme for a
          comparison.
        </p>
        <p>
          <strong>Remember to save your results!</strong>
        </p>
        <p>
          Press the save button on the results page. This will send the unique
          URL to an email of your choice. Failing to do so will result in your
          answers being lost.
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
