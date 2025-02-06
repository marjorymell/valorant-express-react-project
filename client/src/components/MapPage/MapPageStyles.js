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

export const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 16,
  padding: 24,
}));

export const CardImageContainer = styled(Box)({
  position: "relative",
  background: 'linear-gradient(45deg, #FF4655 30%, #FF7F50 90%)',
  height: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "8px 8px 0 0",
});

export const StyledMapCard = styled(Box)({
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "black",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 30px 0 rgba(31, 38, 135, 0.5)",
  },
});

export const StyledMapName = styled(Typography)({
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "white",
  textAlign: "center",
  fontSize: "1.1rem",
  padding: "1rem",
});