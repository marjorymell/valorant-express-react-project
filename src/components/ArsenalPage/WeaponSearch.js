import React, { useState, useEffect } from "react";
import { Box, TextField, InputAdornment, Typography } from "@mui/material";
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
  const { weapons, updateWeapons, updateLoading, updateError } =
    useArsenalContext();

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

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setError("Please enter a weapon name.");
      setSelectedWeapon(null);
      return;
    }

    setError("");

    const foundWeapon = weapons.find((weapon) =>
      weapon.displayName.toLowerCase().includes(term)
    );

    setSelectedWeapon(foundWeapon || null);
  };

  const renderSkinCard = (skin) => (
    <StyledWeaponCard
      key={skin.uuid}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          width: "100%",
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search by weapon name..."
        value={searchTerm}
        onChange={handleSearch}
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "white" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "300px",
          marginBottom: "2rem",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
            "::placeholder": {
              color: "rgba(255, 255, 255, 0.5)",
            },
          },
        }}
      />

      {error && (
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
      {selectedWeapon ? (
        <Box sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", margin: "20px 0", color: "white" }}
          >
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
            arrowColor="white"
          />
        </Box>
      ) : (
        searchTerm && (
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
            No weapon found for "{searchTerm}"
          </Typography>
        )
      )}
    </Box>
  );
};

export default WeaponSearch;
