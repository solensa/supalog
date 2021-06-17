import React, { useRef } from "react";

const Question = ({ str, id, updateArray, passRef }) => {
  const box = "box" + id;
  const name = "radio" + id;
  const qa = id + "a";
  const qb = id + "b";
  const qc = id + "c";
  const qd = id + "d";
  // const questionRef = useRef(null);

  const onChangeValue = (e, result) => {
    let arr = id.split("q");
    let index = arr[1] - 1;
    // console.log(index);
    updateArray(index, result);
  };

  return (
    <div className="quizItem wideClear transition" id={box} ref={passRef}>
      <h2 className="transition">{str}</h2>

      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qa}
          onChange={(e) => onChangeValue(e, 0)}
        />
        <label for={qa}>
          Do not do it / don't want to do / encourages others not to do / at a
          junior level.
        </label>
        <br />
      </div>
      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qb}
          onChange={(e) => onChangeValue(e, 1)}
        />
        <label for={qb}>
          Do it sometimes, but not always to the correct standard.
        </label>
        <br />
      </div>
      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qc}
          onChange={(e) => onChangeValue(e, 2)}
        />
        <label for={qc}>Do it all the time to the correct standard.</label>
        <br />
      </div>
      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qd}
          onChange={(e) => onChangeValue(e, 3)}
        />
        <label for={qd}>
          Do it all the time to the correct standard and ensure others are doing
          the same (via mentoring / creating systems for people to use etc.).
        </label>
        <br />
      </div>
    </div>
  );
};

export default Question;
