import Image from "next/image";
import React from "react";

const UberForScholarship = () => {
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

      <div className="flex flex-col mt-5 lg:flex-row gap-5 max-w-7xl items-center justify-center lg:justify-between">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/images/app_scholarship.jpg" // Updated path
            height={350}
            width={175}
            alt="transfer directly"
          />
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-black tracking-wide text-xl font-semibold">
              Transfer directly
            </h3>
            <p className="text-black tracking-wide text-sm text-center">
              Your scholarship is transferred directly to your student's family
              on their mobile bank account.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/images/app_school.png" // Updated path
            height={350}
            width={175}
            alt="transfer directly"
          />
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-black tracking-wide text-xl font-semibold">
              Get school reports
            </h3>
            <p className="text-black tracking-wide text-sm text-center">
              View attendance data and report cards from your student's school,
              until completion of Class 5.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/images/app_graduation.png" // Updated path
            height={350}
            width={175}
            alt="transfer directly"
          />
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-black tracking-wide text-xl font-semibold">
              Ensure a literate citizen
            </h3>
            <p className="text-black tracking-wide text-sm text-center">
              Your scholarship continues until completion of class 5, when your student achieves literacy.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UberForScholarship;
