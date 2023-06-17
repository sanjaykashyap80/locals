import React, { useState } from "react";
import "./PostRide.css"; // Import your custom styles

const PostRide = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [driver, setDriver] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement your form submission logic here
    console.log("Origin:", origin);
    console.log("Destination:", destination);
    console.log("Date:", date);
    console.log("Driver:", driver);
    console.log("Price:", price);

    // Reset form fields
    setOrigin("");
    setDestination("");
    setDate("");
    setDriver("");
    setPrice("");
  };

  return (
    <div className="post-ride-container">
      <h2>Post a Ride</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Origin</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Driver</label>
          <input
            type="text"
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            min={0}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostRide;
