import React, { useState, useEffect } from "react";
import StatCard from "./StatCard";
import StatColumn from "./StatColumn";
import { convertToBase4, padWithZeroes } from "./Utility.js";
import { qb5QuesArr } from "./Data.js";

const Results = () => {
  const [data, setData] = useState([
    {
      name: "Safety",
      value: 88,
    },
    {
      name: "Occupational Health",
      value: 30,
    },
    {
      name: "H&S Risk Mgt.",
      value: 20,
    },
    {
      name: "Mental Hlth. & Wllbng",
      value: 77,
    },
  ]);
  // var data = [
  //   {
  //     name: "Safety",
  //     value: 88,
  //   },
  //   {
  //     name: "Occupational Health",
  //     value: 30,
  //   },
  //   {
  //     name: "H&S Risk Mgt.",
  //     value: 20,
  //   },
  //   {
  //     name: "Mental Hlth. & Wllbng",
  //     value: 77,
  //   },
  // ];
  var data2 = [
    {
      name: "Perf. Mgt.",
      value: 0,
    },
    {
      name: "Recruit & Select",
      value: 0,
    },
    {
      name: "Employee Relations",
      value: 0,
    },
    {
      name: "Team Perf. & Dev.",
      value: 0,
    },
    {
      name: "Talent Mgt.",
      value: 0,
    },
    {
      name: "Time Mgt.",
      value: 0,
    },
    {
      name: "Ldrshp. & Drctvnss.",
      value: 0,
    },
    {
      name: "Comms & Infl.",
      value: 0,
    },
  ];
  var data3 = [
    {
      name: "Safety",
      value: 0,
    },
    {
      name: "Occupational Health",
      value: 0,
    },
  ];
  var data4 = [
    {
      name: "Page A",
      value: 0,
    },
    {
      name: "Page B",
      value: 0,
    },
    {
      name: "Page C",
      value: 0,
    },
    {
      name: "Page D",
      value: 0,
    },
    {
      name: "Page E",
      value: 0,
    },
    {
      name: "Page F",
      value: 0,
    },
  ];
  var data5 = [
    {
      name: "Page A",
      value: 0,
    },
    {
      name: "Page B",
      value: 0,
    },
    {
      name: "Page C",
      value: 0,
    },
    {
      name: "Page D",
      value: 0,
    },
    {
      name: "Page E",
      value: 0,
    },
    {
      name: "Page F",
      value: 0,
    },
  ];
  var data6 = [
    {
      name: "Page A",
      value: 0,
    },
    {
      name: "Page B",
      value: 0,
    },
    {
      name: "Page C",
      value: 0,
    },
    {
      name: "Page D",
      value: 0,
    },
    {
      name: "Page E",
      value: 0,
    },
    {
      name: "Page F",
      value: 0,
    },
  ];
  var data7 = [
    {
      name: "Page A",
      value: 0,
    },
    {
      name: "Page B",
      value: 0,
    },
    {
      name: "Page C",
      value: 0,
    },
    {
      name: "Page D",
      value: 0,
    },
    {
      name: "Page E",
      value: 0,
    },
    {
      name: "Page F",
      value: 0,
    },
  ];
  var data8 = [
    {
      name: "Page A",
      value: 0,
    },
    {
      name: "Page B",
      value: 0,
    },
    {
      name: "Page C",
      value: 0,
    },
    {
      name: "Page D",
      value: 0,
    },
    {
      name: "Page E",
      value: 0,
    },
    {
      name: "Page F",
      value: 0,
    },
  ];

  useEffect(() => {
    const windowUrl = window.location.href;
    let arr = windowUrl.split("=");
    let num = convertToBase4(arr[1]);
    num = padWithZeroes(num, qb5QuesArr.length);
    // console.log(num);

    let sect1 = 0;
    let sect2 = 0;
    let sect3 = 0;
    let sect4 = 0;

    for (let i = 0; i < num.length; i++) {
      if (i < 17) {
        sect1 += parseInt(num[i]);
      } else if (i < 27) {
        sect2 += parseInt(num[i]);
      } else if (i < 35) {
        sect3 += parseInt(num[i]);
      } else {
        sect4 += parseInt(num[i]);
      }
    }
    let dataVal1 = Math.round((33.33 * sect1) / 17);
    let dataVal2 = Math.round((33.33 * sect2) / 10);
    let dataVal3 = Math.round((33.33 * sect3) / 8);
    let dataVal4 = Math.round((33.33 * sect4) / 4);
    // console.log(data);
    // console.log(Math.round((33.33 * sect4) / 4));
    setData([
      {
        name: "Safety",
        value: dataVal1,
      },
      {
        name: "Occupational Health",
        value: dataVal2,
      },
      {
        name: "H&S Risk Mgt.",
        value: dataVal3,
      },
      {
        name: "Mentl Hlth. & Wllbng",
        value: dataVal4,
      },
    ]);
  }, []);

  return (
    <>
      <div className="cardBG">
        <div className="headlineCard wideClear">
          <StatCard data1={data} show={true}></StatCard>
        </div>
      </div>
      <div className="firstRow">
        <div className="resultsCol1">
          <StatColumn title="Health, Safety & Wellbeing" data2={data} />
          <StatColumn title="Leadership & Mgt." data2={data2} />
        </div>
        <div className="resultsCol2">
          <StatColumn title="Quality" data2={data3} />
          <StatColumn title="Planning" data2={data4} />
        </div>
      </div>
      <div className="secondRow">
        <div className="resultsCol1">
          <StatColumn title="Eng. & Design" data2={data5} />
          <StatColumn title="Sustainability" data2={data6} />
        </div>
        <div className="resultsCol2">
          <StatColumn title="Digital" data2={data7} />
          <StatColumn title="Business Understanding" data2={data8} />
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Results;
