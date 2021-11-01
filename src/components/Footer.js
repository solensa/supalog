import "../App.css";
import React, { useState } from "react";
import zilla from "../images/zilla.png";

const Footer = () => {
  const [showRyu, setShowRyu] = useState(false);

  return (
    <div className="wideClear footer">
      <img
        className={showRyu ? "zilla show" : "zilla"}
        src={zilla}
        alt="zilla"
      />
      <p>
        <a
          className="saltlick transition"
          rel="noreferrer"
          href="https://www.laingorourke.com/who-we-are/about-us.aspx"
          target="_blank"
          onMouseEnter={() => setShowRyu(true)}
          onMouseLeave={() => setShowRyu(false)}
        >
          Built in-house by the <span>L&D Lab</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
