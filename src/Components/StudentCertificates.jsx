import React from "react";
import { Link } from "react-router-dom";

const StudentCertificates = () => {
  return (
<div className="w-full h-screen bg-white">
      <div className="fixed top-0 left-0 w-full h-[87px] bg-[#C4161C] flex justify-center items-center z-50">
        <h1 className="text-white text-[32px]">AccrediLink</h1>
      </div>
      <div className="absolute left-0 top-[87px] w-[284px] h-[937px] fixed bg-[#D3D3D3]" >
        <img
          src="/users.jpg"
          alt="Profile"
          className="absolute left-[70px] top-[40px] w-[150px] h-[150px] rounded-full object-cover"/>
        <p className="absolute left-[85px] top-[200px] text-[32px]">Mr. XYZ</p>
        <div className="absolute left-0 top-[260px] w-[284px] h-[40px] bg-[#F3F3F3] flex items-center">
          <div className="w-[7px] h-full bg-[#C4161C]"></div>
          <Link
            to="/student-certificates"
            className="ml-[53px] text-[20px]">
            My Certificates
          </Link>
        </div>
        <Link
          to="/raise-complaint"
          className="absolute left-[60px] top-[310px] text-[20px] underline-link">
          Raise Complaints
        </Link>
        <div className="absolute left-[75px] top-[650px] flex items-center space-x-2">
          <img
            src="/settings.png"
            alt="Settings Icon"
            className="w-[30px] h-[30px]"
          />
          <Link
            to="/settings-student"
            className="text-[24px] underline-link"
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
            to="/"
            className="text-[24px] underline-link"
          >
          Logout
          </Link>
        </div>
      </div>
      <div className="absolute left-[300px] top-[120px] w-[calc(100%-300px)] h-[calc(100%-120px)] bg-white p-4">
        <div className="px-8">
          <h2 className="text-[24px] font-bold mb-2 text-left ml-8">Issued Certificates:</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 px-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="p-4 bg-[#D3D3D3] rounded-2xl shadow-md flex flex-col border-l-16 border-red-500 w-[90%] mx-auto relative"
            >
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white p-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-colors border border-gray-200">
                  <img src="/link.png" alt="Link Icon" className="w-5 h-5 filter invert brightness-0" />
                </button>
                <button className="bg-white p-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-colors border border-gray-200">
                  <img src="/download.png" alt="Download Icon" className="w-5 h-5 filter invert brightness-0" />
                </button>
              </div>
              <div className="flex flex-col space-y-2 text-left">
                <p className="font-bold">Certificate ID: 123064</p>
                <p>Name of Student: ABC</p>
                <p>PRN: 2020505055</p>
                <p>Achievement: xyz</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCertificates;
