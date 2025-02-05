import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import GenericCarousel from "./GenericCarousel";
import GenericCard from "./GenericCard";
import { useCarouselContext } from "../../contexts/Carousel";
import { fetchMaps } from "../../services/Map";
import { Link } from "react-router-dom";

const MapsCarousel = () => {
  const { carouselSettings } = useCarouselContext();
  const { itemWidth, itemHeight, itemsToShow, gap } = carouselSettings.maps;
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMaps = async () => {
      try {
        const mapsData = await fetchMaps();
        setMaps(mapsData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching maps");
        setLoading(false);
      }
    };

    loadMaps();
  }, []);

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  const renderMapCard = (map) => (
    <Link to="/map" style={{ textDecoration: "none" }} key={map.uuid}>
      <GenericCard
        item={{
          name: map.displayName,
          image: map.splash,
        }}
        width={itemWidth}
        height={itemHeight}
        type="map"
      />
    </Link>
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", margin: "20px 0", color: "#0f1923" }}
      >
        Maps
      </Typography>
      <GenericCarousel
        items={maps}
        renderItem={renderMapCard}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        itemsToShow={itemsToShow}
        gap={gap}
        loading={loading}
      />
    </Box>
  );
};

export default MapsCarousel;
