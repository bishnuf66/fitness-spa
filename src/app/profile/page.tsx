"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";

export default function ProfilePage() {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);

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

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-white w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-400">Full name</p>
            <p className="text-lg">{user?.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="text-lg">{user?.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Phone number</p>
            <p className="text-lg">{user?.phone || "—"}</p>
          </div>
        </div>
        <div className="mt-8 flex gap-3">
          <button
            onClick={logout}
            className="px-5 py-2.5 rounded-lg border border-gray-700 hover:bg-gray-800"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
