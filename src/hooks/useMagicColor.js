import { useEffect, useState } from "react";

function getRandomColor() {
  const colorList = ["red", "green", "blue", "pink", "orange", "yellow"];
  const colorRandom = colorList[Math.trunc(Math.random() * colorList.length)];
}
function useMagicColor() {
  const [color, setColor] = useState("transparent");
  useEffect(() => {
    const colorInterval = setInterval(() => {}, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  });
}
