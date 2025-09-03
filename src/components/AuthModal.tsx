"use client";

import React, { useState } from "react";
import Modal from "@/components/ui/Modal";
import { useAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";

type AuthModalProps = {
  open: boolean;
  onClose: () => void;
  defaultTab?: "login" | "signup";
};

export default function AuthModal({
  open,
  onClose,
  defaultTab = "login",
}: AuthModalProps) {
  const [tab, setTab] = useState<"login" | "signup">(defaultTab);
  const { login, signup, loading } = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "").trim();

    if (!email || !password) {
      return toast.error("Email and password are required");
    }

    const t = toast.loading("Logging in...");
    try {
      await login(email, password);
      toast.success("Logged in successfully", { id: t });
      onClose();
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Login failed", { id: t });
      // Don't close the modal on error
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const password = String(form.get("password") || "").trim();

    if (!name || !email || !phone || !password) {
      return toast.error("All fields are required");
    }

    const t = toast.loading("Creating your account...");
    try {
      await signup(name, email, phone, password);
      toast.success("Account created successfully. Please log in.", { id: t });
      setTab("login"); // Switch to login tab after successful signup
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Signup failed", { id: t });
      // Don't close the modal on error
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={tab === "login" ? "Login" : "Create account"}
      size="sm"
    >
      <div className="flex mb-6 border border-gray-800 rounded-lg overflow-hidden ">
        <button
          onClick={() => setTab("login")}
          className={`flex-1 py-2 text-sm font-medium ${
            tab === "login"
              ? "bg-orange-500 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setTab("signup")}
          className={`flex-1 py-2 text-sm font-medium ${
            tab === "signup"
              ? "bg-orange-500 text-white"
              : "bg-gray-800 text-gray-300"
          }`}
        >
          Sign up
        </button>
      </div>

      {tab === "login" ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Full name
            </label>
            <input
              name="name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Phone number
            </label>
            <input
              name="phone"
              type="tel"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            {loading ? "Please wait..." : "Create account"}
          </button>
        </form>
      )}
    </Modal>
  );
}
