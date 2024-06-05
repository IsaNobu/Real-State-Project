import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RealEstateCard = ({ data }) => {
  const { image, profileImage, name, price, id } = data;
  return (
    <div className="transition transform duration-300 hover:scale-110 cursor-pointer">
      <Link to={`/RealEstateDetails/${id}`}>
        <div className="card md:w-[500px] w-[300px] h-[340px] bg-base-100 shadow-xl image-full bg-none brightness-200">
          <figure>
            <img className="w-full " src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="card-actions">
              <img
                className="rounded-[50%] w-[60px]"
                src={profileImage}
                alt=""
              />
              <p className="text-xl">{name}</p>
            </div>
            <span className="bg-emerald-800 px-3 rounded-xl w-[85px]">
              {price}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

RealEstateCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RealEstateCard;
