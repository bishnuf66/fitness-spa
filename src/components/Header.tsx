import React from "react";
import { Dumbbell } from "lucide-react";

function Header() {
  return (
    <header className="w-full flex flex-row justify-between items-center p-4">
      {/* Logo Section */}
      <div className="flex flex-row items-center space-x-2">
        <Dumbbell
          className="h-10 w-10 text-red-500"
          aria-label="Fitness Logo"
        />
        <h2 className="text-xl font-semibold pl-2">FITNESXIA</h2>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="flex flex-row space-x-6">
          <li>
            <a href="#home" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#program" className="hover:text-red-500">
              Program
            </a>
          </li>
          <li>
            <a href="#membership" className="hover:text-red-500">
              Membership
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-red-500">
              Testimonials
            </a>
          </li>
          <li>
            <button className="primary-btn px-4 py-2">Sign up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
