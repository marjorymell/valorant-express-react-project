import React, { useState } from "react";
import { Box, IconButton, Skeleton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useCarouselContext } from "../../contexts/Carousel";

const GenericCarousel = ({
  items = [],
  renderItem,
  itemWidth,
  itemHeight,
  itemsToShow,
  gap = 10,
  loading = false,
  arrowColor = "black",
}) => {
  const { carouselSettings } = useCarouselContext();
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(items.length - itemsToShow, prevIndex + 1)
    );
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          gap: `${gap}px`,
          backgroundColor: carouselSettings.backgroundColor,
        }}
      >
        {[...Array(itemsToShow)].map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={itemWidth}
            height={itemHeight}
            animation="wave"
          />
        ))}
      </Box>
    );
  }

  if (!items || items.length === 0) {
    return <Box>No items to display</Box>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: carouselSettings.backgroundColor,
      }}
    >
      <IconButton
        onClick={handlePrev}
        disabled={startIndex === 0}
        sx={{
          color: arrowColor,
          "&:disabled": {
            color: `rgba(${
              arrowColor === "white" ? "255, 255, 255" : "7, 12, 17"
            }, 0.3)`,
          },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: `calc(${itemWidth}px * ${itemsToShow} + ${gap}px * ${
            itemsToShow - 1
          })`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.3s ease-in-out",
            transform: `translateX(-${startIndex * (itemWidth + gap)}px)`,
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                marginRight: index === items.length - 1 ? 0 : `${gap}px`,
                flexShrink: 0,
                width: itemWidth,
              }}
            >
              {renderItem(item)}
            </Box>
          ))}
        </Box>
      </Box>
      <IconButton
        onClick={handleNext}
        disabled={startIndex >= items.length - itemsToShow}
        sx={{
          color: arrowColor,
          "&:disabled": {
            color: `rgba(${
              arrowColor === "white" ? "255, 255, 255" : "7, 12, 17"
            }, 0.3)`,
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default GenericCarousel;
