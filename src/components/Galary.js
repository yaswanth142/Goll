import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Section from "./Section";
import Playstore from "./Playstore";
import k1 from "./lakshdeewpimg/page2rect1.png";
import k2 from "./lakshdeewpimg/page2rect2.png";
import k3 from "./lakshdeewpimg/page2rect3.png";
import k4 from "./lakshdeewpimg/page2rect4.png";
import k5 from "./lakshdeewpimg/page2rect5.png";
import k6 from "./lakshdeewpimg/page2rect6.png";
import k7 from "./lakshdeewpimg/page2rect7.png";
import k8 from "./lakshdeewpimg/page2rect8.png";
import k9 from "./lakshdeewpimg/page2rect9.png";
import k10 from "./lakshdeewpimg/page2rect10.png";
import k11 from "./lakshdeewpimg/page2rect11.png";

const Galary = () => {
  return (
    <div className="gallary">
      {/* header starts code here */}
      <Header />
      {/* header starts code here */}

      {/* section starts code here */}
      <Section name="Gallary" />
      {/* section starts code here */}

      {/* lorem starts code here */}
      <div>
        <div className="lorem">
          <h4 className="font-bold text-2xl m-4">Lorem Ipsum Dolor</h4>
          <span className="text-xl m-4">
            See the scenic beauty of Lakshadweep Islands which make them coral
            paradise of the world.
          </span>
        </div>
        {/* lorem ends code here */}

        {/* flex code  starts  here */}
        <div className="GallaryFlex">
          <ul>
            <li style={{ backgroundColor: "lightblue" }}>ALL</li>
            <li>LIFE</li>
            <li>MOMENTS</li>
            <li>NATURE</li>
            <li>STORIES</li>
            <li>TRAVEL</li>
          </ul>
        </div>
        {/* flex code ends here */}

        {/* galary imges starts code here */}
        <div>
          <div className="p1">
            <img src={k1} alt="" className="lkimg1" />
            <img src={k2} alt="" className="lkimg2" />
          </div>
          <div className="p2">
            <img src={k3} alt="" className="lkimg3" />
            <img src={k4} alt="" className="lkimg4" />
            <img src={k5} alt="" className="lkimg5" />
          </div>
        </div>

        {/* galary imges ends code here */}

        {/*  lorem dolar code starts here */}
        <div className="mainp1">
          <div className="mainp2">
            <h1>
              Lorem Ipsum <br /> Dollar!
            </h1>
            <h4 className="text-lg">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
              <br />
              Pellentesque sapien arcu, luctus..
            </h4>
          </div>
          <div className="mainp3">
            <img src={k6} alt="" className="lkimg6" />
            <img src={k7} alt="" className="lkimg7" />
            <img src={k8} alt="" className="lkimg8" />
            <img src={k9} alt="" className="lkimg9" />
          </div>
        </div>
      </div>
      {/*  lorem dolar code ends here */}

      {/*  emit code starts here */}
      <div>
        <div className="mainp4">
          <b>
            <h1 className="text-2xl">Lorem Ipsum Dollar! sit Emit</h1>
          </b>
          <h1 className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Pellentesque sapien arcu, luctus..
          </h1>
        </div>
        <div className="gp1">
          <img src={k10} alt="" className="lkimg1" />
          <img src={k11} alt="" className="lkimg10" />
        </div>
      </div>
      {/*  emit code starts here */}
      <Playstore />
      <Footer />
    </div>
  );
};

export default Galary;
