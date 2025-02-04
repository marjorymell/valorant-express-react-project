import React, { useEffect } from "react";
import { useArsenalContext } from "../../contexts/ArsenalPage";
import {
  StyledContainer,
  StyledHeader,
  StyledWeaponsGrid,
  StyledWeaponCard,
  StyledWeaponImage,
  StyledWeaponName,
  StyledWeaponStats,
} from "./ArsenalPageStyles";
import { Skeleton } from "@mui/material";
import WeaponSearch from "./WeaponSearch";

const ArsenalPage = () => {
  const { weapons, loading, error } = useArsenalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return (
      <StyledContainer>
        <StyledHeader>Error</StyledHeader>
        <p>{error}</p>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledHeader>Arsenal</StyledHeader>
      <WeaponSearch />
      <StyledWeaponsGrid>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <StyledWeaponCard key={index}>
                <Skeleton variant="rectangular" width="100%" height="150px" />
                <Skeleton
                  width="80%"
                  height="20px"
                  style={{ marginTop: "10px" }}
                />
                <Skeleton
                  width="60%"
                  height="20px"
                  style={{ marginTop: "5px" }}
                />
              </StyledWeaponCard>
            ))
          : weapons.map((weapon) => (
              <StyledWeaponCard key={weapon.uuid}>
                <StyledWeaponImage
                  src={weapon.displayIcon || ""}
                  alt={weapon.displayName}
                />
                <StyledWeaponName>{weapon.displayName}</StyledWeaponName>
                <StyledWeaponStats>
                  <div className="label">Category:</div>
                  <div className="value">
                    {weapon.shopData?.category || "N/A"}
                  </div>

                  <div className="label">Cost:</div>
                  <div className="value">
                    {weapon.shopData?.cost || "N/A"} Credits
                  </div>

                  <div className="label">Fire Rate:</div>
                  <div className="value">
                    {weapon.weaponStats?.fireRate || "N/A"}
                  </div>

                  <div className="label">Magazine Size:</div>
                  <div className="value">
                    {weapon.weaponStats?.magazineSize || "N/A"}
                  </div>
                </StyledWeaponStats>
              </StyledWeaponCard>
            ))}
      </StyledWeaponsGrid>
    </StyledContainer>
  );
};

export default ArsenalPage;
