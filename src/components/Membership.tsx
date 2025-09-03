"use client";
import React, { useState } from "react";
import PlanCard from "./PlanCard";

type PlanType = {
  name: string;
  price: string;
  duration: string;
  priceId?: string;
  features: string[];
};

// Define plans as objects
const monthlyPlans: PlanType[] = [
  {
    name: "Basic Plan",
    price: "$99",
    duration: "Month",
    priceId: "price_1S36hnJUzMk4Q3iI9tDnWPS8",
    features: [
      "5 classes per month",
      "4 group classes monthly",
      "Online class access",
      "E-book fitness guide",
    ],
  },
  {
    name: "Standard Plan",
    price: "$129",
    duration: "Month",
    priceId: "price_1S36iwJUzMk4Q3iISKHar9UQ",
    features: [
      "10 classes per month",
      "8 group classes monthly",
      "Online class access",
      "Exclusive E-book fitness guide",
    ],
  },
  {
    name: "Premium Plan",
    price: "$159",
    priceId: "price_1S36jKJUzMk4Q3iICCiYzJjf",
    duration: "Month",
    features: [
      "Unlimited classes per month",
      "Unlimited group classes",
      "Online and in-person access",
      "Personalized fitness guide",
    ],
  },
];

const annualPlans: PlanType[] = [
  {
    name: "Basic Plan",
    price: "$999",
    duration: "Year",
    features: [
      "60 classes per year",
      "48 group classes yearly",
      "Online class access",
      "E-book fitness guide",
    ],
  },
  {
    name: "Standard Plan",
    price: "$1,299",
    duration: "Year",
    features: [
      "120 classes per year",
      "96 group classes yearly",
      "Online class access",
      "Exclusive E-book fitness guide",
    ],
  },
  {
    name: "Premium Plan",
    price: "$1,599",
    duration: "Year",

    features: [
      "Unlimited classes per year",
      "Unlimited group classes",
      "Online and in-person access",
      "Personalized fitness guide",
    ],
  },
];

function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">(
    "monthly"
  );

  const plansToRender = selectedPlan === "monthly" ? monthlyPlans : annualPlans;

  return (
    <section className="primary-bg space-y-6 p-8" id="membership">
      <h2 className="text-center text-3xl font-bold">Choose The Best Plan</h2>
      <p className="text-center text-gray-300">
        Choose a plan that&apos;s right for your growing team. Simple pricing &
        no hidden charges.
      </p>

      <div className="flex items-center justify-center">
        <div className="inline-flex rounded-full border border-red-500">
          {["monthly", "annual"].map((planType) => (
            <button
              key={planType}
              onClick={() => setSelectedPlan(planType as "monthly" | "annual")}
              className={`rounded-full px-6 py-2 ${
                selectedPlan === planType ? "bg-red-500 text-white" : ""
              }`}
            >
              {planType.charAt(0).toUpperCase() + planType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {plansToRender.map((plan) => (
          <PlanCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            duration={plan.duration}
            priceId={plan.priceId}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
}

export default Membership;
