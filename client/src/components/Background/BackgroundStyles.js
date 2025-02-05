import { styled } from "@mui/material";
import { useBackgroundContext } from "../../contexts/Background";

export const BackgroundContainer = styled("div")(() => {
  const { backgroundImage } = useBackgroundContext();

  return {
    minHeight: "100vh",
    backgroundImage: backgroundImage,
    display: "flex",
    flexDirection: "column",
  };
});

export const ContentWrapper = styled("div")(() => ({
  flex: 1,
}));
