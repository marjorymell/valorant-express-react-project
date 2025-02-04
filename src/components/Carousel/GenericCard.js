import React from "react";
import { Box, Typography } from "@mui/material";
import { useCarouselContext } from "../../contexts/Carousel";

const GenericCard = ({ item, width, height, type }) => {
  const { cardSettings } = useCarouselContext();

  return (
    <Box
      sx={{
        width,
        height,
        display: "flex",
        flexDirection: "column",
        backgroundColor: cardSettings.backgroundColor,
        border: `${cardSettings.borderWidth} solid ${cardSettings.borderColor}`,
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          padding: type === "arsenal" ? "20px" : 0,
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width:
              type === "map" ? "100%" : type === "arsenal" ? "auto" : "100%",
            height:
              type === "map" ? "100%" : type === "arsenal" ? "auto" : "100%",
            maxWidth: type === "arsenal" ? "80%" : "100%",
            maxHeight: type === "arsenal" ? "80%" : "100%",
            objectFit:
              type === "map"
                ? "cover"
                : type === "arsenal"
                ? "contain"
                : "cover",
          }}
        />
      </Box>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: "#f0f0f0",
          backgroundColor: "black",
          padding: "8px",
          width: "100%",
          textAlign: "center",
          fontSize: type === "arsenal" ? "0.9rem" : "1rem",
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
};

export default GenericCard;
