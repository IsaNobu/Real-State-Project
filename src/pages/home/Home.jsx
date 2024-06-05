import { Helmet } from "react-helmet-async";
import Slider from "./slider/Slider";
import RealEstateCard from "./real estate card/RealEstateSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
      <RealEstateCard></RealEstateCard>
    </div>
  );
};

export default Home;
