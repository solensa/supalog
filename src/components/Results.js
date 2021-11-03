import React, { useState, useEffect } from "react";
import StatCard from "./StatCard";
import StatColumn from "./StatColumn";
import { returnUrlBanksArr, returnUrlDataForBank } from "./Utility.js";

const Results = () => {
  const [isVerified1, setIsVerified1] = useState(false);
  const [isVerified2, setIsVerified2] = useState(false);
  const [isVerified3, setIsVerified3] = useState(false);
  const [isVerified4, setIsVerified4] = useState(false);
  const [isVerified5, setIsVerified5] = useState(false);
  const [isVerified6, setIsVerified6] = useState(false);
  const [isVerified7, setIsVerified7] = useState(false);
  const [isVerified8, setIsVerified8] = useState(false);
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
  const [data2, setData2] = useState([
    {
      name: "Quality",
      value: 0,
    },
    {
      name: "Mthd Sttmnts & ITPS",
      value: 0,
    },
    {
      name: "Check Sheets/NCRS",
      value: 0,
    },
    {
      name: "Aprvl/Smpl/Bnchmrk",
      value: 0,
    },
    {
      name: "Dimension Control",
      value: 0,
    },
    {
      name: "Knwldge of Matrials",
      value: 0,
    },
    {
      name: "Sngng/Hndvr/Prctcl",
      value: 0,
    },
  ]);
  const [data3, setData3] = useState([
    {
      name: "Cost Control",
      value: 0,
    },
    {
      name: "Wrk Mthd Selction",
      value: 0,
    },
    {
      name: "Programming",
      value: 0,
    },
    {
      name: "Implmnt Prgrms",
      value: 0,
    },
  ]);
  const [data4, setData4] = useState([
    {
      name: "Temporary Works",
      value: 0,
    },
    {
      name: "Design Process",
      value: 0,
    },
  ]);
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
  const [data6, setData6] = useState([
    {
      name: "Env. Sustainability",
      value: 0,
    },
    {
      name: "Env. Mgt.",
      value: 0,
    },
  ]);
  const [data7, setData7] = useState([
    {
      name: "IT",
      value: 0,
    },
    {
      name: "Information Access",
      value: 0,
    },
  ]);
  const [data8, setData8] = useState([
    {
      name: "Business Strategy",
      value: 0,
    },
    {
      name: "Values",
      value: 0,
    },
  ]);

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
        if (i < 16) {
          sect1 += parseInt(num[i]);
        } else if (i < 19) {
          sect2 += parseInt(num[i]);
        } else if (i < 22) {
          sect3 += parseInt(num[i]);
        } else if (i < 31) {
          sect4 += parseInt(num[i]);
        } else if (i < 34) {
          sect5 += parseInt(num[i]);
        } else if (i < 38) {
          sect6 += parseInt(num[i]);
        } else if (i < 45) {
          sect7 += parseInt(num[i]);
        } else {
          sect8 += parseInt(num[i]);
        }
      }
      // 33.33% as there are 4 choices and this needs to be waited
      dataVal1 = Math.round((33.33 * sect1) / 16);
      dataVal2 = Math.round((33.33 * sect2) / 3);
      dataVal3 = Math.round((33.33 * sect3) / 3);
      dataVal4 = Math.round((33.33 * sect4) / 9);
      dataVal5 = Math.round((33.33 * sect5) / 3);
      dataVal6 = Math.round((33.33 * sect6) / 4);
      dataVal7 = Math.round((33.33 * sect7) / 7);
      dataVal8 = Math.round((33.33 * sect8) / 7);

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

    // Bank 2 results UI
    if (banksArr.indexOf(2) >= 0) {
      console.log("data for bank 2 exists");
      if (window.location.hash.includes("qc2")) {
        setIsVerified2(true);
      }
      num = returnUrlDataForBank(2);

      sect1 = 0;
      sect2 = 0;
      sect3 = 0;
      sect4 = 0;
      sect5 = 0;
      sect6 = 0;
      sect7 = 0;

      for (let i = 0; i < num.length; i++) {
        if (i < 8) {
          sect1 += parseInt(num[i]);
        } else if (i < 16) {
          sect2 += parseInt(num[i]);
        } else if (i < 24) {
          sect3 += parseInt(num[i]);
        } else if (i < 29) {
          sect4 += parseInt(num[i]);
        } else if (i < 39) {
          sect5 += parseInt(num[i]);
        } else if (i < 44) {
          sect6 += parseInt(num[i]);
        } else {
          sect7 += parseInt(num[i]);
        }
      }
      // 33.33% as there are 4 choices and this needs to be waited
      dataVal1 = Math.round((33.33 * sect1) / 8);
      dataVal2 = Math.round((33.33 * sect2) / 8);
      dataVal3 = Math.round((33.33 * sect3) / 8);
      dataVal4 = Math.round((33.33 * sect4) / 5);
      dataVal5 = Math.round((33.33 * sect5) / 10);
      dataVal6 = Math.round((33.33 * sect6) / 5);
      dataVal7 = Math.round((33.33 * sect7) / 9);

      setData2([
        {
          name: "Quality",
          value: dataVal1,
        },
        {
          name: "Mthd Sttmnts & ITPS",
          value: dataVal2,
        },
        {
          name: "Check Sheets/NCRS",
          value: dataVal3,
        },
        {
          name: "Aprvl/Smpl/Bnchmrk",
          value: dataVal4,
        },
        {
          name: "Dimension Control",
          value: dataVal5,
        },
        {
          name: "Knwldge of Matrials",
          value: dataVal6,
        },
        {
          name: "Sngng/Hndvr/Prctcl",
          value: dataVal7,
        },
      ]);
    }

    // Bank 3 results UI
    if (banksArr.indexOf(3) >= 0) {
      console.log("data for bank 3 exists");
      if (window.location.hash.includes("qc3")) {
        setIsVerified3(true);
      }
      num = returnUrlDataForBank(3);

      sect1 = 0;
      sect2 = 0;
      sect3 = 0;
      sect4 = 0;

      for (let i = 0; i < num.length; i++) {
        if (i < 10) {
          sect1 += parseInt(num[i]);
        } else if (i < 16) {
          sect2 += parseInt(num[i]);
        } else if (i < 22) {
          sect3 += parseInt(num[i]);
        } else {
          sect4 += parseInt(num[i]);
        }
      }
      dataVal1 = Math.round((33.33 * sect1) / 10);
      dataVal2 = Math.round((33.33 * sect2) / 6);
      dataVal3 = Math.round((33.33 * sect3) / 6);
      dataVal4 = Math.round((33.33 * sect4) / 3);
      // console.log(data);
      // console.log(Math.round((33.33 * sect4) / 4));
      setData3([
        {
          name: "Cost Control",
          value: dataVal1,
        },
        {
          name: "Wrk Mthd Selction",
          value: dataVal2,
        },
        {
          name: "Programming",
          value: dataVal3,
        },
        {
          name: "Implmnt Prgrms",
          value: dataVal4,
        },
      ]);
    }

    // Bank 4 results UI
    if (banksArr.indexOf(4) >= 0) {
      console.log("data for bank 4 exists");
      if (window.location.hash.includes("qc4")) {
        setIsVerified4(true);
      }
      num = returnUrlDataForBank(4);

      sect1 = 0;
      sect2 = 0;

      for (let i = 0; i < num.length; i++) {
        if (i < 10) {
          sect1 += parseInt(num[i]);
        } else {
          sect2 += parseInt(num[i]);
        }
      }
      dataVal1 = Math.round((33.33 * sect1) / 10);
      dataVal2 = Math.round((33.33 * sect2) / 6);

      setData4([
        {
          name: "Temporary Works",
          value: dataVal1,
        },
        {
          name: "Design Process",
          value: dataVal2,
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

    // Bank 6 results UI
    if (banksArr.indexOf(6) >= 0) {
      console.log("data for bank 6 exists");
      if (window.location.hash.includes("qc6")) {
        setIsVerified6(true);
      }
      num = returnUrlDataForBank(6);

      sect1 = 0;
      sect2 = 0;

      for (let i = 0; i < num.length; i++) {
        if (i < 4) {
          sect1 += parseInt(num[i]);
        } else {
          sect2 += parseInt(num[i]);
        }
      }
      dataVal1 = Math.round((33.33 * sect1) / 4);
      dataVal2 = Math.round((33.33 * sect2) / 10);

      setData6([
        {
          name: "Env. Sustainability",
          value: dataVal1,
        },
        {
          name: "Env. Mgt.",
          value: dataVal2,
        },
      ]);
    }
    // Bank 7 results UI
    if (banksArr.indexOf(7) >= 0) {
      console.log("data for bank 7 exists");
      if (window.location.hash.includes("qc7")) {
        setIsVerified7(true);
      }
      num = returnUrlDataForBank(7);

      sect1 = 0;
      sect2 = 0;

      for (let i = 0; i < num.length; i++) {
        if (i < 3) {
          sect1 += parseInt(num[i]);
        } else {
          sect2 += parseInt(num[i]);
        }
      }
      dataVal1 = Math.round((33.33 * sect1) / 3);
      dataVal2 = Math.round((33.33 * sect2) / 7);

      setData7([
        {
          name: "IT",
          value: dataVal1,
        },
        {
          name: "Information Access",
          value: dataVal2,
        },
      ]);
    }

    // Bank 8 results UI
    if (banksArr.indexOf(8) >= 0) {
      console.log("data for bank 8 exists");
      if (window.location.hash.includes("qc8")) {
        setIsVerified8(true);
      }
      num = returnUrlDataForBank(8);

      sect1 = 0;
      sect2 = 0;

      for (let i = 0; i < num.length; i++) {
        if (i < 3) {
          sect1 += parseInt(num[i]);
        } else {
          sect2 += parseInt(num[i]);
        }
      }
      dataVal1 = Math.round((33.33 * sect1) / 3);
      dataVal2 = Math.round((33.33 * sect2) / 1);

      setData8([
        {
          name: "Business Strategy",
          value: dataVal1,
        },
        {
          name: "Values",
          value: dataVal2,
        },
      ]);
    }
  }, []);

  return (
    <>
      <div className="cardBG">
        <div className="headlineCard wideClear">
          <StatCard
            data1={data1}
            data2={data2}
            data3={data3}
            data4={data4}
            data5={data5}
            data6={data6}
            data7={data7}
            data8={data8}
            show={true}
          ></StatCard>
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
          <StatColumn
            title="Eng. & Design"
            dataToShow={data3}
            id={3}
            isVerified={isVerified3}
          />
          <StatColumn
            title="Planning"
            dataToShow={data4}
            id={4}
            isVerified={isVerified4}
          />
        </div>
      </div>
      <div className="secondRow">
        <div className="resultsCol1">
          <StatColumn
            title="Quality"
            dataToShow={data2}
            id={2}
            isVerified={isVerified2}
          />
          <StatColumn
            title="Sustainability"
            dataToShow={data6}
            id={6}
            isVerified={isVerified6}
          />
        </div>
        <div className="resultsCol2">
          <StatColumn
            title="Digital"
            dataToShow={data7}
            id={7}
            isVerified={isVerified7}
          />
          <StatColumn
            title="Business Understanding"
            dataToShow={data8}
            id={8}
            isVerified={isVerified8}
          />
        </div>
      </div>
      <div className="spacer"></div>
    </>
  );
};

export default Results;
