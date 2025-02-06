export const fetchPlayerCards = async () => { 
  try {
    const response = await fetch("https://valorant-api.com/v1/playercards");
    if (!response.ok) {
      throw new Error("Failed to fetch player cards");
    }
    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error("Error fetching player cards:", error);
    throw error;
  }
};
