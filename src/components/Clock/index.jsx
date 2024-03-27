import React from "react";
import UseClock from "../../hooks/useClock";

const Clock = () => {
  const newTime = UseClock();
  return <div>{newTime}</div>;
};

export default Clock;
