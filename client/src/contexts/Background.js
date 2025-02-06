import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackgroundContext = createContext();

export const useBackgroundContext = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState("white");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      setBackgroundImage("linear-gradient(to bottom, #0A192F, #172A45)");
    } else {
      setBackgroundImage("white");
    }
  }, [location]);

  return (
    <BackgroundContext.Provider value={{ backgroundImage }}>
      {children}
    </BackgroundContext.Provider>
  );
};
