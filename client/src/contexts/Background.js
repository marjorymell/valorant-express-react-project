import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BackgroundContext = createContext();

export const useBackgroundContext = () => useContext(BackgroundContext);

export const BackgroundProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState("white");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setBackgroundImage("white");
    } else {
      setBackgroundImage("linear-gradient(to bottom, #000000, #253f58)");
    }
  }, [location]);

  return (
    <BackgroundContext.Provider value={{ backgroundImage }}>
      {children}
    </BackgroundContext.Provider>
  );
};
