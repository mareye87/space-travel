import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import { Aside, MenuLinks } from "../components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openAside, setOpenAside] = useState(false);
  return (
    <nav className="absolute w-full flex justify-between items-center mt-4  md:mt-10  ">
      <div className="flex w-1/2 items-center">
        <Link to="/" className="cursor-pointer ">
          <img
            src={logo}
            alt="logo"
            className="mx-6 w-12 h-12 transition duration-500 hover:rotate-180"
          />
        </Link>
        <div className="hidden lg:block h-[1px] w-full bg-slate-500"></div>
      </div>
      <MenuLinks />
      <Aside setOpenAside={setOpenAside} openAside={openAside} />
      <div>
        <img
          src={hamburger}
          alt="menu"
          onClick={() => {
            setOpenAside(!openAside);
          }}
          className=" md:hidden w-8 h-6 mr-6 hover:scale-110 transition duration-200 z-[50] "
        />
      </div>
    </nav>
  );
};

export default Navbar;
