import React from "react";
import Ourstory from "../components/Ourstory";
import Shppingstore from "../components/Shppingstore";
import Sofaoverflow from "../components/Sofaoverflow";
import Percentageoff from "../components/Percentageoff";
import Footer from "../components/Footer";
import Latestdeal from "../components/Latestdeal";
import Trendingfurniture from "../components/Trendingfurniture";
import Testimonials from "../components/Testinomals";

const Home = () => {
  return (
    <>
     <Ourstory />
      <Trendingfurniture />
      <Shppingstore />
      <Sofaoverflow />
      <Latestdeal />
      <Percentageoff />
      <Testimonials/>
      <Footer />
    </>
  );
};

export default Home;
