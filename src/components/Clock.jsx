import { useState, useEffect } from "react";

function Clock({ city, timeZone }) {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  function getFormattedTime() {
    const options = {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    if (timeZone) {
      options.timeZone = timeZone;
    }
    return new Date().toLocaleTimeString([], options);
  }

  return (
    <div className="flex items-center justify-center m-10">
      <div className=" w-10/12 h-10/12 overflow-hidden shadow-2xl border-2 mt-45vh p-10 bg-pink-200 text-center rounded-full">
        <h1 className=" border-2 mt-10vh p-10 bg-pink-200 text-center rounded-full text-pink-800 font-mono font-semibold text-xl">
          Current time in {city}: {currentTime} Timezone:{timeZone}
        </h1>
      </div>
    </div>
  );
}

export default Clock;
