// CountdownTimer.js
import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ onMidnight }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());

  function getTimeUntilMidnight() {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diff = nextMidnight - now;
    return diff > 0 ? diff : 0;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = getTimeUntilMidnight();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        onMidnight(); // Call the function to refresh the task list
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onMidnight]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="countdown-timer">
      <div className="timer">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default CountdownTimer;