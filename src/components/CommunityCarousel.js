"use client";
import React from 'react';
import { Keyboard, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CommunityCarousel = () => {
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

  return (
    <div className="relative flex w-screen h-auto py-6 bg-white overflow-visible">
      <Swiper
        modules={[Keyboard, Navigation, Pagination]}
        spaceBetween={0}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        keyboard={{ enabled: true }}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-pagination',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className='relative w-full h-full px-20 overflow-visible'
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image width={475} height={475} src={img} alt="switzerland map" className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Bullets */}
      <div className="block lg:hidden absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
        <div className="swiper-pagination"></div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: white !important;
          border-radius: 50%;
          width: 30px !important;
          height: 30px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),0 6px 20px 0 rgba(0, 0, 0, 0.19);
          top: 50%;
          z-index: 50;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          
        }
        .swiper-pagination-bullet-active {
          background-color: red !important;
        }
        .swiper-pagination-bullet {
          background-color: #1DBF73 !important;
        }
      `}</style>
    </div>
  );
};

export default CommunityCarousel;





