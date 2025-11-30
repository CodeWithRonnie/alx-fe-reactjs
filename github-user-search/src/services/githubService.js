import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const fetchUserData = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}?api_key=${API_KEY}`
  );
  return response.data;
};

export default fetchUserData;
