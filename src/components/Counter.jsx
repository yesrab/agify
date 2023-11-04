import React, { useState } from "react";
import "../styles/counter.css";
function Counter(props) {
  const [count, setCount] = useState(0);
  const [timerid, setTimerid] = useState(null);
  const toggleTimer = (bool) => {
    if (bool === true && !timerid) {
      setTimerid(setInterval(increment, 1000));
    }
    if (bool === false && timerid) {
      clearInterval(timerid);
      setTimerid(null);
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
          toggleTimer(false);
          setCount(0);
        }}>
        RESET
      </button>
    </div>
  );
}

export default Counter;
