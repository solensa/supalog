import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import FadeIn from "react-fade-in";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 30 },
];
const COLORS = ["#50a684", "#e6e6e6"];

const Results = () => {
  const style = { color: "#50a684" };

  return (
    <>
      <PieChart width={400} height={100}>
        <Pie
          stroke="none"
          cy={100}
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={63}
          outerRadius={80}
          fill="#000"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <FadeIn>
        <div className="pieChartText" style={style}>
          {Math.round((100 * data[0].value) / (data[0].value + data[1].value))}
        </div>
      </FadeIn>
    </>
  );
};

export default Results;
