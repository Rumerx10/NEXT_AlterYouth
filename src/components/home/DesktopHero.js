import Image from "next/image";
import React from "react";
import JoinAlterYouthCard from "../JoinAlterYouthCard";
const DesktopHero = () => {
  return (
    <div className="relative h-auto bg-gray-600">
      <Image src="/images/hero_pc.jpg" width={2000} height={1088} alt="heroImage" />
      <div className="absolute top-[20%] h-full w-full">
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
  );
};

export default DesktopHero;
