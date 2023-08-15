import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="bg-gray-400 sticky z-40 top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
        <div className="flex-shrink-0 font-bold tracking-wider">LOGO</div>
        <div className="hidden md:block lg:block">
          <Menu />
        </div>
        <button
          type="button"
          className="md:hidden lg:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FaBars />
        </button>
      </div>
      <div className="md:hidden lg:hidden block">
        {showMobileMenu && <Menu />}
      </div>
    </nav>
  );
};

export default Header;
