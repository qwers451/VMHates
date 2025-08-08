import { FiMessageCircle, FiUsers, FiSettings } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#3B1E54] border-t border-[#A06CD5]">
      <div className="flex justify-around items-center py-2">
        <button className="flex flex-col items-center text-[#C1B6D9] hover:text-[#FFD300] active:text-[#FFD300]">
          <FiMessageCircle size={24} />
          <span className="text-xs mt-1">Чаты</span>
        </button>

        <button className="flex flex-col items-center text-[#C1B6D9] hover:text-[#FFD300] active:text-[#FFD300]">
          <FiUsers size={24} />
          <span className="text-xs mt-1">Контакты</span>
        </button>

        <button className="flex flex-col items-center text-[#C1B6D9] hover:text-[#FFD300] active:text-[#FFD300]">
          <FiSettings size={24} />
          <span className="text-xs mt-1">Настройки</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
