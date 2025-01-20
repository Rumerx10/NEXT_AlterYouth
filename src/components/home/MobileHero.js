import Image from 'next/image';
import React from 'react';
import JoinAlterYouthCard from '../JoinAlterYouthCard';
const MobileHero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full max-w-[535px] h-full max-h-[768px]  bg-red-500">
        <Image src="/images/hero_home_phone.jpg" width={535} height={768} alt="hero image" className="object-cover w-full h-auto" />          
        <div className="absolute flex flex-col gap-5 items-center px-5 left-0 right-0 top-[65%]">          
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-bold text-white">Start your <br/>scholarship</h2>
              <p className="text-white">Directly for students in Government Primary<br/>
              Schools throughout Bangladesh</p>
            </div>
            <JoinAlterYouthCard />
        </div>
      </div>
    </div>
    
  );
}

export default MobileHero;
