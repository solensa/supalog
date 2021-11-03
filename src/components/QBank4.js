import React, { useState, useEffect, createRef } from "react";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import log from "../images/log.png";
import { qb4QuesArr } from "./Data.js";
import {
  convertToBase4,
  returnUrlDataForBank,
  breakUrlIntoObj,
  padWithZeroes,
  convertStrToArr,
  handleQBankCompletionClick,
} from "./Utility.js";

const QBank4 = () => {
  const [qb4RefsArr, setQb4Refs] = useState([]);
  const [results4, setResults4] = useState([]);
  const [isBeingUpdated, setIsBeingUpdated] = useState(false);
  const [qBankBeingValidated, setQBankBeingValidated] = useState(-1);
  const [qBankBeingFinalised, setQBankBeingFinalised] = useState(-1);
  const [lnMgrTickArr, setLnMgrTickArr] = useState([]);
  const [spvsrTickArr, setSpvsrTickArr] = useState([]);

  // for (var i = 0; i < qb4QuesArr.length; i++) {
  //   results4.push(-1);
  // }
  // console.log(window.location.origin + window.location.pathname);
  useEffect(() => {
    // add or remove refs
    setQb4Refs((qb4RefsArr) =>
      Array(qb4QuesArr.length)
        .fill()
        .map((_, i) => qb4RefsArr[i] || createRef())
    );
  }, []);

  useEffect(() => {
    for (var i = 0; i < qb4QuesArr.length; i++) {
      results4.push(-1);
    }

    if (window.location.hash.includes("VALIDATE")) {
      // results being validated
      let paramsObj = breakUrlIntoObj();
      setQBankBeingValidated(paramsObj["VALIDATE"]);
      setResults4(returnUrlDataForBank(4));
    } else if (window.location.hash.includes("UPDATE")) {
      setIsBeingUpdated(true);
      setResults4(returnUrlDataForBank(4));
    } else if (window.location.hash.includes("FINALISE")) {
      console.log("FINALISE");
      // results being finalised between LM & Supervisor
      let paramsObj = breakUrlIntoObj();
      let dataNum = paramsObj["FINALISE"];

      let qaResults = convertToBase4(paramsObj["qa" + dataNum]);
      let qbResults = convertToBase4(paramsObj["qb" + dataNum]);

      qaResults = convertStrToArr(padWithZeroes(qaResults, results4.length));
      qbResults = convertStrToArr(padWithZeroes(qbResults, results4.length));

      console.log(qaResults);
      console.log(qbResults);
      let tempResults4 = returnUrlDataForBank(4);

      for (let i = 0; i < qaResults.length; i++) {
        if (qaResults[i] === qbResults[i]) {
          qaResults[i] = -1;
          qbResults[i] = -1;
        } else {
          tempResults4[i] = -1;
        }
      }

      setLnMgrTickArr(qbResults);
      setSpvsrTickArr(qaResults);
      setQBankBeingFinalised(dataNum);
      setIsBeingUpdated(true);
      setResults4(tempResults4);
    }
    // below removes the warning that appears in the console. Resolving the warning breaks the code, so ignore...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(results4);
  // }, [results4]);

  const updateArray = (index, value) => {
    let results = results4;
    results[index] = value;
    setResults4(results);
    console.log(results4);
    if (index < qb4RefsArr.length - 1) {
      qb4RefsArr[index + 1].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const history = useHistory();

  const handleClick = () => {
    handleQBankCompletionClick(
      4,
      results4,
      qBankBeingValidated,
      qBankBeingFinalised,
      history
    );
  };

  return (
    <div id="appBox" className="panel wideClear active">
      <div className="quizHeader">
        {isBeingUpdated ||
        qBankBeingFinalised > 0 ||
        qBankBeingValidated > 0 ? (
          <>
            <h1 className="QBank">
              {isBeingUpdated && qBankBeingFinalised < 0
                ? "Update your results:"
                : null}
              {qBankBeingValidated > 0
                ? "Validating Supervisors Results"
                : null}
              {qBankBeingFinalised > 0 ? "Finalising the Results" : null}
            </h1>
            <p>
              <strong>Instructions:</strong>
            </p>
            <p className="paddingBelow50">
              {isBeingUpdated && qBankBeingFinalised < 0
                ? "Update your results as per your first run through. Don't forget to then send them on to your Line Manager via the VALIDATE button on the results page to keep a record of your dashboard."
                : null}
              {qBankBeingValidated > 0
                ? "Input your ratings for the supervisor against the capability framework below. Once complete, you'll then need to set up a meeting to run through the results and agree on a final score."
                : null}
              {qBankBeingFinalised > 0
                ? "Discuss the results below, especially those areas where there is a difference of opinion. When complete, don't forget to send the results by email to sdp@laingorourke.com"
                : null}
            </p>
          </>
        ) : null}
      </div>

      <div className="quizHeader">
        <h1 className="QBank">Temporary Works</h1>
      </div>
      {qb4RefsArr.map((el, i) =>
        i < 10 ? (
          <Question
            passRef={qb4RefsArr[i]}
            id={"b4q" + (parseInt(i) + 1)}
            str={qb4QuesArr[i]}
            updateArray={updateArray}
            key={"b4q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results4[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} alt="logo" />
        <h1 className="QBank">Design Process</h1>
      </div>
      {qb4RefsArr.map((el, i) =>
        i >= 10 && i < 16 ? (
          <Question
            passRef={qb4RefsArr[i]}
            id={"b4q" + (parseInt(i) + 1)}
            str={qb4QuesArr[i]}
            updateArray={updateArray}
            key={"b4q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results4[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
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

export default QBank4;
