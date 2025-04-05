import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("faculty");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType === "student") {
      navigate("/student-dashboard");
    } else {
      navigate("/faculty-dashboard");
    }
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

        <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 flex space-x-10">
          <label className="flex items-center space-x-2 text-black text-[24px]">
            <input
              type="radio"
              name="userType"
              value="faculty"
              checked={userType === "faculty"}
              onChange={() => setUserType("faculty")}
              className="w-6 h-6 appearance-none border-2 border-[#C4161C] bg-white rounded-full checked:bg-[#C4161C] checked:border-[#C4161C]"
            />
            <span>Faculty</span>
          </label>

          <label className="flex items-center space-x-2 text-black text-[24px]">
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === "student"}
              onChange={() => setUserType("student")}
              className="w-6 h-6 appearance-none border-2 border-[#C4161C] bg-white rounded-full checked:bg-[#C4161C] checked:border-[#C4161C]"
            />
            <span>Students</span>
          </label>
        </div>

        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 flex flex-col items-start">
          <label className="text-black text-[24px] mb-2">Username:</label>
          <input
            type="text"
            placeholder="e.g. 23070123067"
            className="w-[550px] h-[40px] border border-black rounded-md shadow-md text-[24px] text-black placeholder-gray-400 px-3 bg-white"
          />
        </div>
        <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 flex flex-col items-start">
          <label className="text-black text-[24px] mb-2">Password:</label>
          <input
            type="text"
            placeholder="e.g. qRwtz1350"
            className="w-[550px] h-[40px] border border-black rounded-md shadow-md text-[24px] text-black placeholder-gray-400 px-3 bg-white"
          />
        </div>
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2">
          <button onClick={handleLogin} className="w-[200px] h-[50px] !bg-[#C4161C] text-white !text-[26px] !rounded-[30px] !shadow-xl flex justify-center items-center">
            Sign In
          </button>
        </div>
        <p className="absolute bottom-[10px] right-[15px] text-[22px] text-gray-600 underline cursor-pointer">
            Forgot password?
        </p>
      </div>
    </div>
  );
};

export default Login;
