import { Helmet } from "react-helmet-async";
import Slider from "./slider/Slider";
import RealEstateSection from "./real estate card/RealEstateSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
      <RealEstateSection></RealEstateSection>
    </div>
  );
};

export default Home;
