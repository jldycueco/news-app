import React, { useState, useEffect } from 'react';

const GetTime = () => {
  const initialTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(initialTime);
  const date = new Date().toLocaleDateString();

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <div>{date}</div>
      <div>{time}</div>
    </>
  );
};

export default GetTime;
