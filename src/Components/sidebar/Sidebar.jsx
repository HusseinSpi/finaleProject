import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/thunk/currentUserThunks";
import { NavLink } from "react-router-dom";
import { FaHome, FaVideo } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import logo from "../../../public/logo6.png";

const Sidebar = ({ children }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const currentUser = useSelector(
    (state) => state.currentUser.data?.data?.user
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="flex h-full">
      <div className="bg-zinc-400 fixed top-0 left-0 h-full  w-64 flex flex-col justify-between">
        <div className="py-6">
          <div className="ml-16 grid h-10 w-32 place-content-center rounded-lg bg-transparent">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="mt-10 space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ml-4 h-11 ${
                    isActive
                      ? "bg-secondaryColor text-primaryColor mr-0 rounded-r-none"
                      : "text-secondaryColor"
                  }`
                }
              >
                <FaHome className="text-xl" />
                {t("Home")}
              </NavLink>
            </li>
            {currentUser?.role === "admin" && (
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ml-4 h-11 ${
                      isActive
                        ? "text-red-600 mr-0 rounded-r-none"
                        : "text-secondaryColor"
                    }`
                  }
                >
                  <RiAdminLine className="text-xl" />
                  {t("Admin")}
                </NavLink>
              </li>
            )}
            {(currentUser?.role === "admin" ||
              currentUser?.role === "Specialist") && (
              <>
                <li>
                  <NavLink
                    to="/messages"
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ml-4 h-11 ${
                        isActive
                          ? "text-red-600 mr-0 rounded-r-none"
                          : "text-secondaryColor"
                      }`
                    }
                  >
                    <IoMailOutline className="text-xl" />
                    {t("MessageRequests")}
                  </NavLink>
                </li>
              </>
            )}
            {(currentUser?.role === "admin" ||
              currentUser?.role === "Specialist") && (
              <>
                <li>
                  <NavLink
                    to="/videoCallSpecialist"
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ml-4 h-11 ${
                        isActive
                          ? "text-red-600 mr-0 rounded-r-none"
                          : "text-secondaryColor"
                      }`
                    }
                  >
                    <FaVideo className="text-xl" />
                    {t("videoCall")}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="px-4 pb-4">
          <select
            onChange={handleLanguageChange}
            className="w-full px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">English (US)</option>
            <option value="ar">العربية</option>
            <option value="he">עברית</option>
          </select>
        </div>
      </div>
      <div className="ml-64 flex-1 p-6 bg-secondaryColor">{children}</div>
    </div>
  );
};

export default Sidebar;
