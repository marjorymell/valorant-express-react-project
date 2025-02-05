import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
  StyledContainer,
  StyledContent,
  StyledTitle,
  StyledDescription,
  StyledRole,
  StyledRoleTitle,
  StyledRoleIcon,
  StyledRoleDescription,
  StyledPortrait,
  StyledAbilitiesContainer,
  StyledAbilitiesTitle,
  StyledAbilityList,
  StyledAbility,
  StyledAbilityIcon,
  StyledAbilityName,
  StyledAbilityDescription,
} from "./AgentPageStyles";
import { fetchAgentById } from "../../services/Agent";

const AgentPage = ({ agentId }) => {
  const [agentDetails, setAgentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAgentDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchAgentById(agentId);
        setAgentDetails(data);
        setLoading(false);
      } catch (err) {
        console.error(`Failed to load agent details:`, err);
        setError("Failed to load agent details");
        setLoading(false);
      }
    };

    loadAgentDetails();
    window.scrollTo(0, 0);
  }, [agentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!agentDetails) {
    return null;
  }

  const {
    displayName,
    description,
    fullPortrait,
    role,
    abilities,
    backgroundGradientColors,
  } = agentDetails;

  const backgroundGradient = backgroundGradientColors
    ? `linear-gradient(to right, #${backgroundGradientColors.join(", #")})`
    : "transparent";

  return (
    <StyledContainer backgroundGradient={backgroundGradient}>
      <StyledContent>
        <Box sx={{ flex: 1 }}>
          <StyledTitle>{displayName}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          {role && (
            <StyledRole>
              <StyledRoleTitle>
                <StyledRoleIcon src={role.displayIcon} alt={role.displayName} />
                Role: {role.displayName}
              </StyledRoleTitle>
              <StyledRoleDescription>{role.description}</StyledRoleDescription>
            </StyledRole>
          )}
        </Box>
        <Box sx={{ flex: 1 }}>
          <StyledPortrait src={fullPortrait} alt={displayName} />
        </Box>
      </StyledContent>

      <StyledAbilitiesContainer>
        <StyledAbilitiesTitle>Abilities</StyledAbilitiesTitle>
        <StyledAbilityList>
          {abilities &&
            abilities.map((ability, index) => (
              <StyledAbility key={index}>
                <StyledAbilityIcon
                  src={ability.displayIcon}
                  alt={ability.displayName}
                />
                <Box>
                  <StyledAbilityName>{ability.displayName}</StyledAbilityName>
                  <StyledAbilityDescription>
                    {ability.description}
                  </StyledAbilityDescription>
                </Box>
              </StyledAbility>
            ))}
        </StyledAbilityList>
      </StyledAbilitiesContainer>
    </StyledContainer>
  );
};

export default AgentPage;
