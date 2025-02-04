export const fetchMaps = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/maps");
    if (!response.ok) {
      throw new Error("Failed to fetch maps");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching maps:", error);
    throw error;
  }
};
