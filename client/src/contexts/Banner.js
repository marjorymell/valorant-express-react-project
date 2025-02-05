import React, { createContext, useContext, useState } from "react";
import valorant from "../assets/images/Home/valorant.png";
import info from "../assets/images/Home/info.png";

const BannerContext = createContext();

export const useBannerContext = () => useContext(BannerContext);

export const BannerProvider = ({ children }) => {
  const [bannerImages, setBannerImages] = useState({
    valorant: valorant,
    info: info,
  });

  const [buttonText, setButtonText] = useState("START");

  const updateBannerImages = (newImages) => {
    setBannerImages({ ...bannerImages, ...newImages });
  };

  const updateButtonText = (newText) => {
    setButtonText(newText);
  };

  return (
    <BannerContext.Provider
      value={{ bannerImages, buttonText, updateBannerImages, updateButtonText }}
    >
      {children}
    </BannerContext.Provider>
  );
};
