"use client";
import Link from "next/link";
import React from "react";
import SvgAlteryouthLogo from "../../public/icons/LogoAy1";
import { IoMdMenu } from "react-icons/io";
import { Turn as Hamburger } from 'hamburger-react';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, scrolled }) => {
  const navLinks = [
    { label: "About", link: "#" },
    { label: "How it works", link: "#" },
    { label: "Scholarships", link: "#" },
    { label: "Collaborate", link: "#" },
    { label: "Login", link: "#" },
  ];
  return (
    <div className="relative z-30 flex justify-center lg:justify-between items-center h-full w-full">
      <div className="block lg:hidden fixed bg-white w-full">
        <div className="relative flex justify-center items-center h-16">
          <div className="absolute left-5 top-[20%] z-50">
            <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {/* <IoMdMenu size={28} color={"#1dc468"} /> */}
              <Hamburger size={24} color={"#1dc468"} toggled={isSidebarOpen} toggle={setIsSidebarOpen} />
            </div>
          </div>
          <SvgAlteryouthLogo color={"#1dc468"} />
        </div>
      </div>

      
      <div className="hidden lg:flex gap-4 items-center cursor-pointer">
        <div className="mt-2">
          <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <IoMdMenu size={22} color={`${scrolled ? "#1dc468" : "white"}`} />
          </div>
        </div>
        <SvgAlteryouthLogo color={`${scrolled ? "#1dc468" : "white"}`} />
      </div>
      <div className="hidden lg:flex items-center justify-between gap-4">
        {navLinks.map((item, index)=>(
          <div key={index} className="group">
            <Link
              href={item.link}
              className={`${scrolled ? "text-primaryGreen" : "text-white"} font-bold`}
            >
              {item.label}
            </Link>
          <div className="w-0 group-hover:w-full bg-primaryGreen h-1 rounded-xl transition-all duration-500 " />
        </div> 
        ))}       
      </div>
    </div>
  );
};

export default Navbar;
