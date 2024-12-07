"use client";
import React, { useState } from 'react';
import { SearchIcon, HeartIcon, ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className='bg-white w-full flex items-center justify-between px-8 h-[60px] border-b border-gray-300'>
        <h1 className="text-black font-inter text-[20px] font-bold leading-[24px] tracking-[0.03em]">
          Exclusive
        </h1>
        <div className="flex items-center space-x-6 w-full justify-end">
          <div className="hidden md:flex space-x-6">
            <a href="/Home" className="text-black hover:underline focus:underline active:underline">
              Home
            </a>
            <a href="/About" className="text-black hover:underline focus:underline active:underline">
              About
            </a>
            <a href="/Contact" className="text-black hover:underline focus:underline active:underline">
              Contact
            </a>
            <a href="/Signup" className="text-black hover:underline focus:underline active:underline">
              Sign Up
            </a>
          </div>
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 w-[30%] max-w-[300px] hidden md:flex">
  <input
    type="text"
    placeholder="What are you looking for?"
    className="bg-gray-100 text-gray-700 w-full py-2 px-3 rounded-md focus:outline-none"
  />
  <SearchIcon className="text-black w-5 h-5 ml-2" />
</div>
          <div className="flex items-center space-x-6">
            <HeartIcon className="text-black w-6 h-6" />
            <ShoppingCart className="text-black w-6 h-6" />
          </div>
          <div className="md:hidden">
            <Menu className="text-black w-6 h-6" onClick={toggleMenu} />
          </div>
        </div>
      </div>
      <div className={`md:hidden bg-white p-4 space-y-4 ${menuOpen ? 'block' : 'hidden'}`}>
        <a href="/Home" className="text-black hover:underline focus:underline active:underline block">
          Home
        </a>
        <a href="/About" className="text-black hover:underline focus:underline active:underline block">
          About
        </a>
        <a href="/Contact" className="text-black hover:underline focus:underline active:underline block">
          Contact
        </a>
        <a href="/Signup" className="text-black hover:underline focus:underline active:underline block">
          Sign Up
        </a>
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-1 w-full mt-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 text-gray-700 w-full py-2 px-3 rounded-md focus:outline-none"
          />
          <SearchIcon className="text-black w-5 h-5 ml-2" />
        </div>

     
      </div>
    </div>
  );
};

export default Navbar;



