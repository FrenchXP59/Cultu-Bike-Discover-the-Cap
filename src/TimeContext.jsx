// src/TimeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const TimeContext = createContext();

export function TimeProvider({ children }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TimeContext.Provider value={{ time }}>
      {children}
    </TimeContext.Provider>
  );
}