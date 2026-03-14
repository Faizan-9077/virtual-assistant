import React from "react";
import bg from "../assets/background.jpg";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";

function SignUp() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="w-[90%] max-w-110 px-8 py-9 
          bg-black/70 backdrop-blur
          rounded-2xl shadow-2xl shadow-black/70
          border-t border-blue-400/30
          flex flex-col gap-4.5"
      >
        <h1 className="text-white text-2xl font-semibold text-center mb-1">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 rounded-lg 
            bg-white/15 border border-white/10
            text-white placeholder-gray-400 
            outline-none 
            hover:border-white/25
            focus:border-blue-400/70 focus:ring-2 focus:ring-blue-400/30
            transition-all duration-200"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 rounded-lg 
            bg-white/15 border border-white/10
            text-white placeholder-gray-400 
            outline-none 
            hover:border-white/25
            focus:border-blue-400/70 focus:ring-2 focus:ring-blue-400/30
            transition-all duration-200"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg 
            bg-white/15 border border-white/10
            text-white placeholder-gray-400 
            outline-none 
            hover:border-white/25
            focus:border-blue-400/70 focus:ring-2 focus:ring-blue-400/30
            transition-all duration-200"
        />
        <HiMiniEye className="absolute top-12 right-12 text-white h-102 w-5 cursor-pointer" />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 rounded-lg 
            bg-white/15 border border-white/10
            text-white placeholder-gray-400 
            outline-none 
            hover:border-white/25
            focus:border-blue-400/70 focus:ring-2 focus:ring-blue-400/30
            transition-all duration-200"
        />

        {/* Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 
            text-white p-3 rounded-lg font-semibold 
            hover:shadow-lg hover:shadow-blue-500/30
            active:scale-[0.98]
            transition-all duration-200 mt-1, mb-2"
        >
          Create Account
        </button>

        <p className="text-gray-400 text-center text-sm -mt-1">
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;