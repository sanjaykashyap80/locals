import React, { useState } from "react";
import "./SearchRides.css";

const SearchRides = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  const handleSearch = () => {
    // Logic for searching rides based on departure and destination
    // This can include making API calls, filtering data, etc.
    console.log("Searching rides...");
  };

  return (
    <div className="search-rides-container">
      <h2>Find Your Ride</h2>
      <div className="search-form">
        <div className="form-group">
          <label htmlFor="departure">Departure:</label>
          <input
            type="text"
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="Enter departure location"
          />
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination location"
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search Rides
        </button>
      </div>
    </div>
  );
};

export default SearchRides;
