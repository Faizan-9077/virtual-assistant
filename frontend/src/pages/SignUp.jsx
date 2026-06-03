import React, { useContext } from "react";
import bg from "../assets/background.jpg";
import { HiMiniEye, HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import axios from "axios"

function SignUp() {
  const [showPassword, setshowPassword] = useState(false)
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [err, setError] = useState("");

  const {serverUrl} = useContext(userDataContext)

  const handleSignUp = async(e) => {
    e.preventDefault()
    setError("")
try{
  let result = await axios.post(`${serverUrl}/api/auth/signup`, {
    name, email,password
  }, {withCredentials:true})
  console.log(result)
}catch (error) {
  console.log(error.response?.data);
  setError(error.response.data.message)
}
  }

  return (
    <form
      className="w-full h-screen bg-cover bg-center flex justify-center items-center" onSubmit={handleSignUp}
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
          required onChange={(e) => setName(e.target.value)} value = {name}
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
          required onChange={(e) => setEmail(e.target.value)} value = {email}
          
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-lg 
              bg-white/15 border border-white/10
              text-white placeholder-gray-400 
              outline-none 
              hover:border-white/25
              focus:border-blue-400/70 focus:ring-2 focus:ring-blue-400/30
              transition-all duration-200"
            required onChange={(e) => setPassword(e.target.value)} value = {password}
            
          />

          {showPassword ? (
            <HiEyeSlash
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-5 h-5 cursor-pointer"
              onClick={() => setshowPassword(false)}
            />
          ) : (
            <HiMiniEye
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white w-5 h-5 cursor-pointer"
              onClick={() => setshowPassword(true)}
            />
          )}
        </div>

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

        {err.length > 0 && <p className="text-red-500">
          *{err}
          </p>}
        {/* Button */}
        <button
        type="submit"
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
          <span 
          className="text-blue-400 cursor-pointer hover:underline "
          onClick={() => navigate("/signin")}
          >
            Sign in
          </span>
        </p>
      </div>
    </form>
  );
}

export default SignUp;