import axios from "axios";

// Replace with your backend URL
const BASE_URL = "https://stock-trading-platform-en0s.onrender.com//api";

export const fetchSensex = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sensex`);
    return response.data; // Expecting array of stocks [{symbol, price, change, changePercent}, ...]
  } catch (error) {
    console.error("Error fetching Sensex data:", error);
    return [];
  }
};
