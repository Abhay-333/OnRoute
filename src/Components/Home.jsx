import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()  
  
  const handlePassenger = ()=>{
    navigate('/passenger')  
  }
  
  const handleRider = ()=>{
    navigate('/rider')
  }

  return (
    <div className="bg-black min-h-screen text-white">
      
      <main className="container mx-auto px-4 flex items-center justify-center py-16 h-screen">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold mb-6">Get a ride in minutes</h1>
          <p className="text-xl mb-8">Or become a Rider and earn money on your schedule.</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <button onClick={handlePassenger} className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Look for Lift
            </button>
            <button onClick={handleRider} className="bg-transparent border-2 border-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300">
            Offer a Ride
            </button>
          </div>
        </div>
        
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">About us</h2>
            <p>Find out how we started, what drives us, and how we're reimagining how the world moves.</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Newsroom</h2>
            <p>See announcements about our latest releases, initiatives, and partnerships.</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Global citizenship</h2>
            <p>Read about our commitment to making a positive impact in the cities we serve.</p>
          </div>
        </div> */}
      </main>
      
      {/* <footer className="bg-gray-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 OnRoute. All rights reserved.</p>
        </div>
      </footer> */}

    </div>
  );
};

export default Home;
