import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white">

      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-sm pb-8"
      >
        <SocialIcons Icons={Icons} />
        <hr></hr><br></br>
        <span className="text-center">Copyright © 2023 GoL Travels Private Limited. All rights reserved.</span>

      </div>
    </footer>
  );
};

export default Footer;
