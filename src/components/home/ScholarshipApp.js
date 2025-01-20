"use client"
import React, { useState, useEffect} from "react";
import useIsMobileScreen from "../useIsMobileScreen";

const ScholarshipApp = () => {
  const [hydrated, setHydrated] = useState(false);
  const isMobileScreen = useIsMobileScreen();

  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying(true);
    const video = document.getElementById("scholarshipVideo");
    video.play();
  };
  

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null; 
  

  return (
    <div className="flex items-center justify-center w-full">
      <div className="p-5 w-full flex flex-col lg:flex-row gap-5 lg:gap-24 lg:justify-between items-center max-w-7xl lg:px-24">
      {isMobileScreen && <div className="flex w-full items-center justify-start">
        {isMobileScreen && <h2 className="text-xl text-black font-bold ">Embark on a scholarship journey</h2> }
      </div>}
      <div className="w-full lg:w-full h-[400px] rounded-lg overflow-hidden relative group">
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer" onClick={handlePlay}>
            <div className=" w-20 lg:w-24 h-20 lg:h-24 bg-[#212529] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-12 h-12 text-white"
              >
                <path d="M6.5 3.5v9l6-4.5-6-4.5z" />
              </svg>
            </div>
          </div>
        )}
        <video
          id="scholarshipVideo"
          className={`w-full h-full object-cover  ${
            isPlaying ? "" : "hidden"
          }`}
          controls
        >
          <source src="/videos/ay_explainer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <img
            src="/images/ay_video_poster.jpg"
            alt="Video Poster"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        )}
      </div>
      <div className="lg:w-full">
      {isMobileScreen ? <p className="text-sm tracking-wide font-thin">Here's a 100 second video that takes you to a village of Bangladesh and shows how your scholarship impacts a day in the life of a student who needs it</p>:<div className="flex flex-col w-full">
        <h3 className="text-black font-bold text-2xl mb-3">The Scholarship App</h3>
        <p className="text-black leading-7 font-thin">
          In Bangladesh, while 98% of children enroll in school, 2 million
          children drop out to work before achieving literacy in order to
          support their families financially. On the flipside, Bangladesh has a
          diaspora population of 10 million in advanced economies who wish to
          make an impact on their homeland. AlterYouth, imagine Uber for
          scholarships, is a C2C scholarship app enabling users from around the
          world to start scholarships directly for financially struggling
          students in Government Primary Schools of Bangladesh, through digital
          banking.
        </p>
      </div>}
      
      
        
      </div>
    </div>
    </div>
    
  );
};

export default ScholarshipApp;
