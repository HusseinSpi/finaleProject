import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/thunk/currentUserThunks";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineStar } from "react-icons/ai";

const Sidebar = ({ children }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state) => state.currentUser.data?.data?.user
  );

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="flex h-full">
      <div className="bg-gray-300 fixed top-0 left-0 h-full bg-primaryColor w-64 flex flex-col justify-between">
        <div className="py-6">
          <span className="ml-16 grid h-10 w-32 place-content-center rounded-lg bg-transparent">
            Kids Land
          </span>
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
                Home
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
                  Admin
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
                    Message Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reviews"
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium ml-4 h-11 ${
                        isActive
                          ? "text-red-600 mr-0 rounded-r-none"
                          : "text-secondaryColor"
                      }`
                    }
                  >
                    <AiOutlineStar className="text-xl" />
                    Reviews
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="ml-64 flex-1 p-6 bg-secondaryColor">{children}</div>
    </div>
  );
};

export default Sidebar;
