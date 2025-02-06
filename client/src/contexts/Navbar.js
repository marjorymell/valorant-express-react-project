import React, { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (location.pathname === "/") {
        setIsScrolled(offset > 50);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <NavbarContext.Provider value={{ isScrolled }}>
      {children}
    </NavbarContext.Provider>
  );
};