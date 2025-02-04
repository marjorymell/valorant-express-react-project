import React from "react";
import Background from "../components/Background/Background";
import ArsenalPage from "../components/ArsenalPage/ArsenalPage";
import { ArsenalProvider } from "../contexts/ArsenalPage";

const Arsenal = () => {
  return (
    <ArsenalProvider>
      <Background>
        <ArsenalPage />
      </Background>
    </ArsenalProvider>
  );
};

export default Arsenal;
