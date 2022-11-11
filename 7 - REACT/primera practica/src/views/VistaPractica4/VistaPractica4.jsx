import { useEffect, useState } from "react";

const View4 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date(), 1000));
    return () => {
      clearInterval(timerID);
    };
  });

  return <div>Son las{time.toLocaleTimeString()}</div>;
};

export default View4;
