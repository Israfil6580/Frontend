import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSticky = () => {
    if (window.scrollY > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <div className={`${isSticky ? "bg-black fixed top-0 w-full z-50" : ""}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Brand */}
        <div className="flex gap-[100px] items-center">
          <NavLink to="/" className="text-xl font-semibold text-gray-800">
            <img className="w-52" src={logo} alt="Logo" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavLink
              className="text-semi-transparent-white font-red-hat text-lg font-normal leading-[28.8px]"
              onClick={() => handleScroll("banner")}
            >
              Home
            </NavLink>
            <NavLink
              className="text-semi-transparent-white font-red-hat text-lg font-normal leading-[28.8px]"
              onClick={() => handleScroll("features")}
            >
              Features
            </NavLink>
            <NavLink
              className="text-semi-transparent-white font-red-hat text-lg font-normal leading-[28.8px]"
              onClick={() => handleScroll("how-its-work")}
            >
              How It Works
            </NavLink>
            <NavLink
              className="text-semi-transparent-white font-red-hat text-lg font-normal leading-[28.8px]"
              onClick={() => handleScroll("faqs")}
            >
              FAQs
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-black z-50 shadow-lg transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-6 space-y-8">
            <NavLink
              onClick={() => handleScroll("banner")}
              className="text-semi-transparent-white font-red-hat text-lg font-normal leading-[28.8px]"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => handleScroll("features")}
              className="text-semi-transparent-white font-red-hat text-lg font-normal leading-[28.8px]"
            >
              Features
            </NavLink>
            <NavLink
              onClick={() => handleScroll("how-its-work")}
              className="text-semi-transparent-white font-red-hat text-lg font-normal leading-[28.8px]"
            >
              How It Works
            </NavLink>
            <NavLink
              onClick={() => handleScroll("faqs")}
              className="text-semi-transparent-white font-red-hat text-lg font-normal leading-[28.8px]"
            >
              FAQs
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-white border border-semi-transparent-white focus:outline-none transition-transform duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Action Button */}
        <NavLink
          type="button"
          className="lg:block hidden py-4 px-8 rounded-[78px] bg-gradient-to-r from-[#1692DC] to-[#231DDF] text-white"
        >
          <span className="text-xl font-medium leading-[30px] tracking-wide">
            Join Now
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
