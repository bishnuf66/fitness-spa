import React from "react";
import Image from "next/image";

function Testimonials() {
  return (
    <section
      className="flex flex-col md:flex-row justify-evenly w-full primary-bg py-10"
      id="testimonials"
    >
      {/* Left Section: Testimonials Text */}
      <div className="w-full md:w-2/5 flex flex-col space-y-6 px-4 md:px-10">
        <h2 className="text-center md:text-left text-2xl font-bold">
          What Our Happy Clients Say About Us
        </h2>
        <p className="text-center md:text-left text-lg text-gray-300">
          I&apos;ve been a member of Fitnessxia for about 6 months now and I
          absolutely love it! The trainers are so motivated and they really help
          me reach my fitness goals.
        </p>
        {/* Customer Profile Section */}
        <div className="flex justify-center md:justify-start items-center space-x-2">
          <span className="rounded-full w-10 h-10 overflow-hidden">
            <Image
              src="/gym-woman2.jpg"
              height={50}
              width={50}
              alt="customer"
              className="object-cover"
            />
          </span>
          <span className="rounded-full w-10 h-10 overflow-hidden">
            <Image
              src="/gym-man1.jpg"
              height={50}
              width={50}
              alt="customer"
              className="object-cover"
            />
          </span>
          <span className="rounded-full w-10 h-10 overflow-hidden">
            <Image
              src="/gym-woman1.jpg"
              height={50}
              width={50}
              alt="customer"
              className="object-cover"
            />
          </span>
          <span className="rounded-full w-10 h-10 overflow-hidden">
            <Image
              src="/gym-man2.jpg"
              height={50}
              width={50}
              alt="customer"
              className="object-cover"
            />
          </span>
          <div className="bg-red-500 w-10 h-10 rounded-full text-center flex justify-center items-center">
            <i className="fa-solid fa-plus text-white"></i>
          </div>
          <span>
            <i className="fa-solid fa-star mx-2 text-yellow-500"></i> 4.9(405
            Reviews)
          </span>
        </div>
      </div>

      {/* Right Section: Individual Testimonial */}
      <div className="w-full md:w-2/5 relative secondary-bg rounded-2xl flex flex-col space-y-6 p-6">
        {/* Customer Info */}
        <div className="flex flex-row w-full justify-center md:justify-start items-center">
          <div className="rounded-full w-20 h-20">
            <Image
              src="/gym-man1.jpg"
              height={200}
              width={200}
              alt="customer"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col ml-4">
            <h2 className="text-xl font-semibold">Farhan Rio</h2>
            <p className="text-sm text-gray-300">Happy Customer</p>
          </div>
        </div>

        {/* Star Rating */}
        <span className="flex flex-row">
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
          <i className="fa-solid fa-star text-yellow-500"></i>
        </span>

        {/* Testimonial Content */}
        <p className="text-lg text-gray-300">
          I&apos;ve been coming to this gym for 3 years now and I&apos;ve never
          been in better shape. The trainers are amazing, and they always push
          me to be my best. I&apos;m so glad to be at this gym.
        </p>

        {/* Arrow Icons */}
        <i className="fa-solid fa-arrow-right absolute right-[-8px] top-1/2 text-2xl text-gray-600 bg-gray-400 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-all"></i>
        <i className="fa-solid fa-arrow-left absolute left-[-8px] top-1/2 text-2xl text-gray-600 bg-gray-400 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-all"></i>
      </div>
    </section>
  );
}

export default Testimonials;
