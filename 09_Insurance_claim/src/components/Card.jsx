import React from "react";

const Card = ({ title, total }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Total - {total}</p>
    </div>
  );
};

export default Card;