import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";

export const StyledHeader = styled(Typography)(({ theme }) => ({
  marginTop: "80px",
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

export const Container = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 16,
  padding: 24,
});

export const CardImageContainer = styled(Box)({
  position: "relative",
  height: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "8px 8px 0 0",
});
