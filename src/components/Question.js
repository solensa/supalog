import React from "react";

const Question = ({ str }) => {
  return (
    <div className="quizItem wideClear transition" id="box1">
      <h2 className="transition">{str}</h2>

      <div className="wideClear">
        <input type="radio" name="radio1" id="q1a" />
        <label for="q1a">
          Emphasise the use of uniform procedures and the necessity for task
          accomplishment.
        </label>
        <br />
      </div>
      <div className="wideClear">
        <input type="radio" name="radio1" id="q1b" />
        <label for="q1b">
          Make yourself available for discussion but do not push.
        </label>
        <br />
      </div>
      <div className="wideClear">
        <input type="radio" name="radio1" id="q1c" />
        <label for="q1c">Talk with team members and then set goals.</label>
        <br />
      </div>
      <div className="wideClear">
        <input type="radio" name="radio1" id="q1d" />
        <label for="q1d">Be careful not to get involved.</label>
        <br />
      </div>
    </div>
  );
};

export default Question;
