import React, { useContext } from "react";
import UserContext from "../UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
