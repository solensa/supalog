import React, { useState } from "react";
import StatCard from "./StatCard";
import StatColumn from "./StatColumn";
const Results = () => {
  const data = [
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
  ];
  const data2 = [
    {
      name: "Page A",
      value: 100,
    },
    {
      name: "Page B",
      value: 70,
    },
    {
      name: "Page C",
      value: 40,
    },
    {
      name: "Page D",
      value: 77,
    },
    {
      name: "Page E",
      value: 88,
    },
    {
      name: "Page F",
      value: 88,
    },
    {
      name: "Page G",
      value: 64,
    },
  ];
  const data3 = [
    {
      name: "Safety",
      value: 88,
    },
    {
      name: "Occupational Health",
      value: 30,
    },
  ];
  const data4 = [
    {
      name: "Page A",
      value: 100,
    },
    {
      name: "Page B",
      value: 30,
    },
    {
      name: "Page C",
      value: 20,
    },
    {
      name: "Page D",
      value: 77,
    },
    {
      name: "Page E",
      value: 18,
    },
    {
      name: "Page F",
      value: 88,
    },
  ];
  return (
    <>
      <div className="headlineCard wideClear">
        <StatCard></StatCard>
      </div>

      <div className="firstRow">
        <StatColumn title="Health, Safety & Wellbeing" data2={data} />
        <StatColumn title="Leadership & Mgt." data2={data2} />
        <StatColumn title="Quality" data2={data3} />
        <StatColumn title="Planning" data2={data4} />
      </div>
      <div className="secondRow">
        <StatColumn title="Eng. & Design" data2={data} />
        <StatColumn title="Sustainability" data2={data2} />
        <StatColumn title="Digital" data2={data3} />
        <StatColumn title="Business Understanding" data2={data4} />
      </div>
    </>
  );
};

export default Results;
