import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import Passenger from "./Components/Passenger";
import RiderPage from "./Components/RiderPage";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Location from "./Components/Location";
function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/passenger" element={<Passenger />}></Route>
        <Route path="/passenger/location" element={<Location />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/rider" element={<RiderPage />}></Route>
      </Routes>

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
