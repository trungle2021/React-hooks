import { useEffect, useState } from "react";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const newTime = formatCurrentTime();
      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return time;
}

const formatCurrentTime = () => {
  const hours = `0${new Date().getHours()}`.slice(-2);
  const minutes = `0${new Date().getMinutes()}`.slice(-2);
  const seconds = `0${new Date().getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};

export default useClock;
