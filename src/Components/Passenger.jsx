import React from "react";

const Passenger = () => {
  return (
    <div className="w-full bg-black h-[90vh] flex items-center justify-center">
      {/* <div className="bg-white p-6 rounded-lg shadow-md w-[30rem] mx-auto">
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
            <input
              type="text"
              id="from"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter starting location"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="to"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              To
            </label>
            <input
              type="text"
              id="to"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter destination"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Search Rides
          </button>
        </form>
      </div> */}

      <div className="flex items-start justify-between bg-transparent text-white p-6 rounded-lg shadow-md w-[80%] mx-auto h-[60vh]">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Welcome, Traveler!</h2>
          <p className="text-lg ">
            Ready for your next adventure? Let's find you the perfect ride.{" "}
          </p>
          <p className="text-lg">
            Buckle up for an unforgettable journey filled with new experiences
            and friendly faces!
          </p>
          
          <button
            className="bg-transparent border-2 border-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300 mt-[5%]"
          >
            Request a Ride
          </button>

        </div>
        <div className="flex-1 ml-6">
          <img
            src="/path/to/your/image.jpg"
            alt="Passenger journey"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Passenger;
