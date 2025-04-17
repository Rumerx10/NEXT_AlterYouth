"use client"
import Link from "next/link";
import React, { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { LuHeartHandshake } from "react-icons/lu";
// import { PiGraduationCapBold } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TbLogin } from "react-icons/tb";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="relative">
      <div
        className={`fixed inset-0 bg-black ${isSidebarOpen ? "opacity-20" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`fixed top-14 lg:top-0 left-0 bottom-0 w-72 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 `}
      >
        <div className="flex flex-col gap-3 h-full w-full px-8 py-14">
          <div className=" bg-green-100 px-3 py-1 flex items-center gap-2 rounded-lg">
            <HiHome color="#1dc468" />            
            <Link href="#" className="text-[15px] font-semibold text-primaryGreen">Home</Link>
          </div>
          <div className="group px-3 py-1 flex items-center gap-2 rounded-lg">
           <AiOutlineQuestionCircle className="text-gray-500 group-hover:text-primaryGreen" />           
            <Link href="#" className="group-hover:text-primaryGreen text-[15px] font-semibold text-black">How it works</Link>
          </div>
          <div className="group px-3 py-1 flex items-center gap-2 rounded-lg">
           <HiOutlineInformationCircle  className="text-gray-500 group-hover:text-primaryGreen"/>           
            <Link href="#" className="group-hover:text-primaryGreen text-[15px] font-semibold text-black">About</Link>
          </div>
          <div className="group px-3 py-1 flex items-center gap-2 rounded-lg">
            <LuHeartHandshake className="text-gray-500 group-hover:text-primaryGreen" />            
            <Link href="#" className="group-hover:text-primaryGreen text-[15px] font-semibold text-black">Collaborate</Link>
          </div>
          <div className="group px-3 py-1 flex items-center gap-2 rounded-lg">
            <IoNewspaperOutline className="text-gray-500 group-hover:text-primaryGreen" />
            <Link href="#" className="group-hover:text-primaryGreen text-[15px] font-semibold text-black">Scholarship Policy</Link>
          </div>
          <div className="group px-3 py-1 flex items-center gap-2 rounded-lg">
            <BiCommentDetail className="text-gray-500 group-hover:text-primaryGreen" />
            <Link href="#" className="group-hover:text-primaryGreen text-[15px] font-semibold text-black">Get in touch</Link>
          </div>
          <div className="group px-3 py-1 flex items-center gap-2 rounded-lg">
            <HiOutlineDevicePhoneMobile className="text-gray-500 group-hover:text-primaryGreen" />
            <Link href="#" className="group-hover:text-primaryGreen text-[15px] font-semibold text-black">Get the app</Link>
            
          </div>
          <div className="group px-3 py-1 flex items-center gap-2 rounded-lg">
            <TbLogin className="text-gray-500 group-hover:text-primaryGreen" /> 
            <Link href="#" className="group-hover:text-primaryGreen text-[15px] font-semibold text-black">Log in</Link>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
