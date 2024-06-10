import { FC } from "react";

import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import {
  NiarightIcone,
  aboutNia1,
  aboutNia2,
  aboutNia3,
  dotedVector,
} from "../../assets";
import { HeadingTitle } from "../../components/text";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import OurServicesSection from "./components/OurServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import OurWorkSection from "./components/OurWorkSection";
import PartnersSection from "./components/PartnersSection";
import AboutSection from "./components/AboutSection";
// import "./styles.css";
interface HomeProps {}
// [
//   {
//     src: slider1,
//     text: "we have created all the solution and designs",
//     delay: 7000,
//   },
//   {
//     src: slider2,
//     text: "Lorem ipsum dolor sit amet consectetur. Sed nunc varius varius laoreet quisque Lorem ipsum dolor sit amet consectetur. Sed nunc varius varius laoreet quisque..marco ",

//     delay: 5000,
//   },
// ];

const aboutImages = [{ src: aboutNia1 }, { src: aboutNia2 }];
const customPadding = " px-[18px] sm:px-10 lg:px-[100px]";
const HomePage: FC<HomeProps> = () => (
  <>
    {" "}
    {/* <div className="w-[18px] md:w-6 lg:w-[11.1%] bg-sky-500 h-4 fixed top-1/2 left-0 transform translate-x-0 translate-y-1/2 z-50"></div>
    <div className="w-[18px] md:w-6 lg:w-[11.111%] bg-orange-500 h-4 fixed top-[50.5%] left-0 transform translate-x-0 translate-y-1/2 z-50"></div> */}
    {/* <div className="w-[18px] md:w-6 lg:w-[100px] bg-sky-500 h-4 fixed top-1/2 right-0 transform translate-x-0 translate-y-1/2 z-50"></div> */}
    {/* <div className="w-[18px] md:w-6 lg:w-[100px] bg-sky-500 h-4 fixed top-1/2 left-0 transform translate-x-0 translate-y-1/2 z-50"></div> */}
    <section
      // id="section2"
      className={`bg-gradient-to-r from-[#B45E00] to-[#FF9D32] top-0 bottom-0 left-0 right-0`}
    >
      <Hero />
    </section>
    <AboutSection />
    <OurServicesSection />
    <PartnersSection />
    <OurWorkSection />
    {/* <ReviewsSection /> */}
    <NewsSection />
    {/* 
   
   
    */}
  </>
);

export default HomePage;
