import { FC } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../components/Title";
import Hero from "./components/Hero";
// import "./styles.css";
interface HomeProps {}

const HomePage: FC<HomeProps> = () => (
  <>
    {" "}
    <section id="section2" className=" ">
      <Hero />
    </section>
    <section id="about-us" className="py-20 bg-gray-300 h-screen">
      <Title />
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
