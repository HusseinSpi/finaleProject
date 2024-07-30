import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/thunk/currentUserThunks";
import { NavLink } from "react-router-dom";
import logo from "../../../public/logo6.png";
import bubble from "../../../public/bubble.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentUser = useSelector(
    (state) => state.currentUser.data?.data?.user
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClasses = ({ isActive }) =>
    `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
      isActive
        ? "scale-110 text-primaryColor"
        : "text-primaryColor animate-float"
    } pt-5`;

  const navLinkStyles = {
    backgroundImage: `url(${bubble})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "2rem",
  };

  return (
    <nav className="relative p-2 bg-cover bg-[#32BAF1]">
      <div className="flex justify-between mt-5 items-center md:hidden">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
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
<<<<<<< HEAD
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
                  isActive
                    ? " scale-110 text-blue-900"
                    : "text-blue-900 animate-float"
                   
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
=======
              className={navLinkClasses}
              style={navLinkStyles}
>>>>>>> Hussein
            >
              {t("Games")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="songs"
<<<<<<< HEAD
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
                  isActive
                    ? " scale-110 text-blue-900"
                    : "text-blue-900 animate-float"
                   
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
=======
              className={navLinkClasses}
              style={navLinkStyles}
>>>>>>> Hussein
            >
              {t("Songs")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="stories"
<<<<<<< HEAD
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
                  isActive
                    ? "scale-110 text-blue-900"
                    : "text-blue-900 animate-float"
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
=======
              className={navLinkClasses}
              style={navLinkStyles}
>>>>>>> Hussein
            >
              {t("Stories")}
            </NavLink>
          </li>
          <li className="hidden md:flex justify-center">
<<<<<<< HEAD
            <img src={logo} alt="Logo" className="w-40 h-10" />
          </li>
          <li>
            <NavLink
              to="sign-in"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
                  isActive
                    ? "scale-110 text-blue-900"
                    : "text-blue-900 animate-float"
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
=======
            <NavLink to="/">
              <img src={logo} alt="Logo" className="w-40 h-10" />
>>>>>>> Hussein
            </NavLink>
          </li>
          <li>
            <NavLink
<<<<<<< HEAD
              to="sign-up"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
                  isActive
                    ? "scale-110 text-blue-900"
                    : "text-blue-900 animate-float"
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
=======
              to="meals"
              className={navLinkClasses}
              style={navLinkStyles}
>>>>>>> Hussein
            >
              {t("Meals")}
            </NavLink>
          </li>
          <li>
            <NavLink
<<<<<<< HEAD
              to="parents"
              className={({ isActive }) =>
                `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
                  isActive
                    ? "scale-110 text-blue-900"
                    : " animate-float text-blue-900"
                   
                } pt-5`
              }
              style={{
                backgroundImage: `url(${bubble})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                padding: "2rem",
              }}
=======
              to="meals"
              className={navLinkClasses}
              style={navLinkStyles}
>>>>>>> Hussein
            >
              {t("Meals")}
            </NavLink>
          </li>
          {currentUser && (
            <li>
              <NavLink
                to="account"
                className={navLinkClasses}
                style={navLinkStyles}
              >
                {t("Account")}
              </NavLink>
            </li>
          )}
          {!currentUser && (
            <li>
              <NavLink
                to="sign-in"
                className={navLinkClasses}
                style={navLinkStyles}
              >
                {t("SignIn")}
              </NavLink>
            </li>
          )}
        </ul>
        <div className="relative top-12 right-4 md:static md:ml-auto md:mr-4 mt-4 md:mt-0">
          <select
            onChange={handleLanguageChange}
<<<<<<< HEAD
            className=" p-2 text-lg font-semibold bg-transparent rounded-md  text-blue-900"
=======
            className="p-2 text-lg font-semibold bg-transparent rounded-md"
>>>>>>> Hussein
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
