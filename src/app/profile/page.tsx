"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { User, Mail, Phone, Calendar, CreditCard } from "lucide-react";

export default function ProfilePage() {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      toast.error("You must be logged in to view this page");
      router.push("/");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-400">
        Loading profile...
      </div>
    );
  }

  if (!user) return null;

  const profile = user;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

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
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")}
      </span>
    );
  };

  return (
    <div className="w-full md:min-h-screen max-w-5xl mx-auto pt-16 md:mt-24">
      <div className="bg-gray-900 border border-gray-800 md:rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold text-white shadow-md">
                {profile?.name?.charAt(0) || "U"}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {profile?.name || "User"}
                </h1>
                <p className="text-gray-400">{profile?.email}</p>
              </div>
            </div>

            {profile?.subscriptionStatus && (
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <CreditCard size={18} className="text-gray-400" />
                {getSubscriptionBadge(profile.subscriptionStatus)}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Info */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                Personal Information
              </h2>
              <div className="space-y-4">
                <InfoItem
                  icon={<User size={16} />}
                  label="Full Name"
                  value={profile?.name}
                />
                <InfoItem
                  icon={<Mail size={16} />}
                  label="Email Address"
                  value={profile?.email}
                />
                <InfoItem
                  icon={<Phone size={16} />}
                  label="Phone Number"
                  value={profile?.phone || "Not provided"}
                />
                <InfoItem
                  icon={<Calendar size={16} />}
                  label="Member Since"
                  value={
                    profile?.createdAt ? formatDate(profile.createdAt) : "N/A"
                  }
                />
              </div>
            </section>

            {/* Subscription Info */}
            {profile?.isSubscribed ? (
              <section>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Subscription Details
                </h2>
                <div className="space-y-4">
                  <InfoItem
                    label="Current Plan"
                    value={profile?.planName || "N/A"}
                  />
                  <InfoItem
                    label="Billing"
                    value={
                      profile?.planAmount
                        ? `${profile.planCurrency} ${(
                            profile.planAmount / 100
                          ).toFixed(2)} / ${profile.planInterval || "month"}`
                        : "N/A"
                    }
                  />
                  <div>
                    <p className="text-sm text-gray-400">Subscription Status</p>
                    <div className="mt-1">
                      {getSubscriptionBadge(profile.subscriptionStatus)}
                    </div>
                  </div>
                  <InfoItem
                    label="Plan ID"
                    value={
                      <span className="text-gray-400 text-sm font-mono">
                        {profile?.planPriceId || "N/A"}
                      </span>
                    }
                  />
                </div>
              </section>
            ) : (
              <div className="md:col-span-2">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-medium text-white mb-2">
                    No Active Subscription
                  </h3>
                  <p className="text-gray-400 mb-4">
                    You don&apos;t have an active subscription. Subscribe to
                    access all features.
                  </p>
                  <a
                    href="#membership"
                    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors"
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
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center space-x-2">
      {icon && <span className="text-gray-400">{icon}</span>}
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  );
}
