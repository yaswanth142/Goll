import React from "react";
import Header from "./Header";
import Section from "./Section";
import k1 from "./lakshdeewpimg/ScubaDiving.png";
import k2 from "./lakshdeewpimg/Boating.png";
import k3 from "./lakshdeewpimg/TurtleWatching.png";
import k4 from "./lakshdeewpimg/fishing.png";
import k5 from "./lakshdeewpimg/scuba.png";
import k6 from "./lakshdeewpimg/kayaking.png";
import k7 from "./lakshdeewpimg/snorekillling.png";
import k8 from "./lakshdeewpimg/jetski.png";
import k9 from "./lakshdeewpimg/turtlewatch.png";
import k10 from "./lakshdeewpimg/parasailing.png";
import Playstore from "./Playstore";
import Footer from "./Footer/Footer";

const Attraction = () => {
  return (
    <div className="attraction">
      <Header />
      <Section name="Attraction" />
      {/* Tagline code starts here */}
      <div>
        <b>
          <h1 className="text-center text-2xl">Things you do on your stay</h1>
        </b>
      </div>

      {/* Tagline code ends here */}

      {/* flex box code starts here */}
      <div>
        <div className="page3flex">
          <div className="page3flex1">
            <img src={k1} alt="error" />
          </div>
          <div className="page3flex2">
            <img src={k2} alt="error" />
          </div>
          <div className="page3flex3">
            <img src={k3} alt="error" />
          </div>
          <div className="page3flex4">
            <img src={k4} alt="error" />
          </div>
        </div>
      </div>
      {/* flex box code ends here */}

      {/* cards code starts here */}
      <div className="cards">
        <div className="page3cards">
          <div className="page3cards1">
            <img src={k5} alt="error" />
            <span className="page3cardt">
              <b>
                <span className="text-3xl">Scuba Diving</span>
                <br />
              </b>
              <b>
                <span className="">Lakshadweep</span>
              </b>
              <br />
              <span className="page3cardt">
                The islands of Bangaram, Kadmat, Kavaratti, and Minicoy have the
                scuba diving operators. The waters are calm and are an ideal
                location for beginners. As for the more experienced divers,
                there is a huge marine diversity and untouched reefs to explore.
                Sloping reefs, caves, coral gardens, overhangs, and shipwrecks
                are some of the attractions a diver could explore. Of the 4
                islands where scuba diving is possible, Bangaram and Kadmat are
                quite popular while Minicoy and Kavaratti are remote and
                relatively not busy. Kavaratti offers caves to explore while
                Bangaram and Minicoy offer shipwreck dives.
              </span>
            </span>
          </div>

          <div className="page3cards2">
            <span className="page3cardt">
              <b>
                <span className="text-3xl">Parasailing</span>
                <br />
              </b>
              <b>
                <span className="">Lakshadweep</span>
              </b>
              <br />
              <span className="page3cardt">
                Kayaking is an amazing way to enjoy the turquoise blue coral
                beaches of Lakshadweep. Kayaking is a water sport using a Kayak
                for moving across water. A Kayak is a narrow watercraft that is
                propelled by a double-bladed paddle. Unlike a Canoe, this is
                differentiated by the sitting position of the paddler and the
                number of blades on the paddle. Experts are available at every
                resort offering this activity making it all the more easy for
                beginners to start enjoying this sport. Your much-needed peace
                and quiet is just a Kayak away.
              </span>
            </span>
            <img src={k6} alt="error" />
          </div>

          <div className="page3cards1">
            <img src={k7} alt="error" />
            <span className="page3cardt">
              <b>
                <span className="text-3xl">Turtle Watch</span>
                <br />
              </b>
              <b>
                <span className="">Lakshadweep</span>
              </b>
              <br />
              <span className="page3cardt">
                Snorkeling is the practice of swimming on or through a body of
                water while equipped with a diving mask, a shaped breathing tube
                called a snorkel, and usually swim fins. It is an amazing
                underwater experience that anyone can try. It is so easy to
                adapt yourself with a short class which will be given by
                experts. Getting to see the magnificent marine life up close
                enough to touch them cannot be explained in words. You have to
                experience it. Lakshadweep is blessed with abundant coral reefs
                offering you just this luxury in almost every island that you
                choose to holiday.
              </span>
            </span>
          </div>

          <div className="page3cards2">
            <span className="page3cardt">
              <b>
                <span className="text-3xl">Jet Ski</span>
                <br />
              </b>
              <b>
                <span className="">Lakshadweep</span>
              </b>
              <br />
              <span className="page3cardt">
                Did you know that Jet Ski is in fact the brand name of a
                personal water craft manufactured by the Japanese company
                Kawasaki? The term is now widely used for any similar watercraft
                mainly for recreation. The best of the islands for this is are
                Kavaratti, Minicoy and Bangaram. It is a high adrenalin sport
                and needs some skill to enjoy. However, beginners need not worry
                as there are basic training will be provided by the operators.
              </span>
            </span>
            <img src={k8} alt="error" />
          </div>
          <div className="page3cards1">
            <img src={k9} alt="error" />
            <span className="page3cardt">
              <b>
                <span className="text-3xl">Turtle Watch</span>
                <br />
              </b>
              <b>
                <span className="">Lakshadweep</span>
              </b>
              <br />
              <span className="page3cardt">
                Welcome to Turtle Watch, a tracking site where you can see
                turtles from boat. The turtle watch program is staffed by
                volunteers they take you in a boat to the site where you can see
                tortoise are living and you can touch them in some
                circumstances.
              </span>
            </span>
          </div>
          <div className="page3cards2">
            <span className="page3cardt">
              <b>
                <span className="text-3xl">Parasailing</span>
                <br />
              </b>
              <b>
                <span className="">Lakshadweep</span>
              </b>
              <br />
              <span className="page3cardt"></span>
              This is often referred to as a recreational exercise. However it
              can also be enjoyed as a cool holiday experience here in the
              islands of Lakshadweep. A single person or 2 or 3 people are tied
              in to a parachute and is pulled along by a boat. Bangaram and
              Kadmat are probably the most famous locations for water sports
              among the islands of Lakshadweep.
            </span>
            <img src={k10} alt="error" />
          </div>
        </div>
      </div>
      {/* flex box code ends here */}

      <Playstore />
      <Footer />
    </div>
  );
};

export default Attraction;
