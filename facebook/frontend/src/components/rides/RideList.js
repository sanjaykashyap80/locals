import React from "react";
import "./RideList.css"; // Import your custom styles

const RideList = () => {
  const rides = [
    {
      id: 1,
      origin: "City A",
      destination: "City B",
      date: "2023-06-20",
      driver: "John Doe",
      price: 20
    },
    {
      id: 2,
      origin: "City C",
      destination: "City D",
      date: "2023-06-21",
      driver: "Jane Smith",
      price: 25
    }
    // Add more ride objects as needed
  ];

  return (
    <div className="ride-list-container">
      <h2>List of Rides</h2>
      {rides.length === 0 ? (
        <p>No rides available</p>
      ) : (
        <ul className="ride-list">
          {rides.map((ride) => (
            <li key={ride.id} className="ride-item">
              <div className="ride-details">
                <h3>
                  {ride.origin} to {ride.destination}
                </h3>
                <p>Date: {ride.date}</p>
                <p>Driver: {ride.driver}</p>
                <p>Price: ${ride.price}</p>
              </div>
              <button className="ride-book-button">Book Now</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RideList;
