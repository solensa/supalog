import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis } from "recharts";
import {
  returnUrlStr,
  sendEmailToLm,
  getBankStrCodeFromId,
} from "./Utility.js";
import { useHistory } from "react-router-dom";
import verifiedSvg from "../images/check.svg";
// import FadeIn from "react-fade-in";

const WIDTH = 170;

const StatColumn = ({ title, dataToShow, id, isVerified }) => {
  const history = useHistory();

  let HEIGHT = dataToShow.length * 45.875;
  let btnMargin = "btnMargin" + dataToShow.length;
  if (dataToShow.length >= 6) {
    HEIGHT = 420;
  }

  let avgScore = 0;
  for (let i = 0; i < dataToShow.length; i++) {
    avgScore = avgScore + dataToShow[i].value;
  }
  avgScore = avgScore / dataToShow.length;

  const data = [
    { name: "Category score / 100", value: avgScore },
    { name: "Remaining", value: 100 - avgScore },
  ];

  let headlineValue = Math.round(
    (100 * data[0].value) / (data[0].value + data[1].value) + 10
  );

  const CustomLabel = ({ x, y, name, value }) => {
    y = y - 21;
    if (headlineValue === 0) {
      value = "- -";
    }
    return (
      <g>
        <foreignObject x={x} y={y} width={WIDTH - 40} height={30}>
          <div className="barLabel">{name}</div>
          <div className="barLabel2">{value}</div>
        </foreignObject>
      </g>
    );
  };

  const startClick = () => {
    if (id === 1) {
      let bankStrCode = getBankStrCodeFromId(id);
      let str = "/" + bankStrCode + "?" + returnUrlStr();
      // console.log(str);
      history.push(str);
    } else {
      console.log("start click");
      alert("Coming Soon!");
    }
  };

  const validateClick = () => {
    // console.log("validate click");
    let bankStrCode = getBankStrCodeFromId(id);
    let str =
      window.location.origin +
      window.location.pathname +
      "#/" +
      bankStrCode +
      "?VALIDATE=" +
      id +
      "&" +
      returnUrlStr();
    console.log(str);
    sendEmailToLm(str);
  };

  const updateClick = () => {
    // console.log("update click");
    let bankStrCode = getBankStrCodeFromId(id);

    let str = "/" + bankStrCode + "?UPDATE=" + id + "&" + returnUrlStr();
    // console.log(str);
    history.push(str);
  };

  const saveClick = () => {
    console.log("save click");
    sendEmailToLm(window.location);
    // history.push("/results");
  };

  return (
    <div className="resultColumn">
      {isVerified ? (
        <div className="verifiedDiv">
          <img
            className="verified"
            src={verifiedSvg}
            alt="verified by Line Manager"
          />{" "}
          Verified
        </div>
      ) : null}
      <div className="pieChartTitle">{title}</div>
      <PieChart width={WIDTH - 20} height={100}>
        <Pie
          stroke="none"
          cy={100}
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={53}
          outerRadius={66}
          fill="#000"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) =>
            index === 0 ? (
              <Cell
                key={`cell-${index}`}
                fill={
                  headlineValue >= 75
                    ? "#50A684"
                    : headlineValue >= 25
                    ? "#F1C050"
                    : headlineValue > 0
                    ? "#F7645C"
                    : "#3708a2"
                }
              />
            ) : (
              <Cell key={`cell-${index}`} fill={"#eee"} />
            )
          )}
        </Pie>
      </PieChart>
      <div>
        <div
          className="pieChartText"
          style={{
            color:
              headlineValue >= 75
                ? "#50A684"
                : headlineValue >= 25
                ? "#F1C050"
                : headlineValue > 10
                ? "#F7645C"
                : "#3708a2",
          }}
        >
          {headlineValue > 10 ? headlineValue : <div className="tbc">tbc</div>}
        </div>
        <div className={isVerified ? "top-35" : ""}>
          <BarChart
            layout="vertical"
            width={WIDTH - 30}
            height={HEIGHT}
            data={dataToShow}
            margin={{
              top: 20,
              right: 5,
              left: 5,
              bottom: 20,
            }}
            barSize={7}
            // barCategoryGap={"45%"}
            // barGap={5}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <Bar
              dataKey="value"
              // fill="red"
              background={{ fill: "#eee" }}
              label={CustomLabel}
            >
              {dataToShow.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    dataToShow[index].value >= 75
                      ? "#50A684"
                      : dataToShow[index].value >= 25
                      ? "#F1C050"
                      : "#F7645C"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      <div className={"statBtnWrap " + btnMargin}>
        <button
          className="hvr-bounce-to-top bounceBtn statButton statBtn2"
          onClick={headlineValue > 10 ? updateClick : startClick}
        >
          {headlineValue > 10 ? "UPDATE" : "START"}
        </button>
      </div>
      {headlineValue > 10 && !isVerified ? (
        <div className={"statBtnWrap " + btnMargin}>
          <button
            className="hvr-bounce-to-top bounceBtn statButton"
            onClick={validateClick}
          >
            VALIDATE
          </button>
        </div>
      ) : headlineValue > 10 ? (
        <div className={"statBtnWrap " + btnMargin}>
          <button
            className="hvr-bounce-to-top bounceBtn statButton"
            onClick={saveClick}
          >
            SAVE
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default StatColumn;
