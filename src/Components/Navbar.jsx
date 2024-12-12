import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-blue-600 text-white h-[4rem] w-full fixed top-0 z-10 border-b-2 border-yellow-400">
      <div className="flex justify-between items-center   px-4 mt-5">
       

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden text-white m-auto  focus:outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex">
          <ul className="flex justify-evenly gap-6 w-full">
            <li className="hover:underline decoration-yellow-400">
              <Link to="/Home" >
                HOME
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="/About" >
                ABOUT 
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="/Advertise" >
                ADVERTISE
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="/Allnews" >
                ALL NEWS
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="/Contact" >
                CONTACT
              </Link>
            </li>
            
          </ul>

        </nav>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="lg:hidden bg-blue-400 p-4 w-fit m-auto text-center  rounded-md ">
          <ul className="flex flex-col space-y-4">
            <li className="hover:underline decoration-yellow-400">
              <Link to="/Home"  onClick={() => setIsDropdownOpen(false)}>
                HOME
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="/About"  onClick={() => setIsDropdownOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="/Advertise"  onClick={() => setIsDropdownOpen(false)}>
                ADVERTISE
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="/Allnews"  onClick={() => setIsDropdownOpen(false)}>
                ALL NEWS
              </Link>
            </li>
            <li className="hover:underline decoration-yellow-400">
              <Link to="/Contact"  onClick={() => setIsDropdownOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
