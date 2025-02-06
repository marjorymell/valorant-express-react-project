import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const StyledContainer = styled(Box)({
  color: "black",
  minHeight: "100vh",
  padding: "2rem",
});

export const StyledHeader = styled(Typography)(({ theme }) => ({
  marginTop: "80px",
  fontSize: { xs: "2.5rem", md: "3.5rem" },
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textAlign: "center",
  marginBottom: "2rem",
  color: "black",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    backgroundColor: "#FF4655",
  },
}));

export const StyledWeaponsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  justifyContent: "center",
  padding: "1rem",
  marginTop: "2rem",
});

export const StyledWeaponCard = styled(Box)({
  borderRadius: "12px",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  backdropFilter: "blur(10px)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
  },
});

export const StyledWeaponImage = styled("img")({
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  height: "150px",
  objectFit: "contain",
  borderRadius: "8px",
  marginBottom: "1rem",
  padding: "0.5rem",
});

export const StyledWeaponName = styled(Typography)({
  fontWeight: "bold",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
  color: "black",
  textAlign: "center",
  fontSize: "1.1rem",
});

export const StyledWeaponStats = styled(Box)({
  color: "rgba(0, 0, 0, 0.8)",
  fontSize: "0.95rem",
  textAlign: "center",
  lineHeight: "1.6",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "0.5rem",
  "& .label": {
    color: "rgba(0, 0, 0, 0.6)",
    fontWeight: "normal",
    textAlign: "right",
  },
  "& .value": {
    color: "rgba(0, 0, 0, 0.6)",
    textAlign: "left",
  },
});