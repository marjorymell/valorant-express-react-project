import React from "react";
import { useBackgroundContext } from "../../contexts/Background";
import { BackgroundContainer, ContentWrapper } from "./BackgroundStyles";

const Background = ({ children }) => {
  const { backgroundColor } = useBackgroundContext();

  return (
    <BackgroundContainer backgroundColor={backgroundColor}>
      <ContentWrapper>{children}</ContentWrapper>
    </BackgroundContainer>
  );
};

export default Background;
