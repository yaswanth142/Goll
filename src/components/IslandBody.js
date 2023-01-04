import React from "react";
import k1 from "./lakshdeewpimg/Kavaratti.png";
import k2 from "./lakshdeewpimg/backimg1.png";

const IslandBody = () => {
  const posts = [
    {
      title: "Kavaratti",
      img: "https://media.gettyimages.com/id/144104376/photo/india-lakshadweep-off-kerala-coast-kavaratti-island-archipelago-of-36-islands-north-of-maldives.jpg?s=612x612&w=0&k=20&c=SA7qWt7BUYzSYa-J1hGanaxFPM2lnn3LSBilprBE9vI=",
      content:
        "Kavaratti is the capital of the union Territory of Lakshadweep having....",
    },
    {
      title: "Kavaratti",
      img: "https://media.istockphoto.com/id/153761009/photo/palm-trees-hanging-over-a-sandy-white-beach.jpg?b=1&s=170667a&w=0&k=20&c=La10q4yaqoo3wvwDRACZbi8yFI3crm7Kld-c1THzkks=",
      content:
        "Kavaratti is the capital of the union Territory of Lakshadweep having....",
    },
    {
      title: "Kavaratti",
      img: "https://media.istockphoto.com/id/1224360439/photo/waiting-to-sail.jpg?b=1&s=170667a&w=0&k=20&c=h-QfBhINJfD22Ylt52o2JpNKITRAxSdBhDAB2-VXyic=",
      content:
        "Kavaratti is the capital of the union Territory of Lakshadweep having....",
    },
    {
      title: "Kavaratti",
      img: "https://xiradestinations.com/wp-content/uploads/2020/04/lak44.jpg",
      content:
        "Kavaratti is the capital of the union Territory of Lakshadweep having....",
    },
    {
      title: "Kavaratti",
      img: "https://www.traveltourguru.in/wp-content/uploads/2017/07/Water-Sports-in-Kalpeni-Beachs-Lakshadweep.jpg",
      content:
        "Kavaratti is the capital of the union Territory of Lakshadweep having....",
    },
    {
      title: "Kavaratti",
      img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2017/08/ss-280717-A-blue-boat-on-the-blue-waters-of-Agatti-Island.jpg",
      content:
        "Kavaratti is the capital of the union Territory of Lakshadweep having....",
    },
  ];
  return (
    <div className="">
      {/* lorem ipsum code starts here */}
      <div className="lorem">
        <h4 className="font-bold text-2xl m-4">Lorem Ipsum Dolor</h4>
        <span className="text-xl m-4">
          lorem isghshdgv dhgfcgv hdgfv ahsdvsf asdhsvf ahdsfyjsnb kueytrg
          xuwegrfetuyuka <br />
          dkuiy dygftuyh ei8w47t6yg oie8w4y75eth ioe87w8e5trh oe87rt6rhbd
          oe8r7yet6geoi8495tyruosihrdgtbffhr iry8tguh ieutfgfhsfrifkns
          hustrygkshhuifhkjshs
        </span>
      </div>
      {/* lorem ipsum code ends here */}

      {/* kavaratti images code starts here */}
      <div className="page1cards">
      <div className=" grid gap-3 lg:grid-cols-3 m-28">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-96"
              src={items.img}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">
                {items.title}
              </h4>
              <p className="mb-2 leading-normal">{items.content}</p>
              <p className="text-xl">
                <b>4.5</b>(1.5k Review)
              </p>
              <button className="px-4 ml-48 -mt-80 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Explore more
              </button>
            </div>
          </div>
          
        ))}
        </div>
        <center>
          <button className="discover">Discover More</button>
        </center>
      </div>
      {/* kavaratti images code starts here */}

      {/* contactus code starts here */}

      <div>
        <div className="left">
          <b>
            <h1 className="text-4xl">
              Discover Beautiful Places<br></br>With Goal
            </h1>
          </b>
          <br></br>
          <br></br>
          <span>
            lorem jvhftughebkn,fyvm ckugc b ffuiwyfn mfhgif sfhuihfcs
            wwgfyr6wfuhwiyf78u <br></br>jfgbyi hfywolfyn ffuiwyfn mfhgif
            sfhuihfcs iuydghuoufhdhugsyvhbsugivhkb<br></br>
            juiytfughy897tgfihkbwjpro7tucgfhv nbhiugyb{" "}
          </span>
          <br></br>
          <br></br>
          <br></br>
          <span>Lorem Ipsum dolor sit amet ,constructiriu jdhud jhids</span>
          <br></br>
          <br></br>
          <span>Lorem Ipsum dolor sit amet ,constructiriu jdhud jhids</span>
          <br></br>
          <br></br>
          <span>Lorem Ipsum dolor sit amet ,constructiriu jdhud jhids</span>
          <br></br>
          <br></br>
          <br></br>

          <button className="contact">Contact Us</button>
        </div>
        <div className="right">
          <img src={k1} alt="error" />
        </div>
      </div>

      {/* contactus code Ends here */}
    </div>
  );
};

export default IslandBody;
