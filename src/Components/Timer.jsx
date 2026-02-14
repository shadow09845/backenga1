import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, '0  ');

  return (
    <div className="timer-container">
      <div className="timer-unit">
        <span className="unit-label">Days</span>
        <span className="unit-value">{format(time.getDate())}</span>
      </div>
      
      <span className="timer-separator">:</span>

      <div className="timer-unit">
        <span className="unit-label">Hours</span>
        <span className="unit-value">{format(time.getHours())}</span>
      </div>
      
      <span className="timer-separator">:</span>

      <div className="timer-unit">
        <span className="unit-label">Minutes</span>
        <span className="unit-value">{format(time.getMinutes())}</span>
      </div>

      <span className="timer-separator">:</span>

      <div className="timer-unit">
        <span className="unit-label">Seconds</span>
        <span className="unit-value">{format(time.getSeconds())}</span>
      </div>
    </div>
  );
};

export default Timer;