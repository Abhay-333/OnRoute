import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { detailsContext } from "../Context/ContextAPI";

const Location = () => {
  const location = useLocation();
  const details = useContext(detailsContext)
  const passengerDetials = details[0]
  console.log(passengerDetials)
  const [selectedStart, setSelectedStart] = useState("");
  const [selectedDest, setSelectedDest] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    if (passengerDetials && passengerDetials.length > 0) {
      setSelectedStart(passengerDetials[0].location.startPoint.streetName);
      setSelectedDest(passengerDetials[0].location.destination.streetName);
      setLatitude(passengerDetials[0].location.startPoint.latitude);
      setLongitude(passengerDetials[0].location.startPoint.longitude);
    }
  }, [passengerDetials]);

  const handleStartChange = (e) => {
    setSelectedStart(e.target.value);
    const selectedLocation = passengerDetials.find(
      (item) => item.location.startPoint.streetName === e.target.value
    );
    if (selectedLocation) {
      setLatitude(selectedLocation.location.startPoint.latitude);
      setLongitude(selectedLocation.location.startPoint.longitude);
    }
    console.log("Start changed to:", e.target.value);
  };

  const handleDestChange = (e) => {
    setSelectedDest(e.target.value);
    const selectedLocation = passengerDetials.find(
      (item) => item.location.destination.streetName === e.target.value
    );
    if (selectedLocation) {
      setLatitude(selectedLocation.location.destination.latitude);
      setLongitude(selectedLocation.location.destination.longitude);
    }
    console.log("Destination changed to:", e.target.value);
  };

  return (
    <div className="w-full bg-black h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-[30rem] mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Passenger Journey
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="from"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              From
            </label>
            <select
              className="bg-slate-200 rounded-lg p-4 w-full"
              value={selectedStart}
              onChange={handleStartChange}
            >
              {passengerDetials.map((option, index) => (
                <option key={index} value={option.location.startPoint.streetName}>
                  {option.location.startPoint.streetName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="to"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              To
            </label>
            <select
              className="bg-slate-200 rounded-lg p-4 w-full"
              value={selectedDest}
              onChange={handleDestChange}
            >
              {passengerDetials.map((option, index) => (
                <option key={index} value={option.location.destination.streetName}>
                  {option.location.destination.streetName}
                </option>
              ))}
            </select>
          </div>
          <Link
            to={`/passenger/location`}
            onClick={() => {
              if (latitude && longitude) {
                window.open(
                  `https://www.google.com/maps?q=${latitude},${longitude}`,
                  "_blank"
                );
              } else {
                alert("Please select both start and destination locations.");
              }
            }}
          >
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Search Rides
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Location;
