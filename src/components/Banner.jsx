import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerOne from "../assets/aden-1.jpg";
import bannerTwo from "../assets/aden-2.jpg";
import bannerThree from "../assets/aden-3.jpg";

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={10}
    >
      <SwiperSlide className="relative">
        <img
          src={bannerOne}
          alt="Eco Adventure 1"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
          <h1 className="text-lg md:text-3xl font-bold">
            Eco Adventure Awaits
          </h1>
          <p className="text-sm md:text-base">
            Discover the beauty of the wild.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={bannerTwo}
          alt="Eco Adventure 2"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
          <h1 className="text-lg md:text-3xl font-bold">
            Unleash Your Inner Explorer
          </h1>
          <p className="text-sm md:text-base">
            Embrace the thrill of new journeys.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img
          src={bannerThree}
          alt="Eco Adventure 3"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 text-center">
          <h1 className="text-lg md:text-3xl font-bold">
            Experience Nature Like Never Before
          </h1>
          <p className="text-sm md:text-base">
            Dive into unforgettable adventures.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
