import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset link sent to: " + email);
    navigate("/");
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo"
        className="absolute w-[250px] h-[125px] top-[20px]"
      />

      {/* AccrediLink Title */}
      <p className="absolute top-[150px] text-[40px] font-sansation">
        AccrediLink
      </p>

      {/* Form Container */}
      <div className="w-[740px] h-[411px] bg-[#DFDFDF] rounded-[20px] shadow-xl border border-black relative">
        {/* Instruction */}
        <p className="absolute top-[80px] left-1/2 transform -translate-x-1/2 text-gray-700 text-[24px] w-[592px] text-center font-semibold">
          Enter your registered email to receive a reset link.
        </p>

        {/* Email Field */}
        <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 flex flex-col items-start">
          <label className="text-black text-[24px] mb-2">Email:</label>
          <input
            type="email"
            required
            placeholder="e.g. xyz.abc.btech2023@sitpune.edu.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[500px] h-[40px] border border-black rounded-md shadow-md text-[24px] text-black placeholder-gray-400 px-3 bg-white"
          />
        </div>

        {/* Reset Button */}
        <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleReset}
            className="w-[250px] h-[50px] !bg-[#C4161C] text-white !text-[26px] !rounded-[30px] !shadow-xl flex justify-center items-center"
          >
            Send Reset Link
          </button>
        </div>

        {/* Back to Login */}
        <Link
          to="/"
          className="absolute bottom-[10px] right-[15px] text-[22px] text-gray-600 underline-link"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
