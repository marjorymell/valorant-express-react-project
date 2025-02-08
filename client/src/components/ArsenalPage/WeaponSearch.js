import React, { useState, useEffect } from "react";
import { Box, TextField, InputAdornment, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useArsenalContext } from "../../contexts/ArsenalPage";
import { fetchArsenal } from "../../services/Arsenal";
import GenericCarousel from "../Carousel/GenericCarousel";
import {
  StyledWeaponCard,
  StyledWeaponImage,
  StyledWeaponName,
  StyledWeaponStats,
} from "./ArsenalPageStyles";

const WeaponSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { weapons, updateWeapons, updateLoading, updateError } = useArsenalContext();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    const loadWeapons = async () => {
      if (weapons.length === 0) {
        try {
          updateLoading(true);
          const data = await fetchArsenal();
          updateWeapons(data);
          updateLoading(false);
        } catch (err) {
          updateError("Failed to load weapons");
          updateLoading(false);
        }
      }
    };

    loadWeapons(); 
  }, [weapons.length, updateWeapons, updateLoading, updateError]);

  const handleSearchClick = () => {
    setSearched(true);

    if (!searchTerm.trim()) {
      setError("Please enter a weapon name.");
      setSelectedWeapon(null);
      return;
    }

    const foundWeapon = weapons.find((weapon) =>
      weapon.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!foundWeapon) {
      setError(`No weapon found for "${searchTerm}"`);
      setSelectedWeapon(null);
    } else {
      setError("");
      setSelectedWeapon(foundWeapon);
    }
  };

  const renderSkinCard = (skin) => (
    <StyledWeaponCard key={skin.uuid}>
      <StyledWeaponImage
        src={
          skin.displayIcon ||
          skin.chromas[0]?.fullRender ||
          skin.levels[0]?.displayIcon
        }
        alt={skin.displayName}
      />
      <StyledWeaponName
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        }}
      >
        {skin.displayName}
      </StyledWeaponName>
      <StyledWeaponStats>
        Skin Level: {skin.levels.length}
        <br />
        Chromas: {skin.chromas.length}
      </StyledWeaponStats>
    </StyledWeaponCard>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
      <TextField
        variant="outlined"
        placeholder="Search by weapon name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "black" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "300px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "black" },
            "&:hover fieldset": { borderColor: "black" },
            "&.Mui-focused fieldset": { borderColor: "black" },
          },
          "& .MuiInputBase-input": { color: "black" },
        }}
      />

      <Button
        onClick={handleSearchClick}
        sx={{
          background: "linear-gradient(45deg, #FF4655 30%, #FF7F50 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 48,
          padding: "0 30px",
          marginTop: "1rem",
          "&:hover": { background: "linear-gradient(45deg, #FF4655 50%, #FF7F50 100%)" },
        }}
      >
        Search Weapon
      </Button>

      {searched && error && (
        <Typography
          variant="body1"
          sx={{
            color: "red",
            textAlign: "center",
            marginTop: 2,
            padding: "0.5rem",
            backgroundColor: "rgba(255, 0, 0, 0.1)",
            borderRadius: "8px",
            maxWidth: "300px",
          }}
        >
          {error}
        </Typography>
      )}

      {selectedWeapon && (
        <>
          {isAuthenticated ? (
            <Box sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
              <Typography variant="h5" sx={{ textAlign: "center", margin: "20px 0", color: "black" }}>
                {selectedWeapon.displayName} Skins
              </Typography>
              <GenericCarousel
                items={selectedWeapon.skins}
                renderItem={renderSkinCard}
                itemWidth={300}
                itemHeight={200}
                itemsToShow={3}
                gap={10}
                loading={false}
                arrowColor="black"
              />
            </Box>
          ) : (
            <Typography
              variant="body1"
              sx={{
                color: "red",
                textAlign: "center",
                marginTop: 2,
                padding: "0.5rem",
                backgroundColor: "rgba(255, 0, 0, 0.1)",
                borderRadius: "8px",
                maxWidth: "300px",
              }}
            >
              Please log in to view weapon skins
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default WeaponSearch;