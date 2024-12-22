import React from "react";
import { PlayCircle } from "lucide-react";
import Header from "./Header";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="hero-section ">
      <Header />
      <div className="max-w-3xl">
        <h1 className="">
          GET HEALTHY BODY WITH THE PERFECT EXERCISES
          <span>
            <Image
              src="/treadmil.jpg"
              height={40}
              width={50}
              className="rounded-full"
              alt="tradmil image"
            />
          </span>
        </h1>

        <h3>
          we are always there to help you to make a healthy body and mind
          through the power of fitness.
        </h3>
        <div className="flex flex-row items-center ">
          <button className="primary-btn px-4 py-2">Get Started</button>
          <span>
            <PlayCircle className="bg-gray-800" />
          </span>
          <span>Watch Videos</span>
        </div>
        <div className="flex flex-row">
          <div className="flex-col flex">
            <span>104+ </span>
            <span>Expert Trainers</span>
          </div>
          <div className="flex-col flex">
            <span>970+ </span>
            <span>Member Joined</span>
          </div>
          <div className="flex-col flex">
            <span>135+ </span>
            <span>Fitness Programs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
