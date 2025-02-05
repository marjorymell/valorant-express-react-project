import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GenericCarousel from "./GenericCarousel";
import GenericCard from "./GenericCard";
import { useCarouselContext } from "../../contexts/Carousel";
import { fetchAgents } from "../../services/Agent";

const AgentCarousel = () => {
  const { carouselSettings } = useCarouselContext();
  const { itemWidth, itemHeight, itemsToShow, gap } = carouselSettings.agent;
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAgents = async () => {
      try {
        const agentData = await fetchAgents();
        setAgents(agentData);
        setLoading(false);
      } catch (err) {
        setError("Error fetching agents");
        setLoading(false);
      }
    };

    loadAgents();
  }, []);

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  const renderAgentCard = (agent) => (
    <Link
      to={`/agent/${agent.uuid}`}
      key={agent.uuid}
      style={{ textDecoration: "none" }}
    >
      <GenericCard
        item={{
          name: agent.displayName,
          image: agent.fullPortrait,
        }}
        width={itemWidth}
        height={itemHeight}
        type="agent"
      />
    </Link>
  );

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", margin: "20px 0", color: "#0f1923" }}
      >
        Agents
      </Typography>
      <GenericCarousel
        items={agents}
        renderItem={renderAgentCard}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        itemsToShow={itemsToShow}
        gap={gap}
        loading={loading}
      />
    </Box>
  );
};

export default AgentCarousel;
