import axios from "axios";

// Base URL for API
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Fetch data based on filters
export const fetchData = async (filters) => {
  try {
    const response = await axios.post(`${API_URL}/features`, filters);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Fetch time trend data
export const fetchTimeTrend = async (feature, filters) => {
  try {
    const response = await axios.post(`${API_URL}/time-trend`, {
      feature,
      ...filters,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching time trend data:", error);
    throw error;
  }
};
