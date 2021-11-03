import React, { useState, useEffect } from "react";
import "./StatCard.css";

const StatCard = ({
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  show,
}) => {
  // const cardRef = useRef();
  const [showCard, setShowCard] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowCard(true);
    }, 800);
  }, [show]);

  let overallAvgScore = 0,
    avgScore1 = 0,
    avgScore2 = 0,
    avgScore3 = 0,
    avgScore4 = 0,
    avgScore5 = 0,
    avgScore6 = 0,
    avgScore7 = 0,
    avgScore8 = 0,
    avgDenominator = 1;

  for (let i = 0; i < data1.length; i++) {
    avgScore1 = avgScore1 + data1[i].value;
  }
  for (let i = 0; i < data2.length; i++) {
    avgScore2 = avgScore2 + data2[i].value;
  }
  for (let i = 0; i < data3.length; i++) {
    avgScore3 = avgScore3 + data3[i].value;
  }
  for (let i = 0; i < data4.length; i++) {
    avgScore4 = avgScore4 + data4[i].value;
  }
  for (let i = 0; i < data5.length; i++) {
    avgScore5 = avgScore5 + data5[i].value;
  }
  for (let i = 0; i < data6.length; i++) {
    avgScore6 = avgScore6 + data6[i].value;
  }
  for (let i = 0; i < data7.length; i++) {
    avgScore7 = avgScore7 + data7[i].value;
  }
  for (let i = 0; i < data8.length; i++) {
    avgScore8 = avgScore8 + data8[i].value;
  }

  if (avgScore1 !== 0) {
    avgScore1 = Math.round(avgScore1 / data1.length) + 10;
    avgDenominator += 1;
  }
  if (avgScore2 !== 0) {
    avgScore2 = Math.round(avgScore2 / data2.length) + 10;
    avgDenominator += 1;
  }
  if (avgScore3 !== 0) {
    avgScore3 = Math.round(avgScore3 / data3.length) + 10;
    avgDenominator += 1;
  }
  if (avgScore4 !== 0) {
    avgScore4 = Math.round(avgScore4 / data4.length) + 10;
    avgDenominator += 1;
  }
  if (avgScore5 !== 0) {
    avgScore5 = Math.round(avgScore5 / data5.length) + 10;
    avgDenominator += 1;
  }
  if (avgScore6 !== 0) {
    avgScore6 = Math.round(avgScore6 / data6.length) + 10;
    avgDenominator += 1;
  }
  if (avgScore7 !== 0) {
    avgScore7 = Math.round(avgScore7 / data7.length) + 10;
    avgDenominator += 1;
  }
  if (avgScore8 !== 0) {
    avgScore8 = Math.round(avgScore8 / data8.length) + 10;
    avgDenominator += 1;
  }
  avgScore5 = Math.round(avgScore5 / data5.length) + 10;

  overallAvgScore =
    (avgScore1 +
      avgScore2 +
      avgScore3 +
      avgScore4 +
      avgScore5 +
      avgScore6 +
      avgScore7 +
      avgScore8) /
    avgDenominator;

  return (
    <>
      <div id="card" className={showCard ? "active" : ""}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 350">
          <clipPath id="svgPath">
            <path
              fill="#000"
              d="M265.3 53.9a33.3 33.3 0 0 1-17.8-5.5 32 32 0 0 1-13.7-22.9c-.2-1.1-.4-2.3-.4-3.4 0-1.3-1-1.5-1.8-1.9a163 163 0 0 0-31-11.6A257.3 257.3 0 0 0 133.7 0a254.9 254.9 0 0 0-67.1 8.7 170 170 0 0 0-31 11.6c-.8.4-1.8.6-1.8 1.9 0 1.1-.2 2.3-.4 3.4a32.4 32.4 0 0 1-13.7 22.9A33.8 33.8 0 0 1 2 53.9c-1.5.1-2.1.4-2 2v293.9c0 3.3 0 6.6.4 9.9a22 22 0 0 0 7.9 14.4c3.8 3.2 8.3 5.3 13 6.8 12.4 3.9 24.8 7.5 37.2 11.5a388.7 388.7 0 0 1 50 19.4 88.7 88.7 0 0 1 25 15.5v.1-.1c7.2-7 16.1-11.3 25-15.5a427 427 0 0 1 50-19.4l37.2-11.5c4.7-1.5 9.1-3.5 13-6.8 4.5-3.8 7.2-8.5 7.9-14.4.4-3.3.4-6.6.4-9.9V231.6 60.5v-4.6c.4-1.6-.3-1.9-1.7-2z"
            />
          </clipPath>
        </svg>
        <div id="card-inner">
          <div id="card-top">
            <div className="info">
              <div className="value">{overallAvgScore}</div>
              <div className="position">supa</div>
              <div className="country">
                <div></div>
              </div>
            </div>

            <div className="image"></div>
            <div className="backfont">LAING O'ROURKE</div>
          </div>
          <div id="card-bottom">
            <div className="name">You</div>
            <div className="stats">
              <div>
                <ul>
                  <li>
                    <span>{avgScore5}</span>
                    <span>hsw</span>
                  </li>
                  <li>
                    <span>{avgScore1 === 0 ? "--" : avgScore1}</span>
                    <span>L&M</span>
                  </li>
                  <li>
                    <span>{avgScore2 === 0 ? "--" : avgScore2}</span>
                    <span>qlt</span>
                  </li>
                  <li>
                    <span>{avgScore3 === 0 ? "--" : avgScore3}</span>
                    <span>pln</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <span>{avgScore4 === 0 ? "--" : avgScore4}</span>
                    <span>e&d</span>
                  </li>
                  <li>
                    <span>{avgScore6 === 0 ? "--" : avgScore6}</span>
                    <span>sus</span>
                  </li>
                  <li>
                    <span>{avgScore7 === 0 ? "--" : avgScore7}</span>
                    <span>dig</span>
                  </li>
                  <li>
                    <span>{avgScore8 === 0 ? "--" : avgScore8}</span>
                    <span>buu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatCard;
