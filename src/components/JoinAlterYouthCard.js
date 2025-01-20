"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import PhoneNumberInput from "./PhoneNumberInput";

const JoinAlterYouthCard = () => {
  const [count, setCount] = useState(1);
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg p-4 mx-5 lg:mx-0 w-full lg:w-[350px] shadow-lg lg:shadow-none">
      <p className="text-black font-semibold">
        Join the{" "}
        <span className="text-primaryGreen text-lg font-semibold">
          #alteryouthrevolution
        </span>
      </p>
      <form className="flex flex-col gap-3 w-full">
        <input
          className="p-3 focus:border-primaryGreen transition-colors duration-500 border border-gray-200 rounded-lg text-md text-black font-thin outline-none"
          placeholder="Your name"
        />
        <input
          className="p-3 focus:border-primaryGreen transition-colors duration-500 border border-gray-200 rounded-lg text-md text-black font-thin outline-none"
          placeholder="Your email"
        />
        <div className="relative">
          <PhoneNumberInput phone={phone} setPhone={setPhone} />
          {!phone && (
            <p className="absolute text-gray-400 top-3 left-24 pointer-events-none">
              Your number
            </p>
          )}
        </div>
        <p className="font-semibold text-black mt-3">Number of Scholarships</p>
        <div className="flex w-full justify-between items-center">
          <div className="flex bg-[#f3f4f6] rounded-lg">
            <button
              className={`${
                count === 1 ? "bg-[#b5b5b5]" : "bg-primaryGreen"
              } p-3 text-white rounded-lg cursor-pointer`}
              onClick={() => setCount((count) => count - 1)}
              disabled={count === 1}
              type="button"
            >
              <FiMinus />
            </button>
            <p className="flex items-center justify-center text-black font-semibold w-10">
              {count}
            </p>
            <button
              className={`${
                count === 3 ? "bg-[#b5b5b5]" : "bg-primaryGreen"
              } p-3 text-white rounded-lg cursor-pointer`}
              onClick={() => setCount((count) => count + 1)}
              disabled={count === 3}
              type="button"
            >
              <FiPlus />
            </button>
          </div>
          <p className="font-bold text-2xl text-black">
            BDT {new Intl.NumberFormat("en-US").format(1650 * count)}
            <span className="text-sm font-semibold text-black">/month</span>
          </p>
        </div>
        <button className="font-bold text-sm p-4 mt-2 text-white bg-primaryGreen rounded-lg">
          START NOW
        </button>
      </form>
    </div>
  );
};

export default JoinAlterYouthCard;
