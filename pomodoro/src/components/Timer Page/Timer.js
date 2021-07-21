import React, { useState, useEffect } from "react";
import ControlButton from "./ControlButton";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(10);
  const [currentSession, setCurrentSession] = useState(0);
  const [totalSession, setTotalSession] = useState(8);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setCurrentSession(currentSession + 1);
          return;
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  return (
    <div className="timer">
      <h1 className="timer__value">
        {minutes < 10 ? "0" : ""}
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </h1>
      <p className="timer__session">
        {currentSession}/{totalSession}
      </p>
      <button>Start</button>
    </div>
  );
}

export default Timer;
