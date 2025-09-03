"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";

export default function ProfilePage() {
  const { isAuthenticated, user, loading } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const profile = user;
  console.log("userss", user);
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-300">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center text-white w-full max-w-md">
          <h1 className="text-2xl font-bold mb-3">You're not signed in</h1>
          <p className="text-gray-300 mb-6">
            Sign in to view and manage your profile.
          </p>
          <button
            onClick={() => setAuthOpen(true)}
            className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            Sign in / Create account
          </button>
        </div>
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getSubscriptionBadge = (status: string) => {
    const statusMap: Record<string, string> = {
      active: "bg-green-500/20 text-green-400",
      canceled: "bg-yellow-500/20 text-yellow-400",
      past_due: "bg-orange-500/20 text-orange-400",
      inactive: "bg-gray-500/20 text-gray-400",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          statusMap[status] || "bg-gray-500/20 text-gray-400"
        }`}
      >
        {status
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </span>
    );
  };

  return (
    <div className="min-h-[60vh] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold text-white">
                  {profile?.name?.charAt(0) || "U"}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {profile?.name || "User"}
                  </h1>
                  <p className="text-gray-400">{profile?.email}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                {profile?.subscriptionStatus && (
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Status:</span>
                    {getSubscriptionBadge(profile.subscriptionStatus)}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Full Name</p>
                    <p className="text-white">{profile?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Address</p>
                    <p className="text-white">{profile?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone Number</p>
                    <p className="text-white">
                      {profile?.phone || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Member Since</p>
                    <p className="text-white">
                      {profile?.createdAt
                        ? formatDate(profile.createdAt)
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subscription Info */}
              {profile?.isSubscribed && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Subscription Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400">Current Plan</p>
                      <p className="text-white">{profile?.planName || "N/A"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Billing</p>
                      <p className="text-white">
                        {profile?.planAmount
                          ? `${profile.planCurrency} ${(
                              profile.planAmount / 100
                            ).toFixed(2)}`
                          : "N/A"}{" "}
                        / {profile?.planInterval || "month"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">
                        Subscription Status
                      </p>
                      {profile?.subscriptionStatus && (
                        <div className="mt-1">
                          {getSubscriptionBadge(profile.subscriptionStatus)}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Plan ID</p>
                      <p className="text-gray-400 text-sm font-mono">
                        {profile?.planPriceId || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {!profile?.isSubscribed && (
                <div className="md:col-span-2">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-medium text-white mb-2">
                      No Active Subscription
                    </h3>
                    <p className="text-gray-400 mb-4">
                      You don't have an active subscription. Subscribe to access
                      all features.
                    </p>
                    <a
                      href="#membership"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                    >
                      View Plans
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
