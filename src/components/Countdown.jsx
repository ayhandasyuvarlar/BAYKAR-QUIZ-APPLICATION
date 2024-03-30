import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Countdown = ({ totalTime, onTimeout, setDisabled }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [hasTimedOut, setHasTimedOut] = useState(false);

  useEffect(() => {
    setTimeLeft(totalTime);
    setHasTimedOut(false);

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 20) {
          setDisabled(false);
        }
        if (prevTimeLeft === 0 && !hasTimedOut) {
          setHasTimedOut(true);
          clearInterval(timer);
          onTimeout();
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [totalTime, onTimeout, hasTimedOut, setDisabled]);

  return (
    <div
      className={`text-3xl font-bold ${
        timeLeft === 0 ? "text-red-500" : "text-green-500"
      }`}
    >
      {timeLeft < 10 ? `0${timeLeft}` : timeLeft} saniye
    </div>
  );
};

export default Countdown;
