"use client"
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import useIsMobileScreen from "../useIsMobileScreen";
import CommunityCarousel from "../CommunityCarousel";

const Community = () => {
  const images = [
    "/images/community_1.jpg",
    "/images/community_2.jpg",
    "/images/community_3.jpg",
    "/images/community_4.jpg",
    "/images/community_5.jpg",
    "/images/community_6.jpg",
    "/images/community_7.jpg",
    "/images/community_8.jpg",
    "/images/community_9.jpg",
    "/images/community_10.jpg",
    "/images/community_11.jpg",
    "/images/community_12.jpg",
    "/images/community_13.jpg",
    "/images/community_14.jpg",
    "/images/community_15.jpg",
    "/images/community_16.jpg",
    "/images/community_17.jpg",
    "/images/community_18.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const visibleImages = 4; // Number of images to show in the viewport
  const visibleImageIndexes = Array.from({ length: visibleImages }, (_, i) =>
    (currentIndex + i) % images.length
  );
  const [hydrated, setHydrated] = useState(false);
  const isMobileScreen = useIsMobileScreen();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <div className="relative flex flex-col items-center justify-center w-full mx-auto overflow-hidden p-5 lg:p-14 max-w-screen">
      <div className="flex flex-col gap-2 w-full items-center px-5 max-w-7xl">
        <h2 className="text-black font-semibold text-2xl w-full">Community Impact</h2>
        {
          !isMobileScreen && <p className="text-black">Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
          using that phone, to start receiving their child's scholarships directly, every month.
        </p>
        }        
      </div> 

        <CommunityCarousel />  

      {isMobileScreen && <p className="block lg:hidden text-blackk font-thin p-5">Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
          using that phone, to start receiving their child's scholarships directly, every month.
        </p>
      }
    </div>
  );
};

export default Community;
