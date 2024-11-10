import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000", // Replace with your backend URL
  timeout: 5000,
});

export const getUserStats = async (userId: string) => {
  try {
    const response = await apiClient.get(`/stats`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw new Error("Failed to load user stats");
  }
};

export const getUserTrips = async (userId: string) => {
  try {
    const response = await apiClient.get(`/get_trips`, { params: { userId } });
    return response.data;
  } catch (error) {
    throw new Error("Failed to load user trips");
  }
};
