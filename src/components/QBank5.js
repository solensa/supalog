import React, { useState, useEffect, createRef } from "react";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import log from "../images/log.png";
import {
  convertToBase4,
  convertToBase62,
  returnEmptyArrFor,
} from "./Utility.js";
import { qb5QuesArr } from "./Data.js";
import {
  returnUrlData,
  breakUrlIntoObj,
  convertObjToUrl,
  sendEmailToSupervisor,
  padWithZeroes,
  convertStrToArr,
} from "./Utility.js";

const QBank5 = () => {
  const [qb5RefsArr, setQb5Refs] = useState([]);
  const [results5, setResults5] = useState([]);
  const [isBeingUpdated, setIsBeingUpdated] = useState(false);
  const [qBankBeingValidated, setQBankBeingValidated] = useState(-1);
  const [qBankBeingFinalised, setQBankBeingFinalised] = useState(-1);
  const [lnMgrTickArr, setLnMgrTickArr] = useState([]);
  const [spvsrTickArr, setSpvsrTickArr] = useState([]);

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
      setResults5(returnUrlData(5));
    } else if (window.location.hash.includes("UPDATE")) {
      setIsBeingUpdated(true);
      setResults5(returnUrlData(5));
    } else if (window.location.hash.includes("FINALISE")) {
      // results being finalised between LM & Supervisor
      let paramsObj = breakUrlIntoObj();
      let dataNum = paramsObj["FINALISE"];
      let results = returnEmptyArrFor(dataNum);
      let qaResults = convertToBase4(paramsObj["qa" + dataNum]);
      let qbResults = convertToBase4(paramsObj["qb" + dataNum]);
      qaResults = convertStrToArr(padWithZeroes(qaResults, results.length));
      qbResults = convertStrToArr(padWithZeroes(qbResults, results.length));
      let tempResults5 = returnUrlData(5);

      for (let i = 0; i < qaResults.length; i++) {
        if (qaResults[i] == qbResults[i]) {
          qaResults[i] = -1;
          qbResults[i] = -1;
        } else {
          tempResults5[i] = -1;
        }
      }
      setLnMgrTickArr(qaResults);
      setSpvsrTickArr(qbResults);
      setQBankBeingFinalised(dataNum);
      setIsBeingUpdated(true);
      setResults5(tempResults5);
    }
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
    let isFormComplete = true;
    for (let i = 0; i < results5; i++) {
      if (results5[i] < 0) {
        isFormComplete = false;
      }
    }
    if (!isFormComplete) {
      alert("incomplete form!");
      return;
    }

    let x = convertToBase62(results5.join(""));
    if (qBankBeingValidated > 0) {
      let paramsObj = breakUrlIntoObj();
      paramsObj["qa" + qBankBeingValidated] = x;
      paramsObj["FINALISE"] = qBankBeingValidated;
      delete paramsObj["VALIDATE"];
      sendEmailToSupervisor(
        "http://localhost:3000/supalog#/hsm?" + convertObjToUrl(paramsObj)
      );
    } else if (qBankBeingFinalised > 0) {
      history.push({
        pathname: "/results",
        search: "?qbc=" + x,
      });
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
        <h1 className="QBank">
          {isBeingUpdated ? "Updating your results" : null}
          {qBankBeingValidated > 0 ? "Validating Supervisors Results" : null}
        </h1>
      </div>

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
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
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
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
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
            lnMgrTick={lnMgrTickArr[i] + 1}
            spvsrTick={spvsrTickArr[i] + 1}
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

export default QBank5;
