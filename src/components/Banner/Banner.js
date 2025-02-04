import React from "react";
import { useBannerContext } from "../../contexts/Banner";
import {
  BannerContainer,
  StartButton,
  Image,
  AnimatedBackground,
} from "./BannerStyles";

const Banner = () => {
  const { bannerImages, buttonText } = useBannerContext();

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <BannerContainer>
      <AnimatedBackground />
      <Image
        src={bannerImages.valorant}
        alt="Valorant"
        className="valorant-logo"
      />
      <Image src={bannerImages.info} alt="Info" className="info-image" />
      <StartButton onClick={scrollDown}>{buttonText}</StartButton>
    </BannerContainer>
  );
};

export default Banner;
