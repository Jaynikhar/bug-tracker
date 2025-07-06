import React from "react";

const BugCard = ({ bug }) => {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <p>Status: {bug.status}</p>
    </div>
  );
};

export default BugCard;