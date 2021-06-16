import React, { useRef } from "react";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import log from "../images/log.png";

const QBank5 = () => {
  // const qb5Ref1 = useRef(null);

  let results5 = [];
  let refs5 = [];
  for (var i = 0; i < 39; i++) {
    results5.push(0);
  }

  const updateArray = (index, value, fwdRef) => {
    results5[index] = value;
    console.log(results5);
    fwdRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // $("input[type='radio']").change(function (e) {
  //   let answer = e.currentTarget.id.slice(-1);
  //   let boxNum = Number(e.currentTarget.name.match(/\d+/)[0]) + 1;

  //   resultsArr[boxNum - 2] = answer;

  //   // console.log(resultsArr);

  //   let box = "#box" + boxNum;
  //   if (box == "#box13") {
  //     $("html,body").animate(
  //       {
  //         scrollTop: $("#submit1").offset().top - 100,
  //       },
  //       400
  //     );
  //   } else {
  //     $("html,body").animate(
  //       {
  //         scrollTop: $(box).offset().top - 100,
  //       },
  //       400
  //     );
  //   }
  // });

  const history = useHistory();
  const handleClick = () => {
    // history.push("/results?q5=1234");
    history.push({
      pathname: "/results",
      search: "?qb5=" + results5.join(""),
    });
  };

  return (
    <div id="appBox" className="panel wideClear active">
      <Question id="b5q1" str="hello" updateArray={updateArray} />
      <Question id="b5q2" str="hello" updateArray={updateArray} />
      <Question id="b5q3" str="hello" updateArray={updateArray} />
      <Question id="b5q4" str="hello" updateArray={updateArray} />
      <Question id="b5q5" str="hello" updateArray={updateArray} />
      <Question id="b5q6" str="hello" updateArray={updateArray} />
      <Question id="b5q7" str="hello" updateArray={updateArray} />
      <Question id="b5q8" str="hello" updateArray={updateArray} />
      <Question id="b5q9" str="hello" updateArray={updateArray} />
      <Question id="b5q10" str="hello" updateArray={updateArray} />
      <Question id="b5q11" str="hello" updateArray={updateArray} />
      <Question id="b5q12" str="hello" updateArray={updateArray} />
      <Question id="b5q13" str="hello" updateArray={updateArray} />
      <Question id="b5q14" str="hello" updateArray={updateArray} />
      <Question id="b5q15" str="hello" updateArray={updateArray} />
      <Question id="b5q16" str="hello" updateArray={updateArray} />
      <Question id="b5q17" str="hello" updateArray={updateArray} />
      <img className="supalogLogo" src={log} />
      <Question id="b5q18" str="hello2" updateArray={updateArray} />
      <Question id="b5q19" str="hello2" updateArray={updateArray} />
      <Question id="b5q20" str="hello2" updateArray={updateArray} />
      <Question id="b5q21" str="hello2" updateArray={updateArray} />
      <Question id="b5q22" str="hello2" updateArray={updateArray} />
      <Question id="b5q23" str="hello2" updateArray={updateArray} />
      <Question id="b5q24" str="hello2" updateArray={updateArray} />
      <Question id="b5q25" str="hello2" updateArray={updateArray} />
      <Question id="b5q26" str="hello2" updateArray={updateArray} />
      <Question id="b5q27" str="hello2" updateArray={updateArray} />
      <img className="supalogLogo" src={log} />
      <Question id="b5q28" str="hello2" updateArray={updateArray} />
      <Question id="b5q29" str="hello2" updateArray={updateArray} />
      <Question id="b5q30" str="hello2" updateArray={updateArray} />
      <Question id="b5q31" str="hello2" updateArray={updateArray} />
      <Question id="b5q32" str="hello2" updateArray={updateArray} />
      <Question id="b5q33" str="hello2" updateArray={updateArray} />
      <Question id="b5q34" str="hello2" updateArray={updateArray} />
      <Question id="b5q35" str="hello2" updateArray={updateArray} />
      <img className="supalogLogo" src={log} />
      <Question id="b5q36" str="hello2" updateArray={updateArray} />
      <Question id="b5q37" str="hello2" updateArray={updateArray} />
      <Question id="b5q38" str="hello2" updateArray={updateArray} />
      <Question id="b5q39" str="hello2" updateArray={updateArray} />

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
