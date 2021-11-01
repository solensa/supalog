import React, { useState, useEffect } from "react";
import StatCard from "./StatCard";
import StatColumn from "./StatColumn";
import { returnUrlBanksArr, returnUrlDataForBank } from "./Utility.js";

const Results = () => {
  const [isVerified1, setIsVerified1] = useState(false);
  const [isVerified5, setIsVerified5] = useState(false);
  const [data5, setData5] = useState([
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
  const [data1, setData1] = useState([
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
  ]);
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
  var data2 = [
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
    console.log("results.js > useEffect");
    let banksArr = returnUrlBanksArr();

    //define variables
    let num, sect1, sect2, sect3, sect4, sect5, sect6, sect7, sect8;
    let dataVal1,
      dataVal2,
      dataVal3,
      dataVal4,
      dataVal5,
      dataVal6,
      dataVal7,
      dataVal8;

    // Bank 1 results UI
    if (banksArr.indexOf(1) >= 0) {
      console.log("data for bank 1 exists");
      if (window.location.hash.includes("qc1")) {
        setIsVerified1(true);
      }
      num = returnUrlDataForBank(1);

      sect1 = 0;
      sect2 = 0;
      sect3 = 0;
      sect4 = 0;
      sect5 = 0;
      sect6 = 0;
      sect7 = 0;
      sect8 = 0;

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
      dataVal1 = Math.round((33.33 * sect1) / 17);
      dataVal2 = Math.round((33.33 * sect2) / 10);
      dataVal3 = Math.round((33.33 * sect3) / 8);
      dataVal4 = Math.round((33.33 * sect4) / 4);
      dataVal5 = Math.round((33.33 * sect5) / 17);
      dataVal6 = Math.round((33.33 * sect6) / 10);
      dataVal7 = Math.round((33.33 * sect7) / 8);
      dataVal8 = Math.round((33.33 * sect8) / 4);

      setData1([
        {
          name: "Perf. Mgt.",
          value: dataVal1,
        },
        {
          name: "Recruit & Select",
          value: dataVal2,
        },
        {
          name: "Employee Relations",
          value: dataVal3,
        },
        {
          name: "Team Perf. & Dev.",
          value: dataVal4,
        },
        {
          name: "Talent Mgt.",
          value: dataVal5,
        },
        {
          name: "Time Mgt.",
          value: dataVal6,
        },
        {
          name: "Ldrshp. & Drctvnss.",
          value: dataVal7,
        },
        {
          name: "Comms & Infl.",
          value: dataVal8,
        },
      ]);
    }

    // Bank 5 results UI
    if (banksArr.indexOf(5) >= 0) {
      console.log("data for bank 5 exists");
      if (window.location.hash.includes("qc5")) {
        setIsVerified5(true);
      }
      num = returnUrlDataForBank(5);

      sect1 = 0;
      sect2 = 0;
      sect3 = 0;
      sect4 = 0;

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
      dataVal1 = Math.round((33.33 * sect1) / 17);
      dataVal2 = Math.round((33.33 * sect2) / 10);
      dataVal3 = Math.round((33.33 * sect3) / 8);
      dataVal4 = Math.round((33.33 * sect4) / 4);
      // console.log(data);
      // console.log(Math.round((33.33 * sect4) / 4));
      setData5([
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
    }
  }, []);

  return (
    <>
      <div className="cardBG">
        <div className="headlineCard wideClear">
          <StatCard data1={data1} data5={data5} show={true}></StatCard>
        </div>
      </div>
      <div className="firstRow">
        <div className="resultsCol1">
          <StatColumn
            title="Health, Safety & Wellbeing"
            dataToShow={data5}
            id={5}
            isVerified={isVerified5}
          />
          <StatColumn
            title="Leadership & Mgt."
            dataToShow={data1}
            id={1}
            isVerified={isVerified1}
          />
        </div>
        <div className="resultsCol2">
          <StatColumn title="Quality" dataToShow={data3} id={3} />
          <StatColumn title="Planning" dataToShow={data4} id={4} />
        </div>
      </div>
      <div className="secondRow">
        <div className="resultsCol1">
          <StatColumn title="Eng. & Design" dataToShow={data2} id={2} />
          <StatColumn title="Sustainability" dataToShow={data6} id={6} />
        </div>
        <div className="resultsCol2">
          <StatColumn title="Digital" dataToShow={data7} id={7} />
          <StatColumn
            title="Business Understanding"
            dataToShow={data8}
            id={8}
          />
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Results;
