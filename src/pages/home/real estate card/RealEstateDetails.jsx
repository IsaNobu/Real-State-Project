import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CiLink } from "react-icons/ci";
import { MapContainer, TileLayer } from "react-leaflet";
import { Helmet } from "react-helmet-async";

const RealEstateDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();

  const info = data.find((infos) => infos.id == id);

  const {
    image,
    profileImage,
    name,
    price,
    description,
    status,
    segment_name,
    land_name,
  } = info;

  return (
    <div className="flex lg:flex-row flex-col lg:justify-around">
      <Helmet>
        <title>Land Details</title>
      </Helmet>
      <div className="border-2 bg-[#F3EFE7] rounded-3xl lg:mx-0 mx-auto mt-6 md:w-[600px] w-[400px] lg:w-[800px] lg:h-[968px]">
        <div>
          <img className="w-[800px] rounded-t-3xl" src={image} alt="" />
        </div>
        <div className="space-y-6 p-6">
          <div className="text-2xl font-semibold">{land_name}</div>
          <div>
            <span className="text-xl font-medium text-emerald-900 flex items-center gap-3">
              <RiMoneyDollarCircleLine className="text-4xl" />
              {price}
            </span>
          </div>
          <div className="font-semibold text-2xl space-y-4">
            <p>{status}</p>
            <p>place: {segment_name}</p>
          </div>
          <div className="border-b-2 border-black border-dotted  pb-6">
            <p className="text-xl font-semibold">
              <span className="underline">description:</span> {description}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6 ml-6 mb-6">
            <img
              className="lg:w-[100px] md:w-[70px] w-[50px] rounded-[100%]"
              src={profileImage}
              alt=""
            />
            <h3 className="text-4xl font-semibold">{name}</h3>
          </div>
          <div className="text-4xl cursor-pointer">
            <CiLink />
          </div>
        </div>
      </div>
      <div className="h-[600px] lg:w-[400px] lg:mx-0 mx-auto md:w-[400px] w-[100px] mt-24 lg:mt-28">
        <MapContainer
          center={[22.788897560328394, 90.33787901174063]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default RealEstateDetails;
