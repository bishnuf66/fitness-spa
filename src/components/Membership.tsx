"use client";
import React, { useState } from "react";

type PlanProps = {
  name: string;
  price: string;
  duration: string;
  features: string[];
  onChoose: () => void;
};

const PlanCard: React.FC<PlanProps> = ({
  name,
  price,
  duration,
  features,
  onChoose,
}) => {
  return (
    <div className="flex flex-col space-y-4 hover:bg-orange-500 hover:scale-105 p-6 w-64 rounded-lg secondary-bg group transition-all duration-300 ease-in-out">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="text-xl font-bold">
        <span>{price}</span>
        <span className="text-sm">/{duration}</span>
      </div>
      <ul className="space-y-2 text-gray-300 text-sm">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        onClick={onChoose}
        className="px-4 py-2 text-white rounded-full border group-hover:bg-white group-hover:text-orange-500 transition-all duration-300"
      >
        Choose Plan
      </button>
    </div>
  );
};

function Membership() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  return (
    <section className="primary-bg space-y-6 p-8" id="membership">
      <h2 className="text-center text-3xl font-bold">Choose The Best Plan</h2>
      <p className="text-center text-gray-300">
        Choose a plan that&apos;s right for your growing team. Simple pricing &
        no hidden charges.
      </p>

      <div className="flex items-center justify-center">
        <div className="inline-flex rounded-full border border-red-500">
          <button
            onClick={() => setSelectedPlan("monthly")}
            className={`rounded-full px-6 py-2 ${
              selectedPlan === "monthly" ? "bg-red-500 text-white" : ""
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedPlan("annual")}
            className={`rounded-full px-6 py-2 ${
              selectedPlan === "annual" ? "bg-red-500 text-white" : ""
            }`}
          >
            Annual
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {selectedPlan === "monthly" ? (
          <>
            <PlanCard
              name="Basic Plan"
              price="$99"
              duration="Month"
              features={[
                "5 classes per month",
                "4 group classes monthly",
                "Online class access",
                "E-book fitness guide",
              ]}
              onChoose={() => alert("Basic Monthly Plan Chosen")}
            />
            <PlanCard
              name="Standard Plan"
              price="$129"
              duration="Month"
              features={[
                "10 classes per month",
                "8 group classes monthly",
                "Online class access",
                "Exclusive E-book fitness guide",
              ]}
              onChoose={() => alert("Standard Monthly Plan Chosen")}
            />
            <PlanCard
              name="Premium Plan"
              price="$159"
              duration="Month"
              features={[
                "Unlimited classes per month",
                "Unlimited group classes",
                "Online and in-person access",
                "Personalized fitness guide",
              ]}
              onChoose={() => alert("Premium Monthly Plan Chosen")}
            />
          </>
        ) : (
          <>
            <PlanCard
              name="Basic Plan"
              price="$999"
              duration="Year"
              features={[
                "60 classes per year",
                "48 group classes yearly",
                "Online class access",
                "E-book fitness guide",
              ]}
              onChoose={() => alert("Basic Annual Plan Chosen")}
            />
            <PlanCard
              name="Standard Plan"
              price="$1,299"
              duration="Year"
              features={[
                "120 classes per year",
                "96 group classes yearly",
                "Online class access",
                "Exclusive E-book fitness guide",
              ]}
              onChoose={() => alert("Standard Annual Plan Chosen")}
            />
            <PlanCard
              name="Premium Plan"
              price="$1,599"
              duration="Year"
              features={[
                "Unlimited classes per year",
                "Unlimited group classes",
                "Online and in-person access",
                "Personalized fitness guide",
              ]}
              onChoose={() => alert("Premium Annual Plan Chosen")}
            />
          </>
        )}
      </div>
    </section>
  );
}

export default Membership;
