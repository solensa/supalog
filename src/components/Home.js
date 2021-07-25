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
          Assume you are the leader in each of the following twelve situations.
          Read each item carefully and think about what you would do in each.
          Select the option you think would most closely describe your behaviour
          in the situation presented.
        </p>
        <p>
          For each situation, think of yourself in your leadership role at work
          / on site. For example, suppose an item mentions team members, then
          think about your staff as your team members
        </p>
        <p>
          <strong>Do not change</strong> your situation from one item to
          another. You can complete the questionnaire several times, if you wish
          to examine your leadership behaviour in as many different settings or
          situations as you think helpful.
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
