import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/Home/logo.png";
import { useNavbarContext } from "../../contexts/Navbar";
import { NavLink } from "./NavbarStyles";

function Navbar() {
  const { isScrolled } = useNavbarContext();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) throw new Error('Logout failed');
      
      localStorage.removeItem('token');
      navigate('/auth');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "black" : "transparent",
        transition: "background-color 0.3s ease",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}>
        <Box sx={{ display: "flex", gap: "1.5rem" }}>
          <NavLink variant="h6" component={Link} to="/">Home</NavLink>
          <NavLink variant="h6" component={Link} to="/arsenal">Arsenal</NavLink>
          <NavLink variant="h6" component={Link} to="/map">Maps</NavLink>
          {isAuthenticated ? (
            <NavLink 
              variant="h6" 
              component="button"
              onClick={handleLogout}
              sx={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink variant="h6" component={Link} to="/auth">Login</NavLink>
          )}
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