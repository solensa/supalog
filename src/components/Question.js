import React, { useState } from "react";

const Question = ({
  str,
  id,
  updateArray,
  passRef,
  tickAns,
  lnMgrTick,
  spvsrTick,
}) => {
  const box = "box" + id;
  const name = "radio" + id;
  const qa = id + "a";
  const qb = id + "b";
  const qc = id + "c";
  const qd = id + "d";
  // const questionRef = useRef(null);
  const [selectedAns, setSelectedAns] = useState(tickAns);

  // useEffect(() => {
  //   setSelectedAns(tickAns);
  //   console.log(id + " : " + selectedAns);
  // }, []);

  const onChangeValue = (e, result) => {
    let arr = id.split("q");
    let index = arr[1] - 1;
    // console.log(e.target.value);
    setSelectedAns(result + 1);
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
          checked={selectedAns === 1 ? true : false}
        />
        <label htmlFor={qa}>
          Do not do it or at a junior level.
          {lnMgrTick === 1 ? <div className="labelMark2">Spvsr.</div> : null}
          {spvsrTick === 1 ? <div className="labelMark">Ln Mgr.</div> : null}
        </label>
        <br />
      </div>
      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qb}
          onChange={(e) => onChangeValue(e, 1)}
          checked={selectedAns === 2 ? true : false}
        />
        <label htmlFor={qb}>
          Do it sometimes, but not always to the correct standard.
          {lnMgrTick === 2 ? <div className="labelMark2">Spvsr.</div> : null}
          {spvsrTick === 2 ? <div className="labelMark">Ln Mgr.</div> : null}
        </label>
        <br />
      </div>
      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qc}
          onChange={(e) => onChangeValue(e, 2)}
          checked={selectedAns === 3 ? true : false}
        />
        <label htmlFor={qc}>
          Do it all the time to the correct standard.
          {lnMgrTick === 3 ? <div className="labelMark2">Spvsr.</div> : null}
          {spvsrTick === 3 ? <div className="labelMark">Ln Mgr.</div> : null}
        </label>
        <br />
      </div>
      <div className="wideClear">
        <input
          type="radio"
          name={name}
          id={qd}
          onChange={(e) => onChangeValue(e, 3)}
          checked={selectedAns === 4 ? true : false}
        />
        <label htmlFor={qd}>
          Do it all the time to the correct standard and ensure others do the
          same via mentoring / creating systems for people to use etc.
          {lnMgrTick === 4 ? <div className="labelMark2">Spvsr.</div> : null}
          {spvsrTick === 4 ? <div className="labelMark">Ln Mgr.</div> : null}
        </label>
        <br />
      </div>
    </div>
  );
};

export default Question;
