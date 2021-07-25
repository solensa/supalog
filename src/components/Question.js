import React, { useRef } from "react";

const Question = ({ str, id, updateArray, passRef, tickAns }) => {
  const box = "box" + id;
  const name = "radio" + id;
  const qa = id + "a";
  const qb = id + "b";
  const qc = id + "c";
  const qd = id + "d";
  // const questionRef = useRef(null);
  const [selectedAns, setSelectedAns] = React.useState(0);

  const onChangeValue = (e, result) => {
    let arr = id.split("q");
    let index = arr[1] - 1;
    // console.log(e.target.value);
    setSelectedAns(result + 1);
    updateArray(index, result);
  };

  console.log(tickAns);

  return (
    <div className="quizItem wideClear transition" id={box} ref={passRef}>
      <h2 className="transition">{str}</h2>

      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qa}
          onChange={(e) => onChangeValue(e, 0)}
          checked={tickAns == 1 || selectedAns == 1 ? true : false}
        />
        <label htmlFor={qa}>Do not do it or at a junior level.</label>
        <br />
      </div>
      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qb}
          onChange={(e) => onChangeValue(e, 1)}
          checked={tickAns == 2 || selectedAns == 2 ? true : false}
        />
        <label htmlFor={qb}>
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
          checked={tickAns == 3 || selectedAns == 3 ? true : false}
        />
        <label htmlFor={qc}>Do it all the time to the correct standard.</label>
        <br />
      </div>
      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qd}
          onChange={(e) => onChangeValue(e, 3)}
          checked={tickAns == 4 || selectedAns == 4 ? true : false}
        />
        <label htmlFor={qd}>
          Do it all the time to the correct standard and ensure others do the
          same via mentoring / creating systems for people to use etc.
        </label>
        <br />
      </div>
    </div>
  );
};

export default Question;
