import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerOne from "../assets/aden-1.jpg";
import bannerTwo from "../assets/aden-2.jpg";
import bannerThre from "../assets/aden-3.jpg";

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={10}
    >
      <SwiperSlide>
        <img
          src={bannerOne}
          alt="Eco Adventure 1"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerTwo}
          alt="Eco Adventure 2"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bannerThre}
          alt="Eco Adventure 3"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
