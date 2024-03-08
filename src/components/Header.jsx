import searchIcon from "../assets/search-icon.svg";
import basketIcon from "../assets/basket-icon.svg";
import favoriteIcon from "../assets/favorite-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    value: "Home",
    link: '/'
  },
  {
    value: "Shop",
    link: '/shop'
  },
  {
    value: "Blogs",
    link: '#'
  },
  {
    value: "Order Tracking",
    link: '#'
  },
];

const Header = () => {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="border-b w-full h-[88px] lg:px-[100px] sm:p-0">
      <nav className="px-6 flex items-center justify-between h-[88px] gap-[90px] sm:bg-[#313638] md:bg-[#313638]">
        <div className="flex items-center">
          <Link to='/' className="font-main text-[24px] mr-[90px] sm:text-gray-400 md:text-gray-400 cursor-pointer">
            <span className="text-red-400">S</span>porty
          </Link>
          <ul
            className={`${
              menu ? "top-[87px]" : "top-[-500px]"
            } flex lg:gap-[90px] sm:flex-col sm:gap-0 md:absolute md:flex-col md:left-0 md:bg-gray-200/80 sm:bg-gray-100/80 sm:backdrop-blur-sm md:backdrop-blur-sm z-10 sm:absolute right-0 sm:w-full sm:h-auto sm:text-[30px] sm:items-center transition-all duration-700`}
          >
            {navLinks.map((link) => (
              <NavLink link={link} key={link.value} />
            ))}
            <div className="flex flex-col items-center gap-4 lg:hidden">
              <form className="flex items-center">
                {search && (
                  <input
                    type="text"
                    className={`border border-black text-sm h-9 px-3 transition-all duration-300 focus:outline-none`}
                  />
                )}
              </form>
              <div className="flex items-center my-4 gap-10">
                <img
                  src={searchIcon}
                  className="border-r-2 border-black pr-[14px] cursor-pointer"
                  alt=""
                  onClick={() => setSearch((s) => !s)}
                />
                <Link to="/cart">
                  <img src={basketIcon} className="sm:w-7" alt="" />
                </Link>
                <Link to="/favorites">
                  <img src={favoriteIcon} className="sm:w-7" alt="" />
                </Link>
              </div>
              <a
                href="#"
                className=" mb-4 text-[16px] bg-red-400 w-full md:w-[30%] font-semibold text-white text-center py-4 rounded-lg px-6 transition-all duration-300 hover:text-white hover:bg-red-500"
              >
                Login
              </a>
            </div>
          </ul>
        </div>
        <div className="flex items-center sm:hidden md:hidden">
          <form>
            <input
              type="text"
              className={`${
                search ? "w-40 opacity-1 px-2" : "w-0 opacity-0"
              } border border-black text-sm mr-2 h-7 transition-all :hidden duration-300 focus:outline-none`}
            />
          </form>
          <img
            src={searchIcon}
            className="border-r-2 border-black pr-[14px] cursor-pointer"
            alt=""
            onClick={() => setSearch((s) => !s)}
          />

          <a
            href="#"
            className="px-6 transition-all duration-300 hover:text-red-400 hover:underline"
          >
            Login
          </a>
          <Link to="/cart">
          <img src={basketIcon} className="pr-5" alt="" />
          </Link>
          <Link to="/favorites">
          <img src={favoriteIcon} alt="" />
          </Link>
        </div>

        <div
          onClick={() => setMenu((o) => !o)}
          className={`${
            menu ? "items-start" : "items-end"
          } sm:flex md:flex flex-col lg:hidden gap-2`}
        >
          <span className="w-8 h-[3px] rounded-full bg-white"></span>
          <span className="w-6 h-[3px] rounded-full bg-white"></span>
          <span className="w-4 h-[3px] rounded-full bg-white"></span>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ link }) => {
  return (
    <Link
      to={link.link}
      className="sm:p-4 md:text-xl md:p-4 flex items-center justify-center sm:gap-2 text-sm sm:text-[16px] sm:w-full font-semibold transition-all duration-300 hover:text-red-400"
    >
      {link.value}
    </Link>
  );
};

export default Header;
