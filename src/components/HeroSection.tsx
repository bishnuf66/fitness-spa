import React from "react";
import { PlayCircle } from "lucide-react";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="hero-section  h-full w-full justify-center items-center flex ">
      <section className="w-full  space-y-5 items-center justify-center relative max-h-screen">
        <div className="flex flex-row flex-wrap items-center ">
          <h2 className="">GET HEALTHY BODY WITH THE PERFECT EXERCISES</h2>
          <div className="w-32 h-12 ml-4  flex">
            <Image
              src="/treadmil.jpg"
              height={300}
              width={500}
              className="rounded-full"
              alt="treadmill image"
            />
          </div>
        </div>
        <p>
          we are always there to help you to make a healthy body and mind
          through the power of fitness.
        </p>
        <div className="flex flex-row items-center ">
          <button className="primary-btn px-4 py-2">Get Started</button>
          <span>
            <PlayCircle className="bg-gray-800 h-10 w-10  rounded-full mx-3" />
          </span>
          <span>Watch Videos</span>
        </div>
        <div className="flex flex-row">
          <div className="flex-col flex">
            <h3>104+ </h3>
            <span>Expert Trainers</span>
          </div>
          <div className="flex-col flex">
            <h3>970+ </h3>
            <span>Member Joined</span>
          </div>
          <div className="flex-col flex">
            <h3>135+ </h3>
            <span>Fitness Programs</span>
          </div>
        </div>
      </section>

      <div className=" inline-flex  bg-white text-black flex-row p-4 absolute bottom-5 right-1/4 rounded-xl">
        <div className="flex flex-col">
          <p>Today&apos;s Calories</p>
          <h3>150 Cal</h3>
          <div className="flex flex-row">
            <TrendingUp className="text-orange-500 mx-1" />
            <span className="text-orange-500 mx-1">+2.75%</span>
            <span>this week</span>
          </div>
        </div>
        <i className="fa-solid fa-chart-simple text-orange-500 text-6xl "></i>
        <i className="fa-solid fa-chart-simple text-orange-500 text-6xl mx-1 "></i>
      </div>
    </div>
  );
}

export default HeroSection;
