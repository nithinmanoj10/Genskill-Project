import React, { useState, useEffect } from "react";
import ControlButton from "./ControlButton";
import TimeButton from "./TimeButton";

function Timer(props) {
  const [minutes, setMinutes] = useState(props.activeTime);
  const [seconds, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0);

  const [currentBlock, setCurrentBlock] = useState(props.currentBlock);
  const [totalBlocks, settotalBlocks] = useState(props.blocks);

  const [isRunning, setIsRunning] = useState(false);
  const [isReseted, setIsReseted] = useState(true);

  const { activeTime, shortBreak, longBreak } = props;
  const { currentSession, setCurrentSession } = props;
  const { isSession, setIsSession } = props;

  useEffect(() => {
    let intervalId;

    if (isRunning === true) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (isSession === true) {
              currentSession.currentInterval = currentBlock + 1;
              setCurrentSession(currentSession);
              setCurrentBlock((currentBlock) => currentBlock + 1);
              setIsReseted(false);

              console.log(currentBlock, totalBlocks, currentSession.isFinished);

              if (currentBlock + 1 == totalBlocks) {
                currentSession.isFinished = true;
              }

              console.log(currentBlock, totalBlocks, currentSession.isFinished);
            }

            setIsRunning(false);
            return;
          }
        } else {
          setSeconds(seconds - 1);
        }

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, counter]);

  const startHandle = function () {
    if (currentSession.isFinished !== true && isReseted == true) {
      setIsRunning(true);
    }
  };

  const pauseHandle = function () {
    if (currentSession.isFinished !== true) {
      setIsRunning(false);
    }
  };

  const pomodoroHandle = function () {
    setIsSession(true);
    setMinutes(activeTime);
    setSeconds(0);
    setIsReseted(true);
  };

  const shortBreakHandle = function () {
    setIsSession(false);
    setMinutes(shortBreak);
    setSeconds(0);
    setIsReseted(true);
  };

  const longBreakHandle = function () {
    setIsSession(false);
    setMinutes(longBreak);
    setSeconds(0);
    setIsReseted(true);
  };

  return (
    <div className="timer">
      <h1 className="timer__value">
        {minutes < 10 ? "0" : ""}
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </h1>
      <p className="timer__session">
        {currentBlock}/{totalBlocks}
      </p>
      <div className="timerpage__controls">
        <a
          href="javascript:void(0)"
          className="button button--cancel"
          onClick={startHandle}
        >
          Start
        </a>
        <a
          href="javascript:void(0)"
          className="button button--cancel"
          onClick={pauseHandle}
        >
          Pause
        </a>
      </div>

      <div class="timerpage__buttons">
        <a
          href="javascript:void(0)"
          className="button button--basic"
          onClick={pomodoroHandle}
        >
          Pomodoro
        </a>
        <a
          href="javascript:void(0)"
          className="button button--basic"
          onClick={shortBreakHandle}
        >
          Short Break
        </a>
        <a
          href="javascript:void(0)"
          className="button button--basic"
          onClick={longBreakHandle}
        >
          Long Break
        </a>
      </div>
    </div>
  );
}

export default Timer;
