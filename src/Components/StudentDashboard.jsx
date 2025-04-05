import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="fixed top-0 left-0 w-full h-[87px] bg-[#C4161C] flex justify-center items-center z-50">
        <h1 className="text-white text-[32px]">AccrediLink</h1>
      </div>
      <div className="absolute left-0 top-[87px] w-[284px] h-[937px] bg-[#D3D3D3]" >
      <img
        src="/users.jpg"
        alt="Profile"
        className="absolute left-[70px] top-[40px] w-[150px] h-[150px] rounded-full object-cover"/>
      <p className="absolute left-[85px] top-[200px] text-[32px]">Mr. XYZ</p>
      <Link
        to="/student-certificates"
        className="absolute left-[70px] top-[260px] text-[20px] text-black underline">      
      My Certificates
      </Link>
      <Link
        to="/raise-complaint"
        className="absolute left-[65px] top-[300px] text-[20px] underline text-black">
      Raise Complaint
      </Link>
      <div className="absolute left-[75px] top-[650px] flex items-center space-x-2">
        <img
          src="/settings.png"
          alt="Settings Icon"
          className="w-[30px] h-[30px]"
        />
        <Link
          to="/settings"
          className="text-[24px] text-black underline"
        >
        Settings
        </Link>
      </div>
      <div className="absolute left-[75px] top-[700px] flex items-center space-x-2">
        <img
          src="/logout.png"
          alt="Logout Icon"
          className="w-[30px] h-[30px]"
        />
        <Link
          to="/Login"
          className="text-[24px] text-black underline"
        >
        Logout
        </Link>
      </div>
      </div>
      <div className="absolute left-[284px] top-[87px] right-0 bottom-0 flex justify-center items-center">
        <img
          src="/logo.png"
          alt="Dashboard Visual"
          className="w-[600px] h-[300px] object-contain transform -translate-y-5"/>
      </div>
    </div>
  );
};

export default StudentDashboard;
