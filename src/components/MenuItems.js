import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase text-white text-8xl bg-black/70 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <div className="cursor">
       <Close onClick={showMenu} className="cursor-pointer" />
    </div>
     
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
        <Link to="/">Support</Link>
      </li>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/">SignUp</Link>
      </li>
    </ul>
  );
};

export default MenuItems;
