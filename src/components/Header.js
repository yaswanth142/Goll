import { MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import logo from "./lakshdeewpimg/gol-logo.png";
import Galary from "./Galary";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    // Header Code Strts Here
    <div className="fixed w-full bg-blue-50 text-black flex justify-between p-4 sm:p-1 items-center">
      <div className="ml-6">
        <ul>
          <li>
            <img src={logo} alt="Logo"></img>
          </li>
        </ul>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex gap-28 p-6 uppercase bg-white/10 mt-3 ">
          <li>
            <Link to="/">Find Reservations</Link>
          </li>
          <li>
            <Link to="/">Package</Link>
          </li>
          <li>
            <Link to="/">About Lakshadweep</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/Galary">Support</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/">SignUp</Link>
          </li>
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
    // Header Code Strts Here
  );
};

export default Header;
