import React from "react";
import { BicepsFlexed, Dumbbell } from "lucide-react";
import Image from "next/image";

function Program() {
  return (
    <section
      className="primary-bg text-left px-4 py-8 md:px-12 lg:px-16"
      id="program"
    >
      <div className="text-left max-w-3xl mx-auto mb-12 flex flex-col md:flex-row md:items-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 md:mb-0 md:w-1/2">
          The Best Programs We Offer For You
        </h2>
        <p className="text-lg text-gray-300 md:w-1/2">
          We offer a wide range of comprehensive fitness programs designed to
          cater to individuals of all fitness levels. Our aim is to help you
          achieve specific goals and maximize results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="hover:bg-orange-500 rounded-xl secondary-bg p-6 text-left">
          <Dumbbell className="h-24 w-24  text-gray-200 mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Strength Training</h3>
          <p className="text-gray-300 mb-6">
            Our trainer will design a progressive workout plan to help you gain
            strength effectively.
          </p>
          <a href="#" className="white font-medium ">
            Learn More <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        {/* Basic Yoga */}
        <div className="hover:bg-orange-500 rounded-xl secondary-bg p-6 text-left">
          <Image
            src="/logos/yoga.png"
            alt="Yoga Icon"
            width={96}
            height={96}
            className="w-24 h-24 invert mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Basic Yoga</h3>
          <p className="text-gray-300 mb-6">
            Explore our yoga sessions designed to improve flexibility and mental
            clarity.
          </p>
          <a href="#" className="white font-medium ">
            Learn More <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        {/* Body Building */}
        <div className="hover:bg-orange-500 rounded-xl secondary-bg p-6 text-left">
          <BicepsFlexed className="h-24 w-24  text-gray-200 mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Body Building</h3>
          <p className="text-gray-300 mb-6">
            Build muscle and sculpt your body with personalized workout plans.
          </p>
          <a href="#" className="white font-medium ">
            Learn More <i className="fa-solid fa-arrow-right" />
          </a>
        </div>

        {/* Weight Loss */}
        <div className="hover:bg-orange-500 rounded-xl secondary-bg p-6 text-left">
          <i className="fa-solid fa-person-running text-8xl  text-gray-200 mb-4"></i>
          <h3 className="text-2xl font-semibold mb-4">Weight Loss</h3>
          <p className="text-gray-300 mb-6">
            Get a tailored program to help you shed pounds and maintain a
            healthy lifestyle.
          </p>
          <a href="#" className="white font-medium ">
            Learn More <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Program;
