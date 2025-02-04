import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { StyledHeader, Container, CardImageContainer } from "./MapPageStyles";
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
    <>
      <StyledHeader>Maps</StyledHeader>
      <Container>
        {loading
          ? Array.from({ length: 16 }).map((_, index) => (
              <Card key={index} sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="div"
                  sx={{ height: 200, backgroundColor: "#e0e0e0" }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      height: 24,
                      backgroundColor: "#e0e0e0",
                      width: "60%",
                    }}
                  ></Typography>
                </CardContent>
              </Card>
            ))
          : filteredMaps.map((map) => (
              <Card
                key={map.uuid}
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onMouseEnter={() => handleMouseEnter(map.uuid)}
                onMouseLeave={() => handleMouseLeave(map.uuid)}
              >
                <CardImageContainer>
                  {!hoveredCard[map.uuid] ? (
                    <img
                      src={map.splash}
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
                      src={map.displayIcon}
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
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {map.displayName}
                  </Typography>
                </CardContent>
              </Card>
            ))}
      </Container>
    </>
  );
};

export default MapPage;
