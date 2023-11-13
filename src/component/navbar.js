import React from 'react';
import{AiOutlineHeart} from 'react-icons/ai'
import{BsCartDash} from 'react-icons/bs'
import { Link } from 'react-router-dom';


export default function Header  () {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to='/' class="text-red-400 hover:text-gray-500 transition font-bold text-xl">Home</Link>
        <Link to='/shop' class="text-red-400 hover:text-gray-500 transition font-bold text-xl">Shop</Link>

        {/* Searchbar */}
        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus-outline-none"
            placeholder="search"
          />
          <button className="bg-primary border border-primary text-white py-4 px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a href="#!" className="text-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl">
            <i > <AiOutlineHeart/></i>
            </div>
            <div className="text-xs leading-3">Wish List</div>
            <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </span>
          </a>

          <Link to='/cart' className="text-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl">
            <i > <BsCartDash/></i>
            {/* <Link  className="text-center text-gray-700 hover:text-primary transition relative"> */}
            {/* ... (unchanged) */}
         
            </div>
           
            <div className="text-xs leading-3">Cart</div>
            <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </span>
            </Link>

          <a href="account" className="text-center text-gray-700 hover:text-primary transition relative">
            <div className="text-2xl">
              <i className="far fa-user"></i>
            </div>
            <div className="text-2xs leading-3 ">Account</div>
          </a>
        </div>
      </div>
    </header>
  );
};


