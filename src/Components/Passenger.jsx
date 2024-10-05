import React, { useState } from "react";
import { Link } from "react-router-dom";
import Location from "./Location";
import passengerImg from "../Resources/passengerImg.jpg";

const Passenger = () => {
  // https://www.google.com/maps?q=${latitude},${longitude}
  

  return (
    <div className="w-full bg-black h-[90vh] flex items-center justify-center">
      <div className="flex items-start justify-between bg-transparent text-white p-6 rounded-lg shadow-md w-[80%] mx-auto h-[60vh]">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Welcome, Traveler!</h2>
          <p className="text-lg ">
            Ready for your next adventure? Let's find you the perfect ride.
          </p>
          <p className="text-lg">
            Buckle up for an unforgettable journey filled with new experiences
            and friendly faces!
          </p>

          <Link to="location">
            <button className="bg-transparent border-2 border-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300 mt-[5%]">
              Request a Ride
            </button>
          </Link>
        </div>
        <div className="flex-1 ml-6">
          <img
            src={passengerImg}
            alt="Passenger journey"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Passenger;
