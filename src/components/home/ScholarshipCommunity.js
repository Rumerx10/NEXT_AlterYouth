"use client"
import Image from "next/image";
import React from "react";
import Flag from "react-world-flags";


const ScholarshipCommunity = () => {

  const data1 = [
    {
      username: "@anika8",
      joined: "today",
      scholarship: 1,
      students: [
        {
          student_name: "Mohammad Siyam",
          school: "Bhitorgor Anondomoyee Government Primary School",
          class: 5,
        },
      ],
    },
    {
      username: "@habib",
      joined: "today",
      scholarship: 1,
      students: [
        {
          student_name: "Maria Akter",
          school: "Hoolashubari Government Primary School",
          class: 2,
        },
      ],
    },
    {
      username: "@shihab2728",
      joined: "today",
      scholarship: 1,
      students: [
        {
          student_name: "Sajid Hasan",
          school: "Jalashi Government Primary School",
          class: 4,
        },
      ],
    },] 
  const data2 = [
    {
      username: "@snehal",
      joined: "yesterday",
      scholarship: 1,
      students: [
        {
          student_name: "Ria Akter Banu",
          school: "Tasherpara Government Primary School",
          class: 3,
        },
      ],
    },
    {
      username: "@tasmina",
      joined: "yesterday",
      scholarship: 2,
      students: [
        {
          student_name: "Salma Akter",
          school: "Bamonkumar Government Primary School",
          class: 2,
        },
        {
          student_name: "Moriom Begum",
          school: "Kalikapur Government Primary School",
          class: 4,
        },
      ],
    },
    {
      username: "@zubayer",
      joined: "yesterday",
      scholarship: 1,
      students: [
        {
          student_name: "Ayesha Siddika Esha",
          school: "Tasherpara Government Primary School",
          class: 2,
        },
      ],
    },
  ];
   const data3 = [{
      username: "@bashir",
      joined: "today",
      scholarship: 1,
      students: [
        {
          student_name: "Shorif Hossain",
          school: "Jaburiduwar Government Primary School",
          class: 3,
        },
      ],
    },
    {
      username: "@lubna7",
      joined: "yesterday",
      scholarship: 7,
      students: [
        {
          student_name: "Shamim Mahmud",
          school: "Kalilkapur Government Primary School",
          class: 3,
        },
        {
          student_name: "Mahim Islam",
          school: "Dakhin Bhatiabara Government Primary School",
          class: 2,
        },
        {
          student_name: "Sohag Islam",
          school: "Somer Danga Government Primary School",
          class: 2,
        },
        {
          student_name: "Rashed Islam",
          school: "Bakdokra 1 Government Primary School",
          class: 5,
        },
        {
          student_name: "Dipa Rani",
          school: "Dolua-Latifgochh Government Primary School",
          class: 4,
        },
        {
          student_name: "Rashed Islam",
          school: "Bakdokra 1 Government Primary School",
          class: 5,
        },
        {
          student_name: "Dipa Rani",
          school: "Dolua-Latifgochh Government Primary School",
          class: 4,
        },
      ],
    },
    {
      username: "@nawrin",
      joined: "yesterday",
      scholarship: 2,
      students: [
        {
          student_name: "Latifur Rahman Labib",
          school: "Cheprajhara 1 Government Primary School",
          class: 1,
        },
        {
          student_name: "Kalpona Rani",
          school: "Bhelapukuri Government Primary School",
          class: 3,
        },
      ],
    },
  ]

  
  return (
    <div className="flex flex-col w-full items-center justify-center">
    <div className="flex flex-col items-center gap-6 w-full max-w-7xl p-5 lg:p-14">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-primaryGreen font-semibold text-xl tracking-wide">
          #alteryouthrevolution
        </h3>
        <h2 className="font-bold text-2xl tracking-wide text-black">
          The Scholarship Community
        </h2>
        <p className="font-thin text-black text-center">
          Despite public primary schools being free of cost in Bangladesh,
          many students still
          <span className="font-semibold">drop out of school</span> to work and
          earn in order to support their families.
          Your scholarship helps a child attend school and support their
          families at the same time.
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 md:flex-row items-start">
        <div className="flex flex-col gap-4 w-full h-auto">
        {data1.map((user,index)=>(
          <div key={index} className="flex flex-col gap-3 border w-full shadow-lg rounded-md p-3">
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between items-center">
              <div className="flex gap-1 items-center">
                <p className="text-black font-semibold text-sm">{user.username}</p>
                <Flag code="US" style={{ width: 20, height: 15 }} /> 
              </div>
              <p className="text-gray-500 text-[10px]">Joined {user.joined}y</p>
            </div>
            <div>
              <p className="font-thin text-[11px] text-primaryGreen py-1 px-2 rounded-lg inline bg-green-50 flex-shrink-0">
                {user.scholarship} Scholarship
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 h-auto">
          {
            user.students.map((student,index)=>(
            <div key={index} className="flex gap-2 w-full items-center">
              <div className="w-10 h-10 flex">
                <Image
                  src="/images/student.png"
                  alt="student"
                  width={60}
                  height={60}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[12px] text-black">
                  {student.student_name}, Class {student.class}
                </h4>
                <p className="text-gray-500 text-[10px] font-thin">
                  {student.school}
                </p>
              </div>
            </div>
          ))
          }
          </div>
        </div>
        ))}
        </div>
        <div className="flex flex-col gap-4 w-full h-auto">
        {data2.map((user,index)=>(
          <div key={index} className="flex flex-col gap-3 border w-full shadow-lg rounded-md p-3">
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between items-center">
              <div className="flex gap-1 items-center">
                <p className="text-black font-semibold text-sm">{user.username}</p>
                <Flag code="US" style={{ width: 20, height: 15 }} /> 
              </div>
              <p className="text-gray-500 text-[10px]">Joined {user.joined}y</p>
            </div>
            <div>
              <p className="font-thin text-[11px] text-primaryGreen py-1 px-2 rounded-lg inline bg-green-50 flex-shrink-0">
                {user.scholarship} Scholarship
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 h-auto">
          {
            user.students.map((student,index)=>(
            <div key={index} className="flex gap-2 w-full items-center">
              <div className="w-10 h-10 flex">
                <Image
                  src="/images/student.png"
                  alt="student"
                  width={60}
                  height={60}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[12px] text-black">
                  {student.student_name}, Class {student.class}
                </h4>
                <p className="text-gray-500 text-[10px] font-thin">
                  {student.school}
                </p>
              </div>
            </div>
          ))
          }
          </div>
        </div>
        ))}
        </div>
        <div className="flex flex-col gap-4 w-full h-auto">
        {data3.map((user,index)=>(
          <div key={index} className="flex flex-col gap-3 border w-full shadow-lg rounded-md p-3">
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between items-center">
              <div className="flex gap-1 items-center">
                <p className="text-black font-semibold text-sm">{user.username}</p>
                <Flag code="US" style={{ width: 20, height: 15 }} /> 
              </div>
              <p className="text-gray-500 text-[10px]">Joined {user.joined}y</p>
            </div>
            <div>
              <p className="font-thin text-[11px] text-primaryGreen py-1 px-2 rounded-lg inline bg-green-50 flex-shrink-0">
                {user.scholarship} Scholarship
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 h-auto">
          {
            user.students.map((student,index)=>(
            <div key={index} className="flex gap-2 w-full items-center">
              <div className="w-10 h-10 flex">
                <Image
                  src="/images/student.png"
                  alt="student"
                  width={60}
                  height={60}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-[12px] text-black">
                  {student.student_name}, Class {student.class}
                </h4>
                <p className="text-gray-500 text-[10px] font-thin">
                  {student.school}
                </p>
              </div>
            </div>
          ))
          }        
          </div>
        </div>
        ))}
        </div>

      </div>
    </div>
    </div>
  );
};

export default ScholarshipCommunity;

