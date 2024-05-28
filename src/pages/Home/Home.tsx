import { FC } from "react";
import { slider1, slider2 } from "../../assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

interface HomeProps {}
const items = [
  <img src={slider1} alt="Slide 1" />,
  <img src={slider2} alt="Slide 2" />,
];
const HomePage: FC<HomeProps> = () => (
  <>
    {" "}
    <section id="section2" className="py-20 bg-orange-200 h-screen ">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
    <section id="our-services" className="py-20 bg-gray-300 h-screen">
      <h2 className="text-4xl text-center">Section 2</h2>
    </section>
    <section id="our-works" className="py-20 bg-gray-300 h-screen">
      <h2 className="text-4xl text-center">Section 2</h2>
    </section>
    <section id="news" className="py-20 bg-gray-300 h-screen">
      <h2 className="text-4xl text-center">Section 2</h2>
    </section>
  </>
);

export default HomePage;
