export const fetchAgents = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (!response.ok) {
      throw new Error("Failed to fetch agents");
    }
    const data = await response.json();
    return data.data.filter((agent) => agent.isPlayableCharacter);
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};

export const fetchAgentById = async (agentId) => {
  try {
    const response = await fetch(
      `https://valorant-api.com/v1/agents/${agentId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch agent");
    }
    const data = await response.json();
    if (data.status === 200 && data.data) {
      return data.data;
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    console.error("Error fetching agent:", error);
    throw error;
  }
};
