import { useEffect, useState } from "react";
import RealEstateDetails from "./RealEstateCard";

const RealEstateSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("real-estate.json")
      .then((result) => result.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="bg-[#F3EFE7] w-full mt-28 py-20">
      <div className="text-center space-y-4 mb-20">
        <h1 className="text-5xl font-semibold">Our Featured Properties</h1>
        <p className="text-xl font-semibold">
          We are very proud of the service we provide. See what our guests have
          to say about us, <br /> our locations and services.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 justify-items-center ">
        {data.map((a, idx) => (
          <RealEstateDetails data={a} key={idx}></RealEstateDetails>
        ))}
      </div>
    </div>
  );
};

export default RealEstateSection;
