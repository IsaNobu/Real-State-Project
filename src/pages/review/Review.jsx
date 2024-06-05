import { useEffect, useState } from "react";
import Reviews from "./Reviews";
import { Helmet } from "react-helmet-async";

const Review = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-[600px_600px] justify-center gap-6 mt-6">
      <Helmet>
        <title>Reviews</title>
      </Helmet>
      {data.map((data, idx) => (
        <Reviews key={idx} data={data}></Reviews>
      ))}
    </div>
  );
};

export default Review;
