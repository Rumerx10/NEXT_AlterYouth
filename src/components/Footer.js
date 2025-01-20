"use client"
import React,{useState, useEffect} from "react";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { LiaCopyright } from "react-icons/lia";
import useIsMobileScreen from "./useIsMobileScreen";
const Footer = () => {
  const [hydrated, setHydrated] = useState(false);
  const isMobileScreen = useIsMobileScreen();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;
  return (
    <div className="bg-[#f9f9f9] p-5 lg:p-12 w-full">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="font-semibold text-black mb-2">
            Learn About AlterYouth
          </h3>
          <p className="text-sm text-black font-thin mb-2">Home</p>
          <p className="text-sm text-black font-thin mb-2">About us</p>
          <p className="text-sm text-black font-thin mb-2">How it works</p>
          <p className="text-sm text-black font-thin mb-2">
            Scholarship Policy
          </p>
          {isMobileScreen && <hr className="my-5" />}
          { !isMobileScreen ? <p className="text-sm text-black font-thin mb-4">Get the app</p>:''}
        </div>
        <p className={`${isMobileScreen ? 'self-start':'self-end mb-4'} font-thin text-sm text-black `}>
          Towards a literate Bangladesh
        </p>
      </div>
      {!isMobileScreen ? <hr /> :''}
      <div className={`flex flex-col-reverse lg:flex-row justify-between ${isMobileScreen ? '':'mt-4' } `}>
      
        <div>
          {isMobileScreen && <hr className="my-5" />}
          <p className="flex gap-1 items-center text-black text-sm font-light mb-2">
            <LiaCopyright />2025 AlterYouth Limited
          </p>
          <p className="text-black text-sm font-light mb-2">
            Terms of Service . Privacy Policy
          </p>
        </div>
        <div className={`flex gap-3 ${isMobileScreen && 'my-2'}`}>
          <FiFacebook size={22} color="black" />
          <FaInstagram size={22} color="black" />
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
