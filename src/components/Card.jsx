import React from "react";

function Card({ id, name, email }) {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/asdlfjls${id}.png?200x200?set=set3`}
        alt=""
      />
      <div className="card-content">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
