export const fetchArsenal = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/weapons");
    if (!response.ok) {
      throw new Error("Failed to fetch arsenal");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching arsenal:", error);
    throw error;
  }
};
