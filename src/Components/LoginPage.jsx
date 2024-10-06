import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [category, setCategory] = useState("passenger");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginWithEmailAndPassword=async (e)=>{
    e.preventDefault();
    const userCrendentials = await signInWithEmailAndPassword(auth, email,password);
    console.log(userCrendentials.user);
    navigate("/rider");
    alert("sign in success")
  }

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    console.log(provider);
    const result = await signInWithPopup(auth, provider);

    console.log(result)

    if(result && category === 'rider'){
      navigate('/rider')
    }else if(result && category === 'passenger'){
      navigate('/passenger')
    }
    
    console.log(result.user);
  };

  
  const validation = ()=>{
    if(email && password){
      navigate('/home')
    }else{
      alert("Please Enter all the required fields")
    }
  }

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLoginWithEmailAndPassword}>
          
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input required
              type="email"
              id="email"
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
            required 
              type="password"
              id="password"
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category
            </label>
            <select 
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="passenger">Passenger</option>
              <option value="rider">Rider</option>
            </select>
          </div>
          <button
          onClick={validation}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
