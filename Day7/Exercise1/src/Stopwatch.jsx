import React, { useState, useEffect, useRef } from 'react';

const formatTime = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
};

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
    setLaps([]);
  };
  const handleLap = () => {
    if (isRunning) {
      setLaps((prev) => [...prev, formatTime(seconds)]);
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>⏱️ Stopwatch</h2>
      <h1>{formatTime(seconds)}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap} disabled={!isRunning}>Lap</button>
      </div>
      {laps.length > 0 && (
        <div style={{ marginTop: '1em' }}>
          <h3>Lap Times</h3>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>Lap {index + 1}: {lap}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;