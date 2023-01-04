import Island from "./components/Island";
import Galary from "./components/Galary";
import Attraction from "./components/Attraction"
import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";


function App() {
  return (
 
  //  <div className=''>
      // {/* <Island/> */}
  //     {/* <Galary/> */}
  //     <Attraction/>
  //   </div>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Island/>}/>
    <Route path="/gallary" element={<Galary/>}/>
    <Route path="/attraction" element={<Attraction/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
