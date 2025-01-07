import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Logo from "./Logo";
import avatar from "../../assets/avatar.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white h-16 md:h-20 flex justify-between items-center ">
      <div className="flex items-center gap-8">
        <Logo />
        <ul
          className={`md:flex md:space-x-8  text-[#475467] font-medium font-inter text-base ${
            isMobileMenuOpen
              ? "flex flex-col space-y-4 absolute top-16 left-0 right-0 bg-white p-4 shadow-lg md:block"
              : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="#" className="hover:text-gray-500">
              Products
            </Link>
            <FaChevronDown className="ml-2 text-sm" />
          </li>
          <li className="flex items-center">
            <Link to="#" className="hover:text-gray-500">
              Resources
            </Link>
            <FaChevronDown className="ml-2 text-sm" />
          </li>
          <li>
            <Link to="#" className="hover:text-gray-500">
              Pricing
            </Link>
          </li>
        </ul>
      </div>

      <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
        <MdMenu className="text-xl text-[#475467]" />
      </div>

      <div className="hidden md:block w-10 h-10 rounded-full border-[.75px] border-[#101828]border-opacity-[0.08%]">
        <img src={avatar} alt="profile" className="w-10 rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
