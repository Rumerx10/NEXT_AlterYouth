"use client";

import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const UberForScholarship = () => {
  const Data = [
    {
      title: "Transfer directly",
      desc: "Your scholarship is transferred directly to your student's family on their mobile bank account.",
      img: "/images/app_scholarship.jpg",
    },
    {
      title: "Get school reports",
      desc: " View attendance data and report cards from your student's school, until completion of Class 5.",
      img: "/images/app_school.png",
    },
    {
      title: "Ensure a literate citizen",
      desc: "Your scholarship continues until completion of class 5, when your student achieves literacy.",
      img: "/images/app_graduation.png",
    },
  ];
  return (
    <div className="flex flex-col w-full items-center justify-center pt-96 lg:pt-0">
      <div className="flex flex-col w-full items-center p-5 lg:p-14 gap-6">
        <div className="flex flex-col w-full gap-4 items-center">
          <h2 className="text-black text-center lg:text-left text-3xl font-bold tracking-wide">
            The Uber for Scholarships
          </h2>
          <p className="text-black tex-sm text-center tracking-wide ">
            A platform connecting the world with financially struggling students{" "}
            <br />
            in Government Primary Schools of Bangladesh
          </p>
          <div className="flex gap-3">
            <Image
              src="/images/apple_store.png" // Updated path
              height={35}
              width={105}
              alt="apple store"
            />
            <Image
              src="/images/play_store.png" // Updated path
              height={35}
              width={105}
              alt="play store"
            />
          </div>
        </div>

        <div className="md:hidden">
          <Swiper
            centeredSlides={true}
            navigation={false}
            slidesPerView={"auto"}
            spaceBetween={30}
            // autoplay={{
            //   delay:1000,
            //   disableOnInteraction: false,
            // }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {Data.map((item, index) => (
              <SwiperSlide key={index} className="!w-60 md:!w-[400px]">
                <div
                  key={index}
                  className="flex flex-col items-center gap-5 max-w-sm"
                >
                  <Image
                    src={item.img} // Updated path
                    height={350}
                    width={175}
                    alt={item.title}
                  />
                  <div className="flex flex-col items-start md:items-center gap-3">
                    <h3 className="text-black tracking-wide text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-black tracking-wide text-sm text-start md:text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* from md screen to larger--------------------------------------------------------------- */}
        <div className="hidden md:flex flex-col mt-5 md:flex-wrap lg:flex-row gap-14 max-w-7xl items-center justify-center ">
          {Data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 max-w-sm"
            >
              <Image
                src={item.img} // Updated path
                height={350}
                width={175}
                alt={item.title}
              />
              <div className="flex flex-col items-center gap-3">
                <h3 className="text-black tracking-wide text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-black tracking-wide text-sm text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UberForScholarship;
