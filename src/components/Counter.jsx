import React, { useState } from "react";
import "../styles/counter.css";
let myTimerIntervel = null;
function Counter(props) {
  const [count, setCount] = useState(0);
  const toggleTimer = (bool) => {
    if (bool === true && !myTimerIntervel) {
      myTimerIntervel = setInterval(increment, 1000);
    }
    if (bool === false && myTimerIntervel) {
      clearInterval(myTimerIntervel);
      myTimerIntervel = null;
    }
  };
  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className='counterElement'>
      <h1>{count}</h1>
      <h2>#ID:{props.id}</h2>
      <button
        onClick={() => {
          toggleTimer(true);
        }}>
        START
      </button>
      <button
        onClick={() => {
          toggleTimer(false);
          console.log("stop button pressed");
        }}>
        STOP
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}>
        DELETE
      </button>
    </div>
  );
}

export default Counter;
