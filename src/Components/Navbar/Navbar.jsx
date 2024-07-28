import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/logo6.png";
import bubble from "../../../public/bubble.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative p-2 bg-cover bg-[#32BAF1]">
      <div className="flex justify-between mt-5 items-center md:hidden">
        <img src={logo} alt="Logo" />
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
        <ul className="flex flex-col md:flex-row md:space-x-4 w-full md:justify-center items-center">
          <li>
            <NavLink
              to="games"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
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
              {t("Games")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="songs"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
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
              {t("Songs")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="stories"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
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
              {t("Stories")}
            </NavLink>
          </li>
          <li className="hidden md:flex justify-center">
            <img src={logo} alt="Logo" className="w-40 h-10" />
          </li>
          <li>
            <NavLink
              to="sign-in"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
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
              {t("SignIn")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sign-up"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
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
              {t("SignUp")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="parents"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
                  isActive
                    ? "scale-110 text-primaryColor"
                    : "animate-float text-primaryColor"
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
              {t("Parents")}
            </NavLink>
          </li>
        </ul>
        <div className="relative top-12 right-4 md:static md:ml-auto md:mr-4 mt-4 md:mt-0">
          <select
            onChange={handleLanguageChange}
            className=" p-2 text-lg font-semibold bg-transparent rounded-md "
          >
            <option value="en">En</option>
            <option value="ar">Ar</option>
            <option value="he">He</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
