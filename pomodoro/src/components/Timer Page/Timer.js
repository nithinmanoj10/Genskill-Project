import React, { useState, useEffect } from "react";
import ControlButton from "./ControlButton";
import TimeButton from "./TimeButton";

import StartSound from "../../sounds/start-sound.wav";
import EndSound from "../../sounds/end-sound.wav";

function Timer(props) {
  const statsData = JSON.parse(localStorage.getItem("statsData") || "[]")[0];

  const [minutes, setMinutes] = useState(props.activeTime);
  const [seconds, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0);

  const [currentBlock, setCurrentBlock] = useState(props.currentBlock);
  const [totalBlocks, settotalBlocks] = useState(props.blocks);

  const [isRunning, setIsRunning] = useState(false);
  const [isReseted, setIsReseted] = useState(true);

  // total active time for this session
  const [sessionTime, setSessionTime] = useState(0);

  const { activeTime, shortBreak, longBreak } = props;
  const { currentSession, setCurrentSession } = props;
  const { isSession, setIsSession } = props;
  const { setTimerIsStarted } = props;

  useEffect(() => {
    let intervalId;

    if (isRunning === true) {
      setTimerIsStarted(true);
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes(minutes - 1);
            setSeconds(59);

            if (isSession === true) {
              setSessionTime(sessionTime + 1);
            }
          } else {
            const endSound = new Audio(EndSound);
            endSound.play();

            if (isSession === true) {
              currentSession.currentInterval = currentBlock + 1;
              setCurrentSession(currentSession);
              setCurrentBlock((currentBlock) => currentBlock + 1);
              setIsReseted(false);
              setIsSession(false);

              if (currentBlock + 1 == totalBlocks) {
                currentSession.isFinished = true;
              }

              // update the tagsData in localstorage, by updating the tag time with sessionTime
              const tagsData = JSON.parse(localStorage.getItem("tagsData"));

              const updatedTagsData = tagsData.map(function (tag) {
                console.log(tag, currentSession);
                if (tag.name === currentSession.tag) {
                  // updating totalActiveTime in localStorage
                  statsData.time.totalActiveTime += sessionTime;

                  // checking for streaks
                  const currentDay = statsData.days.currentDay;
                  if (currentDay == "-") {
                    const d = new Date();
                    currentDay = d.toDateString();
                  } else {
                    const d = new Date();
                    const today = d.toDateString();
                    const diff = Date.parse(today) - Date.parse(currentDay);
                    if (today !== currentDay) {
                      if (diff <= 86400000) {
                        statsData.days.streak += 1;
                      } else {
                        statsData.days.streak = 0;
                      }
                      statsData.days.currentDay = today;
                    }
                  }

                  const updatedStatsData = [];
                  updatedStatsData.push(statsData);
                  localStorage.setItem(
                    "statsData",
                    JSON.stringify(updatedStatsData)
                  );

                  tag.tagTotalTime = tag.tagTotalTime + sessionTime;
                  setSessionTime(0);
                }
                return tag;
              });

              localStorage.setItem("tagsData", JSON.stringify(updatedTagsData));
            }

            setIsRunning(false);
            return;
          }
        } else {
          setSeconds(seconds - 1);
          if (isSession === true) {
            setSessionTime(sessionTime + 1);
          }
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
    if (isRunning === false) {
      setIsSession(true);
      setMinutes(activeTime);
      setSeconds(0);
      setIsReseted(true);
    }
  };

  const shortBreakHandle = function () {
    if (isRunning === false) {
      setIsSession(false);
      setMinutes(shortBreak);
      setSeconds(0);
      setIsReseted(true);
    }
  };

  const longBreakHandle = function () {
    if (isRunning === false) {
      setIsSession(false);
      setMinutes(longBreak);
      setSeconds(0);
      setIsReseted(true);
    }
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
          className="button button--basic"
          onClick={startHandle}
        >
          Start
        </a>
        <a
          href="javascript:void(0)"
          className="button button--basic"
          onClick={pauseHandle}
        >
          Pause
        </a>
      </div>

      <div class="timerpage__buttons">
        <a
          href="javascript:void(0)"
          className="pomodoro-controls"
          onClick={pomodoroHandle}
        >
          <h4>Pomodoro</h4>
        </a>
        <a
          href="javascript:void(0)"
          className="pomodoro-controls"
          onClick={shortBreakHandle}
        >
          <h4>Short Break</h4>
        </a>
        <a
          href="javascript:void(0)"
          className="pomodoro-controls"
          onClick={longBreakHandle}
        >
          <h4>Long Break</h4>
        </a>
      </div>
    </div>
  );
}

export default Timer;
