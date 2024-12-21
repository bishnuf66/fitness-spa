import React from "react";

function Testimonials() {
  return (
    <div className=" flex flex-row justify-evenly  w-full" id="testimonials">
      <div className="w-2/5">
        <h1>What Our Happy Clients Say About Us</h1>
        <p>
          I`&apos;`ve been a member of fitness within for about 6 months now and
          i absoulutely love it! .The TRainers are so motivated and they really
          help to reach fitness goals.
        </p>
        <div className="flex flex-row">
          <div>multiple image icon here</div>
          <span>star icon and 4.9(405 Reviews)</span>
        </div>
      </div>
      <div className="w-2/5">
        <div className="flex flex-row">
          <span>icon</span>
          <div className="flex flex-col">
            <h1>Farhan Rio</h1>
            <p>Happy Customer</p>
          </div>
        </div>
        <p>star icon</p>
        <p>
          i`&apos;`ve been comming to this gym for 3 years now and i`&apos;`
          never been in better shape. the trainers are amazing and they always
          push me to be my best.i`&apos;`m so glad to this gym
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
