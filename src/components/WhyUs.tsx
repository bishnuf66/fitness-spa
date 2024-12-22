import React from "react";
import Image from "next/image";

function WhyUs() {
  return (
    <section className="flex flex-col md:flex-row primary-bg p-8 space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Section */}
      <div className="flex flex-col space-y-5 md:w-1/2">
        <h2 className="text-3xl font-bold">
          Why Should People Choose Fitnesxia Services
        </h2>
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            <i className="fa-solid fa-circle-check text-orange-500 mr-2"></i>
            Personal Training
          </h3>
          <p className="text-gray-300">
            Our personal trainers can help you create a personalized fitness
            plan and track your progress.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            <i className="fa-solid fa-circle-check text-orange-500 mr-2"></i>
            Expert Trainer
          </h3>
          <p className="text-gray-300">
            Our gym is proud to offer a team of highly skilled and certified
            trainers to help achieve your health and fitness goals.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            <i className="fa-solid fa-circle-check text-orange-500 mr-2"></i>
            Flexible Time
          </h3>
          <p className="text-gray-300">
            There are many fitness classes offered during off-peak hours, such
            as early morning or late evening.
          </p>
        </div>
        <button className="primary-btn px-6 py-3 self-start">Join Today</button>
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2 flex justify-center items-center">
        <Image
          src="/running-woman.png"
          width={500}
          height={500}
          alt="Running woman"
          className="w-full max-w-md h-auto object-contain"
        />

        {/* Heart Rate Box */}
        <div className="inline-flex items-center bg-white text-black flex-row p-4 absolute top-4 right-1/4 rounded-xl shadow-md">
          <i className="fa-solid fa-heart-pulse text-red-500 text-3xl m-1"></i>
          <div className="flex flex-col ml-2">
            <h3 className="text-lg font-semibold">70 bpm</h3>
            <p className="text-sm">Heart Rate</p>
          </div>
        </div>

        {/* Fat Burning Box */}
        <div className="inline-flex items-center bg-white text-black flex-row p-4 absolute bottom-4 left-1/4 rounded-xl shadow-md">
          <i className="fa-solid fa-fire text-orange-500 text-3xl m-1"></i>
          <div className="flex flex-col ml-2">
            <h3 className="text-lg font-semibold">24%</h3>
            <p className="text-sm">Fat Burning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
