import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const increaseCount = () => {
    setCount(prev => prev + 1);
  }

  const toggleTime = () => {
    if (isStart) { // Already Started, will be paused
      setIsStart(false);
      clearInterval(intervalId);
    } else { // Already Paused, will be started
      const intrvlId = setInterval(increaseCount, 1000);
      setIntervalId(intrvlId);
      setIsStart(true);
    }
  }

  const resetTime = () => {
    setCount(0);
    clearInterval(intervalId);
  }

  return (
    <div className="App">
      <h1>
        {count}
      </h1>
      <button onClick={() => toggleTime()}>{isStart ? 'PAUSE' : 'START'}</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => resetTime()}>RESET</button>
    </div>
  );
}