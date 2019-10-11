import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Carousel1 from "./components/carousel";
import List from "./components/card";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <List title="card 1" subtitle="ojhniwsf joiwsjhoi ujrfoiwsjh" description="ljnaedosnh ohiuh iu nygtoihg iuhoiuyoiuy puoihyo9iu ;iujppoiuy poiuoy gfuytf jdc5e i8t7" />
      </div>
      <div>
        <AboutUs/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
