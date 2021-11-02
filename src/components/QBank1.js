import React, { useState, useEffect, createRef } from "react";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import log from "../images/log.png";
import { qb1QuesArr } from "./Data.js";
import {
  convertToBase4,
  returnUrlDataForBank,
  breakUrlIntoObj,
  padWithZeroes,
  convertStrToArr,
  handleQBankCompletionClick,
} from "./Utility.js";

const QBank1 = () => {
  const [qb1RefsArr, setQb1Refs] = useState([]);
  const [results1, setResults1] = useState([]);
  const [isBeingUpdated, setIsBeingUpdated] = useState(false);
  const [qBankBeingValidated, setQBankBeingValidated] = useState(-1);
  const [qBankBeingFinalised, setQBankBeingFinalised] = useState(-1);
  const [lnMgrTickArr, setLnMgrTickArr] = useState([]);
  const [spvsrTickArr, setSpvsrTickArr] = useState([]);

  useEffect(() => {
    // add or remove refs
    setQb1Refs((qb1RefsArr) =>
      Array(qb1QuesArr.length)
        .fill()
        .map((_, i) => qb1RefsArr[i] || createRef())
    );
  }, []);
  // }, [qb1QuesArr.length]); //removed due to warning suggestion

  useEffect(() => {
    for (var i = 0; i < qb1QuesArr.length; i++) {
      results1.push(-1);
    }

    if (window.location.hash.includes("VALIDATE")) {
      // results being validated
      let paramsObj = breakUrlIntoObj();
      setQBankBeingValidated(paramsObj["VALIDATE"]);
      setResults1(returnUrlDataForBank(1));
    } else if (window.location.hash.includes("UPDATE")) {
      setIsBeingUpdated(true);
      setResults1(returnUrlDataForBank(1));
    } else if (window.location.hash.includes("FINALISE")) {
      console.log("FINALISE");
      // results being finalised between LM & Supervisor
      let paramsObj = breakUrlIntoObj();
      let dataNum = paramsObj["FINALISE"];

      let qaResults = convertToBase4(paramsObj["qa" + dataNum]);
      let qbResults = convertToBase4(paramsObj["qb" + dataNum]);

      qaResults = convertStrToArr(padWithZeroes(qaResults, results1.length));
      qbResults = convertStrToArr(padWithZeroes(qbResults, results1.length));

      console.log(qaResults);
      console.log(qbResults);
      let tempResults1 = returnUrlDataForBank(1);

      for (let i = 0; i < qaResults.length; i++) {
        if (qaResults[i] === qbResults[i]) {
          qaResults[i] = -1;
          qbResults[i] = -1;
        } else {
          tempResults1[i] = -1;
        }
      }

      setLnMgrTickArr(qbResults);
      setSpvsrTickArr(qaResults);
      setQBankBeingFinalised(dataNum);
      setIsBeingUpdated(true);
      setResults1(tempResults1);
    }
    // below removes the warning that appears in the console. Resolving the warning breaks the code, so ignore...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(results1);
  // }, [results1]);

  const updateArray = (index, value) => {
    let results = results1;
    results[index] = value;
    setResults1(results);
    console.log(results1);
    if (index < qb1RefsArr.length - 1) {
      qb1RefsArr[index + 1].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const history = useHistory();

  const handleClick = () => {
    handleQBankCompletionClick(
      1,
      results1,
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
        <h1 className="QBank">Performance Management</h1>
      </div>
      {qb1RefsArr.map((el, i) =>
        i < 16 ? (
          <Question
            passRef={qb1RefsArr[i]}
            id={"b1q" + (parseInt(i) + 1)}
            str={qb1QuesArr[i]}
            updateArray={updateArray}
            key={"b1q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results1[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} alt="logo" />
        <h1 className="QBank">Recruitment & Selection</h1>
      </div>
      {qb1RefsArr.map((el, i) =>
        i >= 16 && i < 19 ? (
          <Question
            passRef={qb1RefsArr[i]}
            id={"b1q" + (parseInt(i) + 1)}
            str={qb1QuesArr[i]}
            updateArray={updateArray}
            key={"b1q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results1[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} alt="logo" />
        <h1 className="QBank">Employee Relations</h1>
      </div>
      {qb1RefsArr.map((el, i) =>
        i >= 19 && i < 22 ? (
          <Question
            passRef={qb1RefsArr[i]}
            id={"b1q" + (parseInt(i) + 1)}
            str={qb1QuesArr[i]}
            updateArray={updateArray}
            key={"b1q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results1[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} alt="logo" />
        <h1 className="QBank">Team Performance & Development</h1>
      </div>
      {qb1RefsArr.map((el, i) =>
        i >= 22 && i < 31 ? (
          <Question
            passRef={qb1RefsArr[i]}
            id={"b1q" + (parseInt(i) + 1)}
            str={qb1QuesArr[i]}
            updateArray={updateArray}
            key={"b1q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results1[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} alt="logo" />
        <h1 className="QBank">Talent Management</h1>
      </div>
      {qb1RefsArr.map((el, i) =>
        i >= 31 && i < 34 ? (
          <Question
            passRef={qb1RefsArr[i]}
            id={"b1q" + (parseInt(i) + 1)}
            str={qb1QuesArr[i]}
            updateArray={updateArray}
            key={"b1q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results1[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} alt="logo" />
        <h1 className="QBank">Time Management</h1>
      </div>
      {qb1RefsArr.map((el, i) =>
        i >= 34 && i < 38 ? (
          <Question
            passRef={qb1RefsArr[i]}
            id={"b1q" + (parseInt(i) + 1)}
            str={qb1QuesArr[i]}
            updateArray={updateArray}
            key={"b1q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results1[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} alt="logo" />
        <h1 className="QBank">Leadership & Directiveness</h1>
      </div>
      {qb1RefsArr.map((el, i) =>
        i >= 38 && i < 45 ? (
          <Question
            passRef={qb1RefsArr[i]}
            id={"b1q" + (parseInt(i) + 1)}
            str={qb1QuesArr[i]}
            updateArray={updateArray}
            key={"b1q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results1[i] + 1 : null}
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
          />
        ) : null
      )}
      <div className="quizHeader">
        <img className="supalogLogo" src={log} alt="logo" />
        <h1 className="QBank">Communication & Influencing Skills</h1>
      </div>
      {qb1RefsArr.map((el, i) =>
        i >= 45 ? (
          <Question
            passRef={qb1RefsArr[i]}
            id={"b1q" + (parseInt(i) + 1)}
            str={qb1QuesArr[i]}
            updateArray={updateArray}
            key={"b1q" + (parseInt(i) + 1)}
            tickAns={isBeingUpdated ? results1[i] + 1 : null}
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

export default QBank1;
