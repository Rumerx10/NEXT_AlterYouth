"use client";
import Image from "next/image";
import SvgGoogle from "../../../public/icons/Google";
import React, { useState, useEffect } from "react";
import useIsMobileScreen from "../useIsMobileScreen";

const InAssociationWith = () => {
  const [hydrated, setHydrated] = useState(false);
  const isMobileScreen = useIsMobileScreen();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className="flex flex-col w-full items-center justify-center">
    <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between w-full max-w-7xl items-center px-5 lg:px-14 py-12">
      {/* Google Section */}
      <div
        className={`flex flex-col items-center justify-center ${
          isMobileScreen ? "order-first" : "order-last"
        }`}
      >
        <SvgGoogle />
        <p className="font-semibold text-black">
          Winner of Google Business Group Stories
        </p>
      </div>
      {isMobileScreen && <div className="w-full h-[0.5px] bg-gray-200 mt-10" />}
      {/* UNDP Section */}
      <div className="flex items-center">
        <Image width={120} height={180} src="/images/undp.jpg" alt="undp" />
        <div>
          <p className="font-semibold text-black">"Asia Pacific</p>
          <p className="font-semibold text-black">SDG Enterprise Award"</p>
        </div>
      </div>
      {isMobileScreen && <div className="w-full h-[1px] bg-gray-200 mb-10" />}
      {!isMobileScreen && <div className="h-32 w-[0.5px] bg-[#dee2e6]" />}

      {/* Expo Section */}
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold text-xl mb-8 text-black">
          In Association With
        </p>
        <Image width={100} height={130} src="/images/expo.png" alt="expo" />
      </div>
      {!isMobileScreen && <div className="h-32 w-[1px] bg-[#dee2e6]" />}
    </div>
    </div>
  );
};

export default InAssociationWith;
