import React from "react";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import log from "../images/log.png";

const QBank5 = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/results");
  };

  return (
    <div id="appBox" className="panel wideClear active">
      <Question str="hello" />
      <img className="supalogLogo" src={log} />
      <Question str="hello2" />
      <button
        id="send1"
        className="hvr-bounce-to-top bounceBtn"
        onClick={handleClick}
      >
        Finish
      </button>
    </div>
  );
};

export default QBank5;
