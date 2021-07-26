import React, { useState, useEffect, createRef } from "react";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import log from "../images/log.png";
import { convertToBase62 } from "./Utility.js";
import { qb5QuesArr } from "./Data.js";
import { returnUrlData, breakUrlIntoObj, getKeyByValue } from "./Utility.js";

const QBank5 = () => {
  const [qb5RefsArr, setQb5Refs] = useState([]);
  const [results5, setResults5] = useState([]);
  const [isBeingUpdated, setIsBeingUpdated] = useState(false);
  const [qBankBeingValidated, setQBankBeingValidated] = useState(-1);
  // for (var i = 0; i < qb5QuesArr.length; i++) {
  //   results5.push(-1);
  // }

  useEffect(() => {
    // add or remove refs
    setQb5Refs((qb5RefsArr) =>
      Array(qb5QuesArr.length)
        .fill()
        .map((_, i) => qb5RefsArr[i] || createRef())
    );
  }, [qb5QuesArr.length]);

  useEffect(() => {
    if (window.location.hash.includes("VALIDATE")) {
      // results being validated
      let paramsObj = breakUrlIntoObj();
      setQBankBeingValidated(paramsObj["VALIDATE"]);
    } else if (window.location.hash.includes("UPDATE")) {
      setIsBeingUpdated(true);
    }
    setResults5(returnUrlData(5));
  }, []);

  // useEffect(() => {
  //   console.log(results5);
  // }, [results5]);

  const updateArray = (index, value) => {
    let results = results5;
    results[index] = value;
    setResults5(results);
    // console.log(results5);
    if (index < qb5RefsArr.length - 1) {
      qb5RefsArr[index + 1].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const history = useHistory();
  const handleClick = () => {
    let x = convertToBase62(results5.join(""));
    if (qBankBeingValidated > 0) {
      let paramsObj = breakUrlIntoObj();
      paramsObj["qa" + qBankBeingValidated] = x;
      paramsObj["FINALISE"] = qBankBeingValidated;
      delete paramsObj["VALIDATE"];
      console.log(paramsObj);
    } else {
      history.push({
        pathname: "/results",
        search: "?qb5=" + x,
      });
    }
  };

  return (
    <div id="appBox" className="panel wideClear active">
      <div className="quizHeader">
        <h1 className="QBank">Safety</h1>
      </div>
      {qb5RefsArr.map((el, i) =>
        i < 17 ? (
          <Question
            passRef={qb5RefsArr[i]}
            id={"b5q" + (parseInt(i) + 1)}
            str={qb5QuesArr[i]}
            updateArray={updateArray}
            key={"b5q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results5[i] + 1 : null}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} />
        <h1 className="QBank">Occupational health</h1>
      </div>
      {qb5RefsArr.map((el, i) =>
        i >= 17 && i < 27 ? (
          <Question
            passRef={qb5RefsArr[i]}
            id={"b5q" + (parseInt(i) + 1)}
            str={qb5QuesArr[i]}
            updateArray={updateArray}
            key={"b5q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results5[i] + 1 : null}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} />
        <h1 className="QBank">H&S Risk Assessment</h1>
      </div>

      {qb5RefsArr.map((el, i) =>
        i >= 27 && i < 35 ? (
          <Question
            passRef={qb5RefsArr[i]}
            id={"b5q" + (parseInt(i) + 1)}
            str={qb5QuesArr[i]}
            updateArray={updateArray}
            key={"b5q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results5[i] + 1 : null}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} />
        <h1 className="QBank">Mental Health & Wellbeing</h1>
      </div>

      {qb5RefsArr.map((el, i) =>
        i >= 35 && i < 39 ? (
          <Question
            passRef={qb5RefsArr[i]}
            id={"b5q" + (parseInt(i) + 1)}
            str={qb5QuesArr[i]}
            updateArray={updateArray}
            key={"b5q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results5[i] + 1 : null}
          />
        ) : null
      )}
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
