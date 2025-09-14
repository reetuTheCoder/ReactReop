import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div>
      <div>
        <img src={image} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
