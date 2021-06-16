import React, { useRef } from "react";
import Question from "./Question";
import { useHistory } from "react-router-dom";
import log from "../images/log.png";

const qb5QuesArr = [
  "Understands their duty to look after their own health and safety and the health and safety of their team",
  "Shows their team a sense of personal and collective responsibility and commitment for health and safety",
  "Supports their Manager implementing the LOR H&S management system [inc policy and procedures]",
  "Promotes open communication on all H&S matters, involves team members in drawing up planned methods, and provides advice and support to team members in complex/ demanding situations",
  "Knows the principles of the Laing O’Rourke Safety Management System (SMS) and understands that they play a key part in helping the team and their Manager to comply with its requirements",
  "Knows how to work to Risk Assessments, Method Statements and Visual Task Sheets and brief the team in an engaging manner",
  "Knows to pause operations whenever circumstances change, review risk assessment and update Method Statement Task Sheets with the Responsible Manager and brief the team before re-starting",
  "Knows and understands key H&S regulations which affect site based work, and how to comply with them. Seeks advice when unsure",
  "Knows the importance of the effective maintenance of plant, tools and equipment and how to report any defects",
  "Is aware of the requirements of their safe system of work and where appropriate for confined space, excavation and hot works permits ",
  "Understands COSHH hazard symbols and what risk control measures are required for each",
  "Has good understanding of PPE requirements and how it is used and stored ",
  "Has the ability to search, find and retrieve H&S guidance and templates from the iGMS",
  "Is able to contribute to the preparation of Risk Assessments, Method Statements, Task Sheets with the team and the Responsible Manager",
  "Is able to assess the risks inherent in an operation, and can help plan and implement a safe system to work",
  "Is able to keep H&S records relevant to the work of the team they supervise, including records of Briefings and Tool Box talks delivered",
  "Is able to articualte the Next Gear approach to H&S to their team including Next Gear tools",
  "Has attended the LOR Occupational Health e-Learning modules and understands the relevance to their role",
  "Understands what the main Occupational health risks are and their source [i.e. HAV, Noise, Dust, MSD]",
  "Understands the legal requirements related to Occupational Health Risks and ensures RAMS, SSoW, VTS include suitable and sufficient risk control measures to mitigate the risk.",
  "Understands their role in minimising risk exposure to their workers by finding a lower risk solution [i.e. applies the risk hierachy]",
  "Ensures all necessary SSoW involving OH Risk Controls are closely followed [i.e. Vibration trigger times etc] and where appropriate, restrictions applied",
  "Understands the importance of Health Surveillance for their team and the need to monitor for poor OH health symptoms [e.g. tingling fingers] and refer all concerned to the LOR Occupational Health team",
  "Regularly talks to their team and raises the awareness of OH risks in the workplace",
  "Actively engages in Occupational health campaigns and leads on the implementation of good practice / the LOR leading standards",
  "Can demonstrate effective supervision of works involving Occupational Health Risks",
  "Can monitor and advise Sub Contractors on OH Risk Management improvement suggestions ",
  "Understands the high potential risks and potential hazards within their work scope and takes approriate steps to ensure they are safely managed",
  "Is able to contribute to the preparation of Risk Assessments, Method Statements, and Visual Task Sheets with the  Responsible Manager and involves their team",
  "Is able to carry out engaging and collective [2-Way] briefings [VTS, DABs, TBTs etc] in a manner appropriate to the task and the team",
  "Is able to look beyond their immediate work area and identify wider risks",
  "Is able to implement approved and recorded risk mitigation measures within their area of responsibility",
  "Works with other Supervisors and their Manager to implement consistent best practice / leading standards",
  "Has attended the Next Gear Introduction training and understands the main tools it provides and how to use them in the workplace [Collective Insight, Planned vs Actual, Fatal & Severe Risk Review]",
  "Has lead / facilitated delivery of at least one of each of the Next Gear Tools [Collective Insight, Planned vs Actual, Fatal & Severe Risk Review]",
  "Understands the companies approach to Wellbeing",
  "Knows where to access Wellbeing  services and can signpost individuals to them",
  "Proactively applies principles from the Energy Project and wellbeing to support personal sustainability and performance in their teams",
  "Role models capacity management and wellbeing and creates an environment to support this in their team",
];

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
      <h1>Safety</h1>
      <Question id="b5q1" str={qb5QuesArr[0]} updateArray={updateArray} />
      <Question id="b5q2" str={qb5QuesArr[1]} updateArray={updateArray} />
      <Question id="b5q3" str={qb5QuesArr[2]} updateArray={updateArray} />
      <Question id="b5q4" str={qb5QuesArr[3]} updateArray={updateArray} />
      <Question id="b5q5" str={qb5QuesArr[4]} updateArray={updateArray} />
      <Question id="b5q6" str={qb5QuesArr[5]} updateArray={updateArray} />
      <Question id="b5q7" str={qb5QuesArr[6]} updateArray={updateArray} />
      <Question id="b5q8" str={qb5QuesArr[7]} updateArray={updateArray} />
      <Question id="b5q9" str={qb5QuesArr[8]} updateArray={updateArray} />
      <Question id="b5q10" str={qb5QuesArr[9]} updateArray={updateArray} />
      <Question id="b5q11" str={qb5QuesArr[10]} updateArray={updateArray} />
      <Question id="b5q12" str={qb5QuesArr[11]} updateArray={updateArray} />
      <Question id="b5q13" str={qb5QuesArr[12]} updateArray={updateArray} />
      <Question id="b5q14" str={qb5QuesArr[13]} updateArray={updateArray} />
      <Question id="b5q15" str={qb5QuesArr[14]} updateArray={updateArray} />
      <Question id="b5q16" str={qb5QuesArr[15]} updateArray={updateArray} />
      <Question id="b5q17" str={qb5QuesArr[16]} updateArray={updateArray} />
      <img className="supalogLogo" src={log} />
      <h1>Occupational health</h1>
      <Question id="b5q18" str={qb5QuesArr[17]} updateArray={updateArray} />
      <Question id="b5q19" str={qb5QuesArr[18]} updateArray={updateArray} />
      <Question id="b5q20" str={qb5QuesArr[19]} updateArray={updateArray} />
      <Question id="b5q21" str={qb5QuesArr[20]} updateArray={updateArray} />
      <Question id="b5q22" str={qb5QuesArr[21]} updateArray={updateArray} />
      <Question id="b5q23" str={qb5QuesArr[22]} updateArray={updateArray} />
      <Question id="b5q24" str={qb5QuesArr[23]} updateArray={updateArray} />
      <Question id="b5q25" str={qb5QuesArr[24]} updateArray={updateArray} />
      <Question id="b5q26" str={qb5QuesArr[25]} updateArray={updateArray} />
      <Question id="b5q27" str={qb5QuesArr[26]} updateArray={updateArray} />
      <img className="supalogLogo" src={log} />
      <h1>H&S Risk Assessment</h1>
      <Question id="b5q28" str={qb5QuesArr[27]} updateArray={updateArray} />
      <Question id="b5q29" str={qb5QuesArr[28]} updateArray={updateArray} />
      <Question id="b5q30" str={qb5QuesArr[29]} updateArray={updateArray} />
      <Question id="b5q31" str={qb5QuesArr[30]} updateArray={updateArray} />
      <Question id="b5q32" str={qb5QuesArr[31]} updateArray={updateArray} />
      <Question id="b5q33" str={qb5QuesArr[32]} updateArray={updateArray} />
      <Question id="b5q34" str={qb5QuesArr[33]} updateArray={updateArray} />
      <Question id="b5q35" str={qb5QuesArr[34]} updateArray={updateArray} />
      <img className="supalogLogo" src={log} />
      <h1>Mental Health & Wellbeing</h1>
      <Question id="b5q36" str={qb5QuesArr[35]} updateArray={updateArray} />
      <Question id="b5q37" str={qb5QuesArr[36]} updateArray={updateArray} />
      <Question id="b5q38" str={qb5QuesArr[37]} updateArray={updateArray} />
      <Question id="b5q39" str={qb5QuesArr[38]} updateArray={updateArray} />

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
