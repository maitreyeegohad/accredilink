import React from "react";
import { Link, useNavigate } from "react-router-dom";

const StuSettings = () => {
    const navigate = useNavigate();
  
    const handleIssue = () => {
      navigate("/student-dashboard");
    }
  return (
    <div className="!w-full !h-screen !bg-white !overflow-hidden">
      <div className="!fixed !top-0 !left-0 !w-full !h-[87px] !bg-[#C4161C] !flex !justify-center !items-center !z-50">
        <h1 className="!text-white !text-[32px]">AccrediLink</h1>
      </div>
      <div className="!flex !items-start !mb-6 !mt-[100px]">
        <div className="!w-[120px] !h-[120px] !rounded-full !bg-gray-200 !flex !items-center !justify-center">
          <img src="/users.jpg" alt="User Profile" className="!w-[100px] !h-[100px]" />
        </div>
        <div className="!flex !flex-col !space-y-2 !ml-4 !mt-4">
          <label  htmlFor="fileUpload" className="!bg-[#C4161C] !text-white !py-2 !px-12 !rounded-full !text-center">Upload</label>
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                console.log("Selected file:", file.name);
              }
            }}
          />
          <button  className="!bg-gray-400 !text-white !py-2 !px-12 !rounded-full !text-center">Delete</button>
        </div>
      </div>
      <div className="!grid !grid-cols-2 !gap-6 !w-full !max-w-[800px] !mx-auto">
        <div className="!flex !items-center !space-x-2 !w-full">
          <label className="!text-gray-700 !w-1/3">Username:</label>
          <span className="!text-black !w-2/3">2020505055</span>
        </div>
        <div className="!flex !items-center !space-x-2 !w-full">
          <label className="!text-gray-700 !w-1/3">Email ID:</label>
          <span className="!text-black !w-2/3">abc@sitpune.edu.in</span>
        </div>
        <div className="!flex !items-center !space-x-2 !w-full">
          <label className="!text-gray-700 !w-1/3 !text-left">New Password:</label>
          <input type="password" placeholder="e.g. qRwtz1350" className="!py-2 !px-4 !rounded-full !w-[80%] !bg-gray-100" />
        </div>
        <div className="!flex !items-center !space-x-2 !w-full">
          <label className="!text-gray-700 !w-1/3 !text-left">Re-enter New Password:</label>
          <input type="password" placeholder="e.g. qRwtz1350" className="!py-2 !px-4 !rounded-full !w-[80%] !bg-gray-100" />
        </div>
      </div>
      <div className="!flex !justify-center !mt-6">
        <button onClick={handleIssue} className="!bg-[#C4161C] !text-white !py-2 !px-6 !rounded-full !text-center">Confirm Changes</button>
      </div>
      
      <div className="!fixed !bottom-0 !left-0 !w-full !h-[60px] !bg-white !flex !justify-between !items-center !px-8">
        <a href="/student-dashboard" className="!flex !items-center !space-x-2">
          <img src="/home.png" alt="Home" className="!w-[24px] !h-[24px]" />
          <span className="!text-[16px]">Home</span>
        </a>
        <a href="/" className="!flex !items-center !space-x-2">
          <img src="/logout.png" alt="Log Out" className="!w-[24px] !h-[24px]" />
          <span className="!text-[16px]">Log Out</span>
        </a>
      </div>
    </div>
  );
};

export default StuSettings;
