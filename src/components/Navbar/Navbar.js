import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/Home/logo.png";
import { useNavbarContext } from "../../contexts/Navbar";
import { NavLink } from "./NavbarStyles";

function Navbar() {
  const { isScrolled } = useNavbarContext();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "black" : "transparent",
        transition: "background-color 0.3s ease",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", gap: "1.5rem" }}>
          <NavLink variant="h6" component={Link} to="/">
            Home
          </NavLink>
          <NavLink variant="h6" component={Link} to="/arsenal">
            Arsenal
          </NavLink>
          <NavLink variant="h6" component={Link} to="/map">
            Maps
          </NavLink>
        </Box>

        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: "40px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
