import React, { useState } from "react";
import Counter from "../components/Counter";
function Mycounter() {
  const [timerlist, settimerlist] = useState([]);
  const addTimer = () => {
    settimerlist((timerlist) => [
      ...timerlist,
      {
        id: timerlist.length + 1,
        counter: <Counter id={timerlist.length + 1} key={timerlist.length + 1} />,
      },
    ]);
  };
  return (
    <>
      <button onClick={addTimer}>Add timer</button>
      <div className='timerBox'>{timerlist.map((timer) => timer.counter)}</div>
    </>
  );
}

export default Mycounter;
