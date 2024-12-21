import React from "react";

function Membership() {
  return (
    <div>
      <h1>Choose The Best Pla</h1>
      <p>
        {" "}
        Choose a plan that `&apos;`s right for your growing team. Simple Pricing
        & No hidden charges.{" "}
      </p>

      <div className="rounded-full w-full bg-primary-bg border border-red-500 flex flex-row justify-evenly">
        <button className="rounded-full bg-red-500 px-4 py-2">Monthly</button>
        <button className="rounded-full  bg-red-500 px-4 py-2"> Annual</button>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col hover:bg-orange-500 hover:scale-110">
          <h2>Discover</h2>

          <h1>$99/Month</h1>
          <p>icon 5 classes per month</p>
          <p>4 group class monthly</p>
          <p>online class access</p>
          <p>E-book fitness guide</p>
          <button>Choose Plan</button>
        </div>
        <div className="flex flex-col hover:bg-orange-500 hover:scale-110">
          <h2>Discover</h2>

          <h1>$99/Month</h1>
          <p>icon 5 classes per month</p>
          <p>4 group class monthly</p>
          <p>online class access</p>
          <p>E-book fitness guide</p>
          <button>Choose Plan</button>
        </div>
        <div className="flex flex-col hover:bg-orange-500 hover:scale-110">
          <h2>Discover</h2>

          <h1>$99/Month</h1>
          <p>icon 5 classes per month</p>
          <p>4 group class monthly</p>
          <p>online class access</p>
          <p>E-book fitness guide</p>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
