import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// basic user fetch
export const fetchUserData = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}?api_key=${API_KEY}`
  );
  return response.data;
};

// advanced search: by username, location, min repos
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = `${username || ""}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}&api_key=${API_KEY}`
  );
  return response.data.items; // GitHub returns results in items array
};
