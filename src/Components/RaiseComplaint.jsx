import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RaiseComplaint = () => {
  const navigate = useNavigate();

  const handleIssue = () => {
    navigate("/student-dashboard");
  };
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
        <Link
          to="/student-certificates"
          className="absolute left-[70px] top-[260px] text-[20px] underline-link">      
        My Certificates
        </Link>
        <div className="absolute left-0 top-[300px] w-[284px] h-[40px] bg-[#F3F3F3] flex items-center">
        <div className="w-[7px] h-full bg-[#C4161C]"></div>
        <Link
          to="/raise-complaint"
          className="text-[20px] ml-[55px]">
        Raise Complaint
        </Link>
        </div>
        <div className="absolute left-[75px] top-[650px] flex items-center space-x-2">
          <img
            src="/settings.png"
            alt="Settings Icon"
            className="w-[30px] h-[30px]"
          />
          <Link
            to="/settings"
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
        <p className="absolute left-[320px] top-[20px] text-[30px] font-semibold whitespace-nowrap">
          Raise a complaint:
        </p>
        <p className="absolute left-[360px] top-[100px] text-[26px] whitespace-nowrap">
        Name of Student
        </p>
        <input
          type="text"
          className="absolute left-[600px] top-[90px] w-[789px] h-[60px] pl-8 rounded-[30px] bg-[#D9D9D9] px-4 text-[20px] placeholder-gray-600 text-black outline-none font-semibold"
          placeholder="e.g. ABC"
        />
        <p className="absolute left-[410px] top-[180px] text-[26px] whitespace-nowrap">
        Branch
        </p>
        <input
          type="text"
          className="absolute left-[600px] top-[170px] w-[789px] h-[60px] pl-8 rounded-[30px] bg-[#D9D9D9] px-4 text-[20px] placeholder-gray-600 text-black outline-none font-semibold"
          placeholder="e.g. ENTC"
        />
        <p className="absolute left-[415px] top-[260px] text-[26px] whitespace-nowrap">
        Batch
        </p>
        <input
          type="text"
          className="absolute left-[600px] top-[250px] w-[789px] h-[60px] pl-8 rounded-[30px] bg-[#D9D9D9] px-4 text-[20px] placeholder-gray-600 text-black outline-none font-semibold"
          placeholder="e.g. 2023-27"
        />
        <p className="absolute left-[405px] top-[340px] text-[26px] whitespace-nowrap">
        Division
        </p>
        <input
          type="text"
          className="absolute left-[600px] top-[330px] w-[789px] h-[60px] pl-8 rounded-[30px] bg-[#D9D9D9] px-4 text-[20px] placeholder-gray-600 text-black outline-none font-semibold"
          placeholder="e.g. A"
        />
        <p className="absolute left-[425px] top-[420px] text-[26px] whitespace-nowrap">
        PRN
        </p>
        <input
          type="text"
          className="absolute left-[600px] top-[410px] w-[789px] h-[60px] pl-8 rounded-[30px] bg-[#D9D9D9] px-4 text-[20px] placeholder-gray-600 text-black outline-none font-semibold"
          placeholder="e.g. 23070123075"
        />
        <p className="absolute left-[380px] top-[500px] text-[26px] whitespace-nowrap">
        Achievement
        </p>
        <input
          type="text"
          className="absolute left-[600px] top-[490px] w-[789px] h-[60px] pl-8 rounded-[30px] bg-[#D9D9D9] px-4 text-[20px] placeholder-gray-600 text-black outline-none font-semibold"
          placeholder="e.g. xyz"
        />
        <p className="absolute left-[320px] top-[580px] text-[26px] whitespace-nowrap">
          Describe your complaint
        </p>
        <input
          type="text"
          className="absolute left-[600px] top-[570px] w-[789px] h-[60px] pl-8 rounded-[30px] bg-[#D9D9D9] px-4 text-[20px] placeholder-gray-600 text-black outline-none font-semibold"
          placeholder="e.g. xyz"
        />
        <div className="absolute top-[650px] left-[1250px]">
          <button
            onClick={handleIssue}
            className="w-[140px] h-[60px] !bg-[#C4161C] text-white !text-[26px] !rounded-[30px] !shadow-xl flex justify-center items-center font-semibold"
          >
          Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RaiseComplaint;
