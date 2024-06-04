import { Helmet } from "react-helmet-async";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
    </div>
  );
};

export default Home;
