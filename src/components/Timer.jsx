import React, { useState, useEffect } from "react";

function Timer({ duration }) {
  const [time, setTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => (prevTime > 1 ? prevTime - 1000 : 0));
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  const handleToggle = () => {
    if (time > 0) {
      setIsRunning((prevIsRunning) => !prevIsRunning);
    }
  };

  const getFormattedTime = (milliseconds) => {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);

    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className=" w-10/12 h-10/12 overflow-hidden shadow-2xl border-2 mt-45vh p-10 bg-teal-200 text-center rounded-full">
        <div className="bg-teal-200 border-2 mt-10vh p-10  text-center rounded-full text-teal-900 font-mono font-semibold text-xl">
          {getFormattedTime(time)}
          <button
            className="block mx-auto border-2 bg-purple-200 rounded-xl p-1 mt-4"
            onClick={handleToggle}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
