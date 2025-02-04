import { Typography, styled } from "@mui/material";

export const NavLink = styled(Typography)(({ theme }) => ({
  color: "#d3d3d3",
  textDecoration: "none",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  marginRight: theme.spacing(3),
  "&:hover": {
    color: "white",
  },
}));
