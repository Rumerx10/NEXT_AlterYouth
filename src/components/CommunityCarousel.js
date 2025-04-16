"use client";
import React from 'react';
import { Autoplay, Keyboard, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
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
    <div className="relative px-0  py-0 flex flex-col gap-10 w-full h-auto bg-white ">
      <Swiper
        modules={[Autoplay, Keyboard, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        keyboard={{ enabled: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".swiper-pagination",
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="relative w-full h-full px-20 overflow-visible"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              width={1280}
              height={760}
              src={img}
              alt="switzerland map"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons BOTH_SIDE_ALIGNMENT */}
      <div className="z-50 absolute hidden lg:block left-16 top-[52%] transform -translate-y-1/2">
        <div className="swiper-button-prev">
          <IoIosArrowBack color="gray" />
        </div>
      </div>
      <div className="z-50 absolute hidden lg:block right-16 top-[52%] transform -translate-y-1/2">
        <div className="swiper-button-next">
          <IoIosArrowForward  color="gray" />
        </div>
      </div>

      {/* Pagination Bullets */}
      <div className="block lg:hidden absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
        <div className="swiper-pagination"></div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .swiper-wrapper {
          overflow: visible !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          background-color: white !important;
          border-radius: 50%;
          width: 30px !important;
          height: 30px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          top: 50%;
          z-index: 50;
        }

        // Modify default "ARROW" icon
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 0px !important;
          content: "" !important;
        }
      `}</style>
    </div>
  );
};

export default CommunityCarousel;





