import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Dumbbell,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-bg text-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <div className="space-y-2">
            <p className="flex items-center">About Us</p>
            <p className="flex items-center">Why Us </p>
            <p className="flex items-center">Security </p>
            <p className="flex items-center">Partnership </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Basic Yoga
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Strength Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Body Building{" "}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Weight Lost
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Help</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Contact US</h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <Phone className="mr-2 h-4 w-4" /> +1(383)76-6284
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 h-4 w-4" /> contact@gmail.com
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-red-500" /> Kathmandu, Nepal
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Subscribe Our Newsletter</h2>
          <form className="mb-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 text-indigo-900 bg-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className="mt-8 flex flex-row text-sm justify-evenly">
        <span className="flex flex-row">
          <Dumbbell className=" text-red-500 " />
          FITNESXIA
        </span>
        <p>
          Copyright © 2024 EverestFitness. All rights reserved. Powered by MSP
          Solution Pvt. Ltd.
        </p>
        <div className=" flex flex-row space-x-2">
          <a href="#" className="text-white hover:text-pink-400">
            <Instagram className="h-6 w-6" />
          </a>

          <a href="#" className="text-white hover:text-blue-400">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
