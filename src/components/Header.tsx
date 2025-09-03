"use client";
import React, { useState, useRef, useEffect } from "react";
import { Dumbbell, User, LogOut, User as UserIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";
import Link from "next/link";

function Header() {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const userMenuRef = useRef<HTMLLIElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Track active section and handle hide/show on scroll
  useEffect(() => {
    const sections = ['home', 'aboutus', 'program', 'membership', 'testimonials'];
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle section highlighting
      const currentPosition = currentScrollY + 100; // Offset for fixed header
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Handle show/hide header
      if (currentScrollY > 100) { // Only start hiding after 100px scroll
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          // Scrolling down
          setVisible(false);
        } else if (lastScrollY > currentScrollY && lastScrollY - currentScrollY > 5) {
          // Scrolling up
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener with passive for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev);

  // Handle smooth scrolling to sections across pages
  const scrollToSection = (sectionId: string) => {
    // If we're already on the home page, just scroll to the section
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    } else {
      // If we're on a different page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header 
      ref={headerRef}
      className={`w-full flex flex-row justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg`}
    >
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
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors ${
                activeSection === 'home' ? 'text-red-500 font-medium' : 'hover:text-red-500'
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("aboutus")}
              className={`transition-colors ${
                activeSection === 'aboutus' ? 'text-red-500 font-medium' : 'hover:text-red-500'
              }`}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("program")}
              className={`transition-colors ${
                activeSection === 'program' ? 'text-red-500 font-medium' : 'hover:text-red-500'
              }`}
            >
              Program
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("membership")}
              className={`transition-colors ${
                activeSection === 'membership' ? 'text-red-500 font-medium' : 'hover:text-red-500'
              }`}
            >
              Membership
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`transition-colors ${
                activeSection === 'testimonials' ? 'text-red-500 font-medium' : 'hover:text-red-500'
              }`}
            >
              Testimonials
            </button>
          </li>
          {isAuthenticated ? (
            <li className="relative" ref={userMenuRef}>
              <button
                onClick={toggleUserMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="User menu"
              >
                <UserIcon className="w-5 h-5 text-gray-700" />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsUserMenuOpen(false);
                    }}
                    className="flex w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <button
                className="primary-btn px-4 py-2"
                onClick={() => setAuthOpen(true)}
              >
                Sign In
              </button>
            </li>
          )}
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
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-red-500 transition-colors w-full text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("aboutus")}
                className="hover:text-red-500 transition-colors w-full text-left"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("program")}
                className="hover:text-red-500 transition-colors w-full text-left"
              >
                Program
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("membership")}
                className="hover:text-red-500 transition-colors w-full text-left"
              >
                Membership
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:text-red-500 transition-colors w-full text-left"
              >
                Testimonials
              </button>
            </li>
            {isAuthenticated ? (
              <li className="relative" ref={userMenuRef}>
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  aria-label="User menu"
                >
                  <UserIcon className="w-5 h-5 text-gray-700" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="flex w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <button
                  className="primary-btn px-4 py-2"
                  onClick={() => setAuthOpen(true)}
                >
                  Sign In
                </button>
              </li>
            )}
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
