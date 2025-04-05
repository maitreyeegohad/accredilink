import React from "react";
import { Link } from "react-router-dom";

const FacultyIssuedCertificates = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="fixed top-0 left-0 w-full h-[87px] bg-[#C4161C] flex justify-center items-center z-50">
        <h1 className="text-white text-[32px]">AccrediLink</h1>
      </div>
      <div className="fixed left-0 top-[87px] w-[284px] bottom-0 bg-[#D3D3D3] overflow-hidden flex flex-col items-center pt-8">
        <img
          src="/users.jpg"
          alt="Profile"
          className="w-[150px] h-[150px] rounded-full object-cover mb-4"
        />
        <p className="text-[32px] mb-6">Mr. XYZ</p>
        <Link
          to="/certificate-issuance-form"
          className="text-[20px] text-black mb-2 w-full flex items-center justify-center underline-link"
        >
        Certificate issuance Form
        </Link>
        <Link
          to="/faculty-issued-certificates"
          className="text-[20px] text-black bg-gray-100 py-2 px-4 w-full flex items-center justify-center border-l-4 border-red-500"
        >
        Issued Certificates
        </Link>
        <div className="mt-auto mb-8 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="/settings.png"
              alt="Settings Icon"
              className="w-[30px] h-[30px]"
            />
            <Link
              to="/settings"
              className="text-[24px] text-black underline-link" 
            >
            Settings
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="/logout.png"
              alt="Logout Icon"
              className="w-[30px] h-[30px]"
            />
            <Link
              to="/Login"
              className="text-[24px] text-black underline-link"
            >
            Log Out
            </Link>
          </div>
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

export default FacultyIssuedCertificates;
