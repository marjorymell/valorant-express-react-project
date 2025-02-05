import { Box, Typography } from "@mui/material";

export const StyledContainer = ({ backgroundGradient, children }) => (
  <Box
    sx={{
      position: "relative",
      padding: "4rem 2rem",
      color: "white",
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      background: backgroundGradient,
      zIndex: 1,
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: -1,
      }}
    />
    {children}
  </Box>
);

export const StyledContent = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      gap: 5,
    }}
  >
    {children}
  </Box>
);

export const StyledTitle = ({ children }) => (
  <Typography
    variant="h2"
    sx={{
      fontSize: { xs: "3rem", md: "4rem" },
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      color: "#fff",
      mb: 3,
      textAlign: { xs: "center", md: "left" },
      position: "relative",
      zIndex: 2,
    }}
  >
    {children}
  </Typography>
);

export const StyledDescription = ({ children }) => (
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: "1rem", md: "1.2rem" },
      color: "#e0e0e0",
      lineHeight: 1.8,
      textAlign: { xs: "center", md: "left" },
      mb: 4,
      position: "relative",
      zIndex: 2,
    }}
  >
    {children}
  </Typography>
);

export const StyledRole = ({ children }) => (
  <Box sx={{ mb: 5, textAlign: { xs: "center", md: "left" } }}>{children}</Box>
);

export const StyledRoleTitle = ({ children }) => (
  <Typography
    variant="h5"
    sx={{
      fontWeight: "bold",
      color: "#f7f9fc",
      textTransform: "uppercase",
      display: "flex",
      alignItems: "center",
      gap: 2,
    }}
  >
    {children}
  </Typography>
);

export const StyledRoleIcon = ({ src, alt }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      width: "30px",
      height: "30px",
      objectFit: "contain",
    }}
  />
);

export const StyledRoleDescription = ({ children }) => (
  <Typography variant="body2" sx={{ color: "#f7f9fc", marginTop: "15px" }}>
    {children}
  </Typography>
);

export const StyledPortrait = ({ src, alt }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      width: "100%",
      maxWidth: "100%",
      height: "auto",
      margin: "0 auto",
      display: "block",
      borderRadius: "16px",
      position: "relative",
      zIndex: 2,
    }}
  />
);

export const StyledAbilitiesContainer = ({ children }) => (
  <Box
    sx={{
      mt: 8,
      backgroundColor: "black",
      borderRadius: "16px",
      padding: "2rem",
      boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.3)",
    }}
  >
    {children}
  </Box>
);

export const StyledAbilitiesTitle = ({ children }) => (
  <Typography
    variant="h3"
    sx={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#f7f9fc",
      textAlign: "center",
      textTransform: "uppercase",
      position: "relative",
      zIndex: 2,
      mb: 4,
    }}
  >
    {children}
  </Typography>
);

export const StyledAbilityList = ({ children }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
    {children}
  </Box>
);

export const StyledAbility = ({ children }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>{children}</Box>
);

export const StyledAbilityIcon = ({ src, alt }) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      width: "80px",
      height: "80px",
      objectFit: "contain",
    }}
  />
);

export const StyledAbilityName = ({ children }) => (
  <Typography
    variant="h6"
    sx={{
      fontWeight: "bold",
      color: "#fff",
      textTransform: "uppercase",
    }}
  >
    {children}
  </Typography>
);

export const StyledAbilityDescription = ({ children }) => (
  <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
    {children}
  </Typography>
);
