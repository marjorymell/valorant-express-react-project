import { Box, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainer = ({ children }) => (
  <Box
    sx={{
      padding: "2rem",
      color: "white",
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #0A192F, #172A45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </Box>
);

export const StyledAuthCard = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderRadius: "8px",
      padding: "2rem",
      width: "100%",
      maxWidth: "400px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    }}
  >
    {children}
  </Box>
);

export const StyledHeader = ({ children }) => (
  <Typography
    variant="h4"
    sx={{
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      textAlign: "center",
      mb: 4,
      color: "white",
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "40px",
        height: "3px",
        backgroundColor: "#FF4655",
      },
    }}
  >
    {children}
  </Typography>
);

export const StyledTextField = styled(TextField)({
  marginBottom: "1rem",
  "& .MuiInputBase-root": {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF4655",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-focused": {
      color: "#FF4655",
    },
  },
});

export const StyledButton = ({ children, ...props }) => (
  <Box
    component="button"
    {...props}
    sx={{
      width: "100%",
      padding: "0.8rem",
      backgroundColor: "#FF4655",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "1rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        backgroundColor: "#FF5864",
      },
      "&:disabled": {
        backgroundColor: "rgba(255, 70, 85, 0.5)",
        cursor: "not-allowed",
      },
    }}
  >
    {children}
  </Box>
);

export const StyledDivider = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      margin: "1.5rem 0",
      color: "rgba(255, 255, 255, 0.5)",
      "&::before, &::after": {
        content: '""',
        flex: 1,
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      },
      "& > span": {
        margin: "0 1rem",
      },
    }}
  >
    <span>{children}</span>
  </Box>
);

export const StyledLink = ({ children, ...props }) => (
  <Box
    component="a"
    {...props}
    sx={{
      color: "#FF4655",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    }}
  >
    {children}
  </Box>
);