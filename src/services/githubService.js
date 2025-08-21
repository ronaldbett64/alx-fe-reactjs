import axios from "axios";

const API_BASE = "https://api.github.com/users/";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_BASE}${username}`, {
      headers: token ? { Authorization: `token ${token}` } : {},
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
