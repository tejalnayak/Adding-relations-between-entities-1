/* eslint-disable react/prop-types */
//import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-600">{destination.location}</p>
        <p className="text-gray-800 mt-2">{destination.description}</p>
        <p className="text-blue-600 font-semibold mt-2">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
