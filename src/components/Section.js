import React from "react";
import k1 from "./lakshdeewpimg/Boat.png";

const Section = (props) => {
  const name = props.name;
  return (
    <div className="bg-hero-image w-full h-screen bg-cover bg-center flex items-center">
      <div className="text-black font-extrabold">
        <h2 className="island">{name}</h2>
        <div className="search">
          <input text="" placeholder="Search" />
        </div>
        <div className="boat">
          <img src={k1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;
