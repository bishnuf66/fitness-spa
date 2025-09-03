"use client";
import React, { useState } from "react";
import { Dumbbell } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";

function Header() {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full flex flex-row justify-between items-center p-4  fixed top-0  ">
      <div className="flex flex-row items-center space-x-2">
        <Dumbbell
          className="h-10 w-10 text-red-500"
          aria-label="Fitness Logo"
        />
        <h2 className="pl-2 text-xl sm:text-2xl md:text-3xl font-semibold">
          FITNESXIA
        </h2>
      </div>

      <nav>
        <ul className="hidden md:flex flex-row space-x-6 justify-center items-center">
          <li>
            <a href="#home" className="hover:text-red-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutus" className="hover:text-red-500 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="#program" className="hover:text-red-500 transition-colors">
              Program
            </a>
          </li>
          <li>
            <a
              href="#membership"
              className="hover:text-red-500 transition-colors"
            >
              Membership
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-red-500 transition-colors"
            >
              Testimonials
            </a>
          </li>
          <li>
            <button
              className="primary-btn px-4 py-2"
              onClick={() => setAuthOpen(true)}
            >
              Sign up
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            aria-label="Menu"
            className="text-red-500 hover:text-red-600 transition-colors focus:outline-none"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 right-4  shadow-lg rounded-lg flex flex-col items-center space-y-4 py-4 px-6 md:hidden">
            <li>
              <a href="#home" className="hover:text-red-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className="hover:text-red-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#program"
                className="hover:text-red-500 transition-colors"
              >
                Program
              </a>
            </li>
            <li>
              <a
                href="#membership"
                className="hover:text-red-500 transition-colors"
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-red-500 transition-colors"
              >
                Testimonials
              </a>
            </li>
            <li>
              <button
                className="primary-btn px-4 py-2"
                onClick={() => setAuthOpen(true)}
              >
                Sign up
              </button>
            </li>
          </ul>
        )}
      </nav>
      {authOpen && (
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      )}
    </header>
  );
}

export default Header;
