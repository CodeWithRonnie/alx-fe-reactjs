import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        textAlign: "center",
        maxWidth: "300px",
      }}
    >
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Current Count: {count}</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
