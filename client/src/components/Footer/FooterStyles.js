import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const FooterContainer = styled("footer")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
  color: "#ffffff",
  padding: "20px",
  textAlign: "center",
});

export const FooterText = styled("p")({
  margin: "10px 0",
  fontSize: "14px",
});

export const FooterLinks = styled("div")({
  display: "flex",
  gap: "15px",
});

export const FooterLink = styled(Link)({
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
  },
});
