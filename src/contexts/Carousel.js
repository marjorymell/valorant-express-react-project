import React, { createContext, useContext, useState } from "react";

const CarouselContext = createContext();

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(
      "useCarouselContext must be used within a CarouselProvider"
    );
  }
  return context;
};

export const CarouselProvider = ({ children }) => {
  const [carouselSettings, setCarouselSettings] = useState({
    agent: { itemWidth: 200, itemHeight: 320, itemsToShow: 5, gap: 20 },
    arsenal: { itemWidth: 255, itemHeight: 200, itemsToShow: 4, gap: 20 },
    maps: { itemWidth: 525, itemHeight: 300, itemsToShow: 2, gap: 20 },
  });

  const [cardSettings, setCardSettings] = useState({
    backgroundColor: "#f0f0f0",
    borderColor: "#e0e0e0",
    borderWidth: "1px",
    textColor: "#ff4655",
  });

  const updateSettings = (
    type,
    newSettings,
    settingsKey = "carouselSettings"
  ) => {
    if (settingsKey === "carouselSettings") {
      setCarouselSettings((prev) => ({
        ...prev,
        [type]: { ...prev[type], ...newSettings },
      }));
    } else if (settingsKey === "cardSettings") {
      setCardSettings((prev) => ({ ...prev, ...newSettings }));
    }
  };

  return (
    <CarouselContext.Provider
      value={{
        carouselSettings,
        cardSettings,
        updateSettings,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
