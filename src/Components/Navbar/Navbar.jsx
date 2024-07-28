import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// import logo from "../../../public/logo.png";
import logo from "../../../public/logo6.png";
import bubble from "../../../public/bubble.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative p-2 bg-cover bg-[#32BAF1]">
      <div className="flex justify-between mt-5 items-center md:hidden  ">
        <Link className="w-56 h-24" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`md:flex md:items-center md:w-auto text-xl mt-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 w-full md:justify-center items-center ">
          <li>
            <NavLink
              to="games"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold  bg-cover  transition-transform duration-300 ease-in-out hover:scale-105  ${
                  isActive
                    ? " scale-110 text-primaryColor"
                    : "text-primaryColor animate-float"
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="songs"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover  transition-transform duration-300 ease-in-out hover:scale-105  ${
                  isActive
                    ? " scale-110 text-primaryColor"
                    : "text-primaryColor animate-float"
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              Songs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="stories"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover  transition-transform duration-300 ease-in-out hover:scale-105   ${
                  isActive
                    ? "scale-110 text-primaryColor"
                    : "text-primaryColor animate-float"
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              Stories
            </NavLink>
          </li>
          <li className="hidden md:flex justify-center">
            <img src={logo} alt="Logo" className="w-40 h-10" />
          </li>
          <li>
            <NavLink
              to="sign-in"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover  transition-transform duration-300 ease-in-out hover:scale-105  ${
                  isActive
                    ? "scale-110 text-primaryColor"
                    : "text-primaryColor animate-float"
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sign-up"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover  transition-transform duration-300 ease-in-out hover:scale-105   ${
                  isActive
                    ? "scale-110 text-primaryColor"
                    : "text-primaryColor animate-float"
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="parents"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover  transition-transform duration-300 ease-in-out hover:scale-105  ${
                  isActive
                    ? "scale-110 text-primaryColor"
                    : " animate-float text-primaryColor"
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
            >
              Parents
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
