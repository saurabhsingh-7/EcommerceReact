import React from "react";
import Carosel from "./Carosel/Carosel";
import Shopping from "./Shopping/Shopping";
import Offer from "./Offer/Offer";
import ShoopingBrands from "./Shpping-Brands/ShoopingBrands";
import Tranding from "./Tranding/Tranding";
import Footer from "./Footer/Footer";
const Home = () => {
  return (
    <div>
      <Carosel />
      <Shopping />
      <Offer />
      <ShoopingBrands />
      <Tranding />
      <Footer />
    </div>
  );
};

export default Home;
