import React, { useState } from "react";

const RiderPage = () => {
  // https://www.google.com/maps?q=${latitude},${longitude}
  const [ridersData,setRidersData] = useState([
   {latitude: ``, longitude: ``, },
  ])

  return <div className="w-full bg-black h-screen flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg shadow-md w-[30rem] mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-center">Rider Journey</h2>
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
</div>
</div>
};

export default RiderPage;
