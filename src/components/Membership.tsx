"use client";
import React, { useState, useEffect } from "react";
import PlanCard from "./PlanCard";

type PlanType = {
  name: string;
  price: string;
  duration: string;
  priceId?: string;
  features: string[];
  interval?: string;
  id?: string;
  marketing_features?: string[];
};

function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">(
    "monthly"
  );
  const [plans, setPlans] = useState<{
    monthly: PlanType[];
    annual: PlanType[];
  }>({
    monthly: [],
    annual: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/subscriptions/products"
        );
        const data = await response.json();

        if (data.success) {
          // Transform API data to match your PlanType structure
          const monthly: PlanType[] = [];
          const annual: PlanType[] = [];

          data.data.forEach((plan: any) => {
            const formattedPlan = {
              name: plan.name,
              price: plan.price.toString(),
              duration: plan.interval === "month" ? "Month" : "Year",
              priceId: plan.id,
              features: plan.marketing_features || [],
              interval: plan.interval,
            };

            if (plan.interval === "month") {
              monthly.push(formattedPlan);
            } else if (plan.interval === "year") {
              annual.push(formattedPlan);
            }
          });

          setPlans({ monthly, annual });
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) {
    return (
      <section className="primary-bg space-y-6 p-8" id="membership">
        <div className="text-center">Loading plans...</div>
      </section>
    );
  }

  const plansToRender =
    selectedPlan === "monthly" ? plans.monthly : plans.annual;

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
            key={plan.priceId || plan.name}
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
