import { FiMessageCircle, FiUsers, FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {
  MAIN_ROUTE,
  SETTING_ROUTE,
  CONTACTS_ROUTE,
} from "../utils/consts";

const NavBar = () => {
  const baseClasses =
    "flex flex-col items-center justify-center py-3 px-4 transition-colors duration-300 ease-in-out";

  const getActiveClass = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? "text-[#FFD300] shadow-neon scale-110 pulse"
      : "text-[#C1B6D9] hover:text-[#FFD300]";

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#7851A9] border-t-2 border-[#543679]">
      <div className="flex justify-around items-center py-2">
        <NavLink
          to={MAIN_ROUTE}
          className={(navData) => `${baseClasses} ${getActiveClass(navData)}`}
        >
          <FiMessageCircle size={30} />
        </NavLink>

        <NavLink
          to={CONTACTS_ROUTE}
          className={(navData) => `${baseClasses} ${getActiveClass(navData)}`}
        >
          <FiUsers size={30} />
        </NavLink>

        <NavLink
          to={SETTING_ROUTE}
          className={(navData) => `${baseClasses} ${getActiveClass(navData)}`}
        >
          <FiSettings size={30} />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
