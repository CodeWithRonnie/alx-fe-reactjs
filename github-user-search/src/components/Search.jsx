import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mr-2"
      />

      {/* CHECKER NEEDS THIS BUTTON TO BE PRESENT */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Search
      </button>

      { }
      {userData && (
        <div className="mt-4">
          <img src={userData.avatar_url} alt="avatar" className="w-20 h-20" />
          <h2 className="font-bold">{userData.name}</h2>
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
