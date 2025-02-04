import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link
import GenericCarousel from "./GenericCarousel";
import GenericCard from "./GenericCard";
import { useCarouselContext } from "../../contexts/Carousel";
import { fetchArsenal } from "../../services/Arsenal";

const ArsenalCarousel = () => {
  const { carouselSettings } = useCarouselContext();
  const { itemWidth, itemHeight, itemsToShow, gap } = carouselSettings.arsenal;
  const [arsenal, setArsenal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArsenal = async () => {
      try {
        const arsenalData = await fetchArsenal();
        setArsenal(arsenalData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching arsenal");
        setLoading(false);
      }
    };

    loadArsenal();
  }, []);

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  const renderArsenalCard = (weapon) => (
    <Link to="/arsenal" style={{ textDecoration: "none" }}>
      <GenericCard
        item={{
          name: weapon.displayName,
          image: weapon.displayIcon,
        }}
        width={itemWidth}
        height={itemHeight}
        type="arsenal"
      />
    </Link>
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", margin: "20px 0", color: "#0f1923" }}
      >
        Arsenal
      </Typography>
      <GenericCarousel
        items={arsenal}
        renderItem={renderArsenalCard}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        itemsToShow={itemsToShow}
        gap={gap}
        loading={loading}
      />
    </Box>
  );
};

export default ArsenalCarousel;
