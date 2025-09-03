import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";
import Link from "next/link";

function MobileHeader({
  scrollToSection,
  setAuthOpen,
}: {
  scrollToSection: (section: string) => void;
  setAuthOpen: (open: boolean) => void;
}) {
  const { isAuthenticated, logout } = useAuth();
  return (
    <div>
      <ul className=" bg-gray-900 fixed top-0 left-0 z-50 w-full h-full  mt-16 shadow-lg rounded-lg flex flex-col items-center space-y-4 py-4 px-6 md:hidden ">
        {isAuthenticated ? (
          <li>
            <div
              className=" hover:text-red-500 transition-colors "
              onClick={() => scrollToSection("")}
            >
              <Link href="/profile">My Profile</Link>
            </div>
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

        <li className="flex flex-row justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-red-500 transition-colors w-full text-left"
          >
            Home
          </button>{" "}
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
        {isAuthenticated && (
          <li>
            <button
              onClick={() => {
                logout();
              }}
              className="flex w-full text-left px-4 py-2 text-sm hover:text-red-500 transition-colors "
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default MobileHeader;
