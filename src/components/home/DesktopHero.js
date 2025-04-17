import Image from "next/image";
import React from "react";
import JoinAlterYouthCard from "../JoinAlterYouthCard";
import heroImage from "/public/images/hero_pc.webp";

const DesktopHero = () => {
  return (
    <div className="relative h-auto">
      <Image src={heroImage} width={2000} height={1088} alt="heroImage" priority placeholder="blur" className="h-[85vh]" />
      <div className="flex w-full items-center justify-center">
        <div className="absolute max-w-7xl items-center justify-center top-[20%] h-full w-full">
          <div className="flex justify-between items-center px-24">
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl text-white font-bold">
                Start your <br />
                scholarship
              </h1>
              <p className="text-lg text-white tracking-wide">
                Directly for students in Government Primary <br/> Schools throughout
                Bangladesh
              </p>
            </div>
            <div className="">
              <JoinAlterYouthCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHero;
