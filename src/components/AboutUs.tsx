import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section id="aboutus" className="primary-bg">
      <div className="flex flex-col md:flex-row justify-evenly w-full space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left">
          <h3>970K+ more</h3>
          <h3>Trusted Company Partners</h3>
        </div>
        <div className="flex flex-col items-center  md:flex-row space-x-0 md:space-x-8 space-y-4 md:space-y-0 w-full md:w-1/2 justify-center md:justify-end">
          <h3 className="flex items-center space-x-2">
            <i className="fa-solid fa-mask"></i>
            <span>Videoask</span>
          </h3>
          <h3 className="flex items-center space-x-2">
            <span>HubSp</span>
            <i className="fa-brands fa-hubspot"></i>
            <span>t</span>
          </h3>
          <h3 className="flex items-center space-x-2">
            <i className="fa-brands fa-telegram"></i>
            <span>Mapbox</span>
          </h3>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 space-y-6 md:space-y-0">
        <div className="w-full md:w-1/2 relative flex justify-center items-center">
          <Image
            src="/strong-woman.jpg"
            alt="Mapbox Logo"
            width={400}
            height={400}
            className="w-full h-auto p-4 rounded-xl"
          />
          <div className="inline-flex items-center justify-center bg-white text-black flex-row p-4 rounded-xl absolute bottom-4 right-4 md:right-1/3">
            <Image
              src="/logos/man.png"
              height={40}
              width={40}
              alt="man"
              className="m-2"
            />
            <p className="text-sm md:text-lg">Professional Trainer</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 px-4">
          <h3 className="text-center md:text-left">
            Get Ready to Reach Your Fitness Goals
          </h3>
          <p className="mt-4 text-sm md:text-base">
            We are a gym committed to helping people reach their fitness goals.
            We offer a variety of programs and services to fit your needs,
            whether you are an experienced athlete or just starting.
          </p>
          <p className="mt-2 text-sm md:text-base">
            We believe that everyone should have access to the benefits of
            exercise. Make it happen.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <button className="primary-btn px-4 py-2">Free Trial Today</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
