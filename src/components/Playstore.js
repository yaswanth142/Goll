import React from "react";
import k1 from "./lakshdeewpimg/Kavaratti.png";

const Playstore = () => {
  return (
    <>
      {/* subscription code starts here */}
      <div className="f">
        <div className="f1">
          <h1 className="f1t ">Download Our App</h1>
          <br />
          <h2 className="text-white">The Best Traveller In the World</h2>
          <button className="subb2"></button>
          <div className="fright">
            <img src={k1} alt="" />
          </div>
        </div>
      </div>
      {/* subscription code starts here */}

      {/* fotter code starts here */}

      {/* <div className="fotter">
        <ItemsContainer />
        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
        </div> */}
      {/* fotter code ends here */}
    </>
  );
};

export default Playstore;
