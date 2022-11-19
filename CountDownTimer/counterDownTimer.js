import React, { Fragment, useState } from "react";

function App() {
  const [timer, setTimer] = useState({
    min: 0,
    sec: 0,
    count: 0,
    isStarted: false
  });
  const [timerIntervalId, setTimerIntervalId] = useState(null);
  let hasStarted = timerIntervalId !== null; // check timer state

  const onChangeInput = (e, type) => {
    const val = parseInt(e.target.value);
    if (timer.isStarted || isNaN(val) || val < 0 || (type === "s" && val > 59)) {
      return;
    }

    let min = timer.min;
    let sec = timer.sec;
    if (type == "m") {
      min = val;
    } else {
      sec = val;
    }

    setTimer((prev) => ({
      ...prev,
      min: min,
      sec: sec,
      count: min * 60 + sec
    }))
  };

  const onClickReset = () => {
    setTimer((prev) => ({
      ...prev,
      min: 0,
      sec: 0,
      count: 0,
      isStarted: false
    }));
    clearInterval(timerIntervalId);
  }

  const onClickStart = (e) => {
    setTimer((prev) => ({
      ...prev,
      isStarted: true
    }));

    const newIntervalId = setInterval(() => {
      setTimer((prev) => ({
        ...prev,
        count: prev.count > 0 ? prev.count - 1 : 0
      }));
      clearInterval(timerIntervalId);
    }, 1000);
    setTimerIntervalId(newIntervalId);
  };

  const onClickToggle = (e) => {
    if (hasStarted) {
      if (timerIntervalId) {
        setTimer((prev) => ({
          ...prev,
          isStarted: false
        }));
        clearInterval(timerIntervalId);
      }
      setTimerIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimer((prev) => ({
          ...prev,
          count: prev.count > 0 ? prev.count - 1 : 0,
          isStarted: true
        }));
        clearInterval(timerIntervalId);
      }, 1000);
      setTimerIntervalId(newIntervalId);
    }
  };

  let mint = parseInt(timer.count / 60);
  let sec = parseInt(timer.count % 60);

  return (
    <Fragment>
      <h1 data-testid="running-clock">
        {mint.toString().length !== 2 ? "0" + mint : mint}:
        {sec.toString().length !== 2 ? "0" + sec : sec}
      </h1>
      
      <label>
        <input
          type="number"
          onChange={(e) => onChangeInput(e, "m")}
          value={timer.min}
        />
        Minutes
      </label><br/>
      <label>
        <input
          type="number"
          onChange={(e) => onChangeInput(e, "s")}
          value={timer.sec}
        />
        Seconds
      </label><br/><br/>

      <button onClick={onClickStart} disabled={timer.isStarted}>START</button>
      <button onClick={onClickToggle}>PAUSE / RESUME</button>
      <button onClick={onClickReset}>RESET</button>
    </Fragment>
  );
}

export default App;
