"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SvgAlteryouthLogo from "../../public/icons/LogoAy1";
import SvgLogoAy from "../../public/icons/LogoAy2";
import { IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, scrolled }) => {
  return (
    <div className="z-30 flex justify-center lg:justify-between items-center h-full">
      <div className="flex gap-4 items-center cursor-pointer">
        <div className="mt-2">
          <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <IoMdMenu size={22} color={`${scrolled ? "#1dc468" : "white"}`} />
          </div>
        </div>
        <SvgAlteryouthLogo color={`${scrolled ? "#1dc468" : "white"}`} />
      </div>
      <div className=" hidden lg:flex items-center justify-between gap-4">
        <div className="group">
          <Link
            href="#"
            className={`${
              scrolled ? "text-primaryGreen" : "white"
            } font-bold`}
          >
            About
          </Link>
          <div className="w-0 group-hover:w-full bg-primaryGreen h-1 rounded-xl transition-all duration-500 " />
        </div>
        <div className="group">
          <Link
            href="#"
            className={`${
              scrolled ? "text-primaryGreen" : "white"
            } font-bold`}
          >
            How it works
          </Link>
          <div className="w-0 group-hover:w-full bg-primaryGreen h-1 rounded-xl transition-all duration-500 " />
        </div>
        <div className="group">
          <Link
            href="#"
            className={`${
              scrolled ? "text-primaryGreen" : "white"
            } font-bold`}
          >
            Scholarships
          </Link>
          <div className="w-0 group-hover:w-full bg-primaryGreen h-1 rounded-xl transition-all duration-500 " />
        </div>
        <div className="group">
          <Link
            href="#"
            className={`${
              scrolled ? "text-primaryGreen" : "white"
            } font-bold`}
          >
            Collaborate
          </Link>
          <div className="w-0 group-hover:w-full bg-primaryGreen h-1 rounded-xl transition-all duration-500 " />
        </div>
        <div className="group">
          <Link
            href="#"
            className={`${
              scrolled ? "text-primaryGreen" : "white"
            } font-bold`}
          >
            Login
          </Link>
          <div className="w-0 group-hover:w-full bg-primaryGreen h-1 rounded-xl transition-all duration-500 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
