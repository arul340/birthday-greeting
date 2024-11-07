import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Coupons", href: "/coupons" },
  { name: "Timeline", href: "/timeline" },
  { name: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed bg-white shadow font-inter z-50 max-w-full w-full">
      <div className="container mx-auto flex justify-between items-center p-4 lg:px-24 ">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <NavLink to={"/"}>
            <img src="logo.webp" alt="Logo" className="w-36" />
          </NavLink>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu Items */}
        <nav className="hidden ml-auto lg:flex lg:space-x-8 text-gray-500 font-medium text-sm ">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="lg:hover:text-gray-700"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Items */}
      <nav
        className={`lg:hidden bg-white shadow absolute top-full left-1/2 transform -translate-x-1/2 w-4/5 ease-in-out transition-all duration-700 overflow-hidden z-50 ${
          isOpen ? "max-h-60 border-t-[3px] border-black" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col text-gray-500 p-3 font-medium">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href}>
              <li className="border-b border-gray-100 hover:bg-gray-50 p-3 text-sm">
                {item.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
