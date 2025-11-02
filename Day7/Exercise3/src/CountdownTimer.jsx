import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const DEFAULT_TARGET = new Date('2025-10-01T00:00:00');
  const [targetDate, setTargetDate] = useState(DEFAULT_TARGET);
  const [timeLeft, setTimeLeft] = useState({});
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setEventStarted(true);
        setTimeLeft({});
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    if (!isNaN(newDate)) {
      setTargetDate(newDate);
      setEventStarted(false);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '1em' }}>
      <h2>🎉 Countdown to Independence Day</h2>

      {eventStarted ? (
        <h1>Event Started!</h1>
      ) : (
        <h1>
          {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds
        </h1>
      )}

      <p>{targetDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div style={{ marginTop: '1em' }}>
        <label>
          Set Custom Target Date:{' '}
          <input
            type="datetime-local"
            onChange={handleDateChange}
            style={{ padding: '0.3em', fontSize: '1em' }}
          />
        </label>
      </div>
    </div>
  );
};

export default CountdownTimer;