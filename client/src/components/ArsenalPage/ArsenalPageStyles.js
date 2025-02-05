import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const StyledContainer = styled(Box)({
  color: "white",
  minHeight: "100vh",
  padding: "2rem",
});

export const StyledHeader = styled(Typography)(({ theme }) => ({
  marginTop: "50px",
  fontSize: { xs: "2.5rem", md: "3.5rem" },
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  textAlign: "center",
  marginBottom: "2rem",
  color: "white",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    backgroundColor: "red",
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
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
  },
});

export const StyledWeaponImage = styled("img")({
  width: "100%",
  height: "150px",
  objectFit: "contain",
  borderRadius: "8px",
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  marginBottom: "1rem",
  padding: "0.5rem",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
});

export const StyledWeaponName = styled(Typography)({
  fontWeight: "bold",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
  color: "#222",
  textAlign: "center",
  fontSize: "1.1rem",
});

export const StyledWeaponStats = styled(Box)({
  color: "#555",
  fontSize: "0.95rem",
  textAlign: "center",
  lineHeight: "1.6",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "0.5rem",
  "& .label": {
    color: "#999",
    fontWeight: "normal",
    textAlign: "right",
  },
  "& .value": {
    color: "#222",
    fontWeight: "bold",
    textAlign: "left",
  },
});
