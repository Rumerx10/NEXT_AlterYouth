"use client"
import Image from "next/image";
import React, {useState, useEffect} from "react";
import { FaArrowRight } from "react-icons/fa6";
import SvgSingleMother from "../../../public/icons/SingleMother";
import SvgOrphan from "../../../public/icons/Orphan";
import SvgDisabledFather from "../../../public/icons/DisabledFather";
import useIsMobileScreen from "../useIsMobileScreen";
const ScholarshipEligibility = () => {

  const [hydrated, setHydrated] = useState(false);
  const isMobileScreen = useIsMobileScreen();
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) return null;

  const data = [
    {img:"/images/ht3.jpg", title:`Are you a teacher? Get your students  listed on the  platform.`, arrowNote:"Download the school app"},
    {img:"/images/person.jpg", title:"You can be  anywhere in the world", arrowNote:"See all scholarships"},
    {img:"/images/applicant.jpg", title:"While students  get closer to  their dreams", arrowNote:"See all graduates"}
  ]
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex w-full flex-col gap-5 items-center p-4 lg:p-24">
        <div className="flex w-full flex-col gap-3 items-center">
          <h3 className={`text-2xl ${isMobileScreen && 'self-start'} text-black font-bold`}>
            Scholarship Eligibility
          </h3>
          <p className={`text-black font-thin ${isMobileScreen ? 'text-start':'text-center'}  text-sm tracking-wide`}>
            Only students who are currently enrolled in Government Primary
            Schools and fall <br /> under any of the following criteria are
            eligible to apply for scholarships
          </p>
        </div>
      <div className="flex flex-col w-full lg:flex-row gap-5 justify-between items-center max-w-7xl px-5 py-10 lg:px-24">
          <div className="flex w-full items-center gap-5 p-5 border rounded-xl shadow-lg">
            <SvgDisabledFather />
            <div>
              <h4 className="text-black text-lg font-semibold">
                Disable Father
              </h4>
              <p className="text-black">
                Student's father is physically unable to work
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-5 p-5 border rounded-xl shadow-lg">
            <SvgSingleMother />
            <div>
              <h4 className="text-black text-lg font-semibold">
                Single Mother
              </h4>
              <p className="text-black">
                Student's father is deceased or has <br /> abandoned the family
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-5 p-5 border rounded-xl shadow-lg">
            <SvgOrphan />
            <div>
              <h4 className="text-black text-lg font-semibold">Orphan</h4>
              <p className="text-black">
                Both parents are deceased or have <br /> abandoned the child
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:flex-row gap-5 justify-between items-center max-w-7xl px-5 py-10 lg:px-24">
        {
          data.map((item,index)=>(
            <div key={index} className='group relative flex h-[400px] lg:h-[450px] lg:max-w-[376px] w-full overflow-hidden cursor-pointer rounded-lg bg-gray-600'>
          <Image src={item.img} height={450} width={376} alt="ht2" className=" opacity-70 group-hover:scale-105 transition-transform duration-500 object-cover w-full h-full rounded-lg" />
          <div className="absolute inset-0 bg-transparent rounded-lg">
            <div className='h-full w-full flex flex-col gap-4 p-4 z-20'>
              <h3 className="font-bold text-2xl text-white">{item.title}</h3>
              <div className="flex items-center w-full">
                <p className="underline mr-2 text-white">{item.arrowNote}</p>
                <FaArrowRight color="white" className="group-hover:translate-x-2 transition-transform duration-500" />
              </div>
              {index===0 && <p className="absolute  px-0 tracking-tight lg:tracking-normal lg:px-1 text-white text-sm self-center bottom-4">Only for Government Primary Schools in Bangladesh</p>}
            </div>            
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default ScholarshipEligibility;
