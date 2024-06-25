import React, { FC } from "react";

import "swiper/css";
import "swiper/css/navigation";
import { aboutNia1, aboutNia2 } from "../../assets";
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import OurServicesSection from "./components/OurServicesSection";
import OurWorkSection from "./components/OurWorkSection";
import PartnersSection from "./components/PartnersSection";
import ReviewsSection from "./components/ReviewsSection";
import { Link } from "react-router-dom";
import { customIcon } from "../../assets/icons/customIcons";
interface HomeProps {}

const aboutImages = [{ src: aboutNia1 }, { src: aboutNia2 }];
const customPadding = " px-[18px] sm:px-10 lg:px-[100px]";
const HomePage: FC<HomeProps> = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const controlNavbar = () => {
    if (window.scrollY) {
      setIsVisible(true);
      setOpen(false);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    console.log("scrollY", lastScrollY, "Y", window.innerHeight);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0  w-full px-[1.125rem] md:px-[1.5rem] lg:px-[100px] transform -translate-y-[40px] bg-red-200 flex justify-between z-50 ">
          <div className=" ">
            <Link to="https://api.whatsapp.com/send?phone=201123862013">
              {customIcon.socialMediaIcons.whatsAppContactIcon}
            </Link>
          </div>
          <div className="bg-red-700  w-12 h-12 "></div>
        </div>
      )}
      <section
        className={`bg-gradient-to-r from-[#B45E00] to-[#FF9D32] top-0 bottom-0 left-0 right-0`}
      >
        <Hero />
      </section>
      <AboutSection />
      <OurServicesSection />
      <PartnersSection />
      <OurWorkSection />
      <ReviewsSection />
      <NewsSection />
    </>
  );
};
export default HomePage;
