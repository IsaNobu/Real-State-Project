import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[]}
    >
      <SwiperSlide>
        <div className="relative">
          {" "}
          <h1 className="absolute text-center text-white text-4xl font-bold lg:w-[900px] lg:left-1/4 lg:right-1/2 mt-52 left-[15%] right-1/2 md:w-[600px] w-[300px] animate__animated animate__flash">
            Buy your desired Land and make your dreams come true
          </h1>
          <img
            className="w-full md:h-[650px] h-[626px] lg:h-[900px]"
            src="../../../../public/Assets/image-1.jpg"
            alt="Slide 1 description"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          {" "}
          <h1 className="absolute text-center text-white text-4xl font-bold lg:w-[900px] lg:left-1/4 lg:right-1/2 mt-52 left-[15%] right-1/2 md:w-[600px] w-[300px] animate__animated animate__flash">
            Buy your desired Land and make your dreams come true
          </h1>
          <img
            className="w-full md:h-[650px] h-[626px] lg:h-[900px]"
            src="../../../../public/Assets/image-2.jpg"
            alt="Slide 1 description"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          {" "}
          <h1 className="absolute text-center text-white text-4xl font-bold lg:w-[900px] lg:left-1/4 lg:right-1/2 mt-52 left-[15%] right-1/2 md:w-[600px] w-[300px] animate__animated animate__flash">
            Buy your desired Land and make your dreams come true
          </h1>
          <img
            className="w-full md:h-[650px] h-[626px] lg:h-[900px]"
            src="../../../../public/Assets/image-3.jpg"
            alt="Slide 1 description"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
