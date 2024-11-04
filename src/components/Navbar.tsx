import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-white shadow font-inter z-20">
      <div className="container mx-auto flex justify-between items-center p-4 lg:px-24">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Link to={"/"}>
            <img src="logo.png" alt="Logo" className="w-36" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu Items */}
        <nav className="hidden ml-auto lg:flex lg:space-x-8 text-gray-500 font-medium text-sm ">
          <Link to="/" className="lg:hover:text-gray-700">
            Home
          </Link>
          <Link to="/" className="lg:hover:text-gray-700">
            Coupons
          </Link>
          <Link to="/" className="lg:hover:text-gray-700">
            Timeline
          </Link>
          <Link to="/" className="lg:hover:text-gray-700">
            Gallery
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Items*/}
      <nav
        className={`lg:hidden bg-white shadow absolute top-full left-1/2 transform -translate-x-1/2 w-4/5 z-20 ease-in-out transition-all duration-700 overflow-hidden ${
          isOpen ? "max-h-60 border-t-[3px] border-black" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col text-gray-500 font-semibold p-4">
          <li className="border-b border-gray-100 hover:bg-gray-50">
            <a href="#" className="block p-3 py-3 hover:text-gray-400 text-sm">
              Home
            </a>
          </li>
          <li className="border-b border-gray-100 hover:bg-gray-50">
            <a href="#" className="block p-3  hover:text-gray-400 text-sm">
              Coupon
            </a>
          </li>
          <li className="border-b border-gray-100 hover:bg-gray-50">
            <a href="#" className="block p-3  hover:text-gray-400 text-sm">
              Gift
            </a>
          </li>
          <li className="border-b border-gray-100 hover:bg-gray-50">
            <a href="#" className="block p-3  hover:text-gray-400 text-sm">
              Crossword
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
