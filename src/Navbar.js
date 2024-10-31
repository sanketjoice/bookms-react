import React from "react";
import logo from "./images/bookmyshow-logo-vector.png";
import { FiSearch } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';

export default function Navbar({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
return(
    <div>
        <nav className="flex items-center justify-between sm:px-4 md:px-44 md:h-18 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src={logo}
          alt="BookMyShow Logo"
          className=" h-14 md:h-16 hover:cursor-pointer"
        />
      </div>

      <div className="flex items-center flex-grow mx-4">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
          onChange={handleSearchChange}
          className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>

      <div className="mr-4">
        <select className="p-2 bg-white border rounded-md focus:outline-none hover:cursor-pointer">
          <option>Raichur</option>
          <option>Gurgaon</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Delhi</option>
        </select>
      </div>

      <button className="px-4 py-2 text-white bg-red-500 rounded-md">
        Sign in
      </button>

      <button className="ml-4">
        <HiOutlineMenu className="w-6 h-6 text-gray-700" />
      </button>
    </nav>
    </div>
)
}
