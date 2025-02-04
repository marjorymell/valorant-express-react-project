import React from "react";
import { useParams } from "react-router-dom";
import Background from "../components/Background/Background";
import AgentPage from "../components/AgentPage/AgentPage";

const Agent = () => {
  const { agentId } = useParams();
  return (
    <Background>
      <AgentPage agentId={agentId} />
    </Background>
  );
};

export default Agent;
