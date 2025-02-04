import React, { createContext, useContext } from "react";

const FooterContext = createContext();

export const useFooterContext = () => useContext(FooterContext);

export const FooterProvider = ({ children }) => {
  const footerText = "© 2024 Valorant Info | Created by Marjory Mel";
  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "GitHub", path: "https://github.com/marjorymell" },
    { label: "LinkedIn", path: "https://linkedin.com/in/marjorymell" },
  ];

  return (
    <FooterContext.Provider value={{ footerText, footerLinks }}>
      {children}
    </FooterContext.Provider>
  );
};
