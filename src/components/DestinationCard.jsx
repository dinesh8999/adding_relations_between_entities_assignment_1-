import React from 'react';
import './DestinationCard.css'; // Optional CSS file if you want to style

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-image" />
      <div className="card-content">
        <h2>{destination.name}</h2>
        <h4>{destination.location}</h4>
        <p>{destination.description}</p>
        <p className="price">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
