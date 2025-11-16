const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f2f2f2",
        maxWidth: "400px",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "1.8rem", marginBottom: "10px" }}>
        {props.name}
      </h2>
      <p>
        Age: <span style={{ fontWeight: "bold", color: "darkgreen" }}>{props.age}</span>
      </p>
      <p style={{ fontStyle: "italic", color: "#555" }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
