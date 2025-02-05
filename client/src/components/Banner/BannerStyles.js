import { styled, keyframes } from "@mui/material/styles";

const moveBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const BannerContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const AnimatedBackground = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(45deg, #0e1822, #253f58, #112d40, #0f202d, #253f58)",
  backgroundSize: "600% 600%",
  animation: `${moveBackground} 18s ease-in-out infinite`,
});

export const Image = styled("img")({
  position: "absolute",
  zIndex: 1,
  "&.valorant-logo": {
    top: "40%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "533px",
    height: "90px",
    maxWidth: "100%",
  },
  "&.info-image": {
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "247px",
    height: "90px",
    maxWidth: "100%",
  },
  "@media (max-width: 768px)": {
    "&.valorant-logo": {
      width: "266.5px",
      height: "45px",
      top: "15%",
    },
    "&.info-image": {
      width: "123.5px",
      height: "45px",
      top: "30%",
    },
  },
});

export const StartButton = styled("button")({
  position: "absolute",
  bottom: "15%",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "12px 24px",
  fontSize: "1.4rem",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "#0d0d0d",
  },
  "@media (max-width: 768px)": {
    fontSize: "1rem",
    padding: "10px 20px",
    bottom: "10%",
  },
});
