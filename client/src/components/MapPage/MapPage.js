import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { StyledHeader, Container, CardImageContainer, StyledMapCard, StyledMapName } from "./MapPageStyles";
import { fetchMaps } from "../../services/Map";

const MapPage = () => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState({});

  useEffect(() => {
    const loadMaps = async () => {
      try {
        const mapsData = await fetchMaps();
        setMaps(mapsData);
      } catch (err) {
        setError("Failed to load maps");
      } finally {
        setLoading(false);
      }
    };

    loadMaps();
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center" sx={{ padding: 2 }}>
        Error: {error}
      </Typography>
    );
  }

  const filteredMaps = maps.filter(
    (map) =>
      map.displayName !== "The Range" && map.displayName !== "Basic Training"
  );

  const handleMouseEnter = (uuid) => {
    setHoveredCard((prev) => ({ ...prev, [uuid]: true }));
  };

  const handleMouseLeave = (uuid) => {
    setHoveredCard((prev) => ({ ...prev, [uuid]: false }));
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      padding: "2rem"
    }}>
      <StyledHeader>Maps</StyledHeader>
      <Container>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <CircularProgress />
          </Box>
        ) : (
          filteredMaps.map((map) => (
            <StyledMapCard
              key={map.uuid}
              onMouseEnter={() => handleMouseEnter(map.uuid)}
              onMouseLeave={() => handleMouseLeave(map.uuid)}
            >
              <CardImageContainer>
                {!hoveredCard[map.uuid] ? (
                  <img
                    src={map.splash || "/placeholder.svg"}
                    alt={map.displayName}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />
                ) : (
                  <img
                    src={map.displayIcon || "/placeholder.svg"}
                    alt={`${map.displayName} icon`}
                    style={{
                      maxWidth: "70%",
                      maxHeight: "70%",
                      objectFit: "contain",
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                )}
              </CardImageContainer>
              <StyledMapName>
                {map.displayName}
              </StyledMapName>
            </StyledMapCard>
          ))
        )}
      </Container>
    </Box>
  );
};

export default MapPage;