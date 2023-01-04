import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";
import IslandBody from "./IslandBody";
import Playstore from "./Playstore";
import Section from "./Section";
import Subscribe from "./Subscribe";

const Island = () => {
  return (
    <div className="islandPage">
      <Header />
      <Section name="Island" />
      <IslandBody />
      <Subscribe />
      <Playstore />
      <Footer />
    </div>
  );
};

export default Island;
