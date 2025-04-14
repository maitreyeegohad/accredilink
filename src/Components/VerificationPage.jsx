import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/");
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white">

      <img
        src="/logo.png"
        alt="Logo"
        className="absolute w-[250px] h-[125px] top-[20px]"
      />

      <p className="absolute top-[150px] text-[40px] font-sansation">
        AccrediLink
      </p>

      <div className="w-[740px] h-[411px] bg-[#DFDFDF] rounded-[20px] shadow-xl border border-black relative">

        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 flex flex-col items-start">
          <label className="text-black text-[24px] mb-2">Shareable Link:</label>
          <input
            type="text"
            placeholder="e.g. https://www.sitpune.edu.in/cert1034980"
            className="w-[550px] h-[40px] border border-black rounded-md shadow-md text-[24px] text-black placeholder-gray-400 px-3 bg-white"
          />
        </div>
        <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 flex flex-col items-start">
          <label className="text-black text-[24px] mb-2">Certificate ID:</label>
          <input
            type="text"
            placeholder="e.g. 1034980"
            className="w-[550px] h-[40px] border border-black rounded-md shadow-md text-[24px] text-black placeholder-gray-400 px-3 bg-white"
          />
        </div>
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2">
          <button onClick={handleVerify} className="w-[200px] h-[50px] !bg-[#C4161C] text-white !text-[26px] !rounded-[30px] !shadow-xl flex justify-center items-center">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
