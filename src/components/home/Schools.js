import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Schools = () => {
  const schools = [
    {
      name: "Agla Government Primary School",
      location: "Kayetpara",
      school_img: "/images/school1.jpeg",
      ht_img_id: 1,
      ht_name: "Moshiur Rahman",
      ht_quote: "There is no alternate way to success other than education",
      year_established: "1992",
      total_students: "32",
      total_teachers: "3",
      total_applicants: "6",
    },
    {
      name: "Kanchan Government Primary School",
      location: "Kanchan",
      school_img: "/images/school2.jpeg",
      ht_img_id: 2,
      ht_name: "Shilpi Begum",
      ht_quote:
        "Be a wonderful role model because you will be the window through which many children will see their future",
      year_established: "2001",
      total_students: "41",
      total_teachers: "5",
      total_applicants: "10",
    },
    {
      name: "Daudpur Government Primary School",
      location: "Daudpur",
      school_img: "/images/school3.jpeg",
      ht_img_id: 3,
      ht_name: "Nusrat Parvin",
      ht_quote:
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      year_established: "1996",
      total_students: "28",
      total_teachers: "3",
      total_applicants: "9",
    },
    {
      name: "Kendua Government Primary School",
      location: "Golakandail",
      school_img: "/images/school4.jpeg",
      ht_img_id: 4,
      ht_name: "Ataur Alam",
      ht_quote: "Education is the best weapon you can use to change the world",
      year_established: "1988",
      total_students: "54",
      total_teachers: "6",
      total_applicants: "13",
    },
    {
      name: "Bhulta Government Primary School",
      location: "Bhulta",
      school_img: "/images/school5.jpeg",
      ht_img_id: 5,
      ht_name: "Tanjiba Jerin",
      ht_quote: "The pen is mightier than the sword",
      year_established: "1985",
      total_students: "45",
      total_teachers: "3",
      total_applicants: "12",
    },
    {
      name: "Deboi Government Primary School",
      location: "Rupganj",
      school_img: "/images/school6.jpeg",
      ht_img_id: 6,
      ht_name: "Dipa Das",
      ht_quote:
        "A teacher's influence never stops, it goes on till the day you die",
      year_established: "1992",
      total_students: "24",
      total_teachers: "2",
      total_applicants: "11",
    },
    {
      name: "Birabo Government Primary School",
      location: "Bholabo",
      school_img: "/images/school7.jpeg",
      ht_img_id: 7,
      ht_name: "Pori Bhanu Akhter",
      ht_quote:
        "A good education can change anyone. A good teacher can change everything.",
      year_established: "1992",
      total_students: "18",
      total_teachers: "2",
      total_applicants: "9",
    },
  ];

  return (
    <div className=" w-full flex items-center justify-center">
      <div className="flex flex-col p-5 gap-4 max-w-7xl">
      <h2 className="text-2xl font-bold text-black tracking-wide">
        Students from Government Primary Schools Nationwide
      </h2>
      <div
        className="flex gap-4 overflow-x-scroll overflow-y-hidden"
        style={{
          scrollBehavior: "smooth",
          msOverflowStyle: "none", // For Internet Explorer
          scrollbarWidth: "none",  // For Firefox
        }}
      >
        {schools.map((school, index) => (
          <div key={index} className="flex flex-col gap-4 justify-between">
            <div className="h-[250px] w-[400px] flex">
              <Image
                src={school.school_img}
                height={250}
                width={400}
                alt={school.name}
                className="object-cover w-full rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-black font-bold">{school.name}</h3>
              <div className="flex gap-1 items-center">
                <FaLocationDot color="#1dc468" />
                <p className="text-[#8c8c8c] text-sm mt-1">
                  {school.location}, Bangladesh
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
    
  );
};

export default Schools;
