import React, { useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis } from "recharts";
import FadeIn from "react-fade-in";

const WIDTH = 170;

const StatColumn = ({ title, data2 }) => {
  let HEIGHT = data2.length * 45.875;
  if (data2.length >= 6) {
    HEIGHT = 420;
  }

  let avgScore = 0;
  for (let i = 0; i < data2.length; i++) {
    avgScore = avgScore + data2[i].value;
  }
  avgScore = avgScore / data2.length;
  const data = [
    { name: "Category score / 100", value: avgScore },
    { name: "Remaining", value: 100 - avgScore },
  ];

  const CustomLabel = ({ x, y, name, value }) => {
    y = y - 21;
    return (
      <g>
        <foreignObject x={x} y={y} width={WIDTH - 40} height={30}>
          <div className="barLabel">{name}</div>
          <div className="barLabel2">{value}</div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className="resultColumn">
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
            index == 0 ? (
              <Cell
                key={`cell-${index}`}
                fill={
                  Math.round(
                    (100 * data[0].value) / (data[0].value + data[1].value)
                  ) >= 75
                    ? "#50A684"
                    : Math.round(
                        (100 * data[0].value) / (data[0].value + data[1].value)
                      ) >= 25
                    ? "#F1C050"
                    : "#F7645C"
                }
              />
            ) : (
              <Cell key={`cell-${index}`} fill={"#eee"} />
            )
          )}
        </Pie>
      </PieChart>
      <FadeIn>
        <div
          className="pieChartText"
          style={{
            color:
              Math.round(
                (100 * data[0].value) / (data[0].value + data[1].value)
              ) >= 75
                ? "#50A684"
                : Math.round(
                    (100 * data[0].value) / (data[0].value + data[1].value)
                  ) >= 25
                ? "#F1C050"
                : "#F7645C",
          }}
        >
          {Math.round((100 * data[0].value) / (data[0].value + data[1].value))}
        </div>
        <BarChart
          layout="vertical"
          width={WIDTH - 30}
          height={HEIGHT}
          data={data2}
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
            {data2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  data2[index].value >= 75
                    ? "#50A684"
                    : data2[index].value >= 25
                    ? "#F1C050"
                    : "#F7645C"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </FadeIn>
    </div>
  );
};

export default StatColumn;
