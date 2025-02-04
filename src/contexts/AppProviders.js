import React from "react";
import { NavbarProvider } from "./Navbar";
import { BackgroundProvider } from "./Background";
import { BannerProvider } from "./Banner";
import { FooterProvider } from "./Footer";
import { CarouselProvider } from "./Carousel";

export const AppProviders = ({ children }) => {
  return (
    <BackgroundProvider>
      <BannerProvider>
        <NavbarProvider>
          <FooterProvider>
            <CarouselProvider>{children}</CarouselProvider>
          </FooterProvider>
        </NavbarProvider>
      </BannerProvider>
    </BackgroundProvider>
  );
};
