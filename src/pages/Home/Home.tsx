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
import { MdArrowCircleUp } from "react-icons/md";

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
        //  lg:px-[100px]
        <div className="fixed bottom-0  w-full px-[1.125rem] md:px-[1.5rem] transform -translate-y-[40px]  flex justify-between z-50 ">
          <div className=" relative w-medium h-medium md:w-[2.875rem] lg:w-[4.375rem] lg:h-[4.375rem] ">
            <Link
              to="https://api.whatsapp.com/send?phone=201123862013"
              className=""
            >
              <span className="  block">
                {
                  customIcon.socialMediaIcons.whatsAppContactIcon
                    .whatsAppFrameIcon
                }
              </span>
              <span className="absolute top-[50%] left-[50%]  transform -translate-x-[50%] -translate-y-[50%]">
                {
                  customIcon.socialMediaIcons.whatsAppContactIcon
                    .whatsAppTelephoneIcon
                }
              </span>
            </Link>
          </div>
          <div className=" w-medium h-medium md:w-[2.875rem] lg:w-large lg:h-large text-4xl hover:text-orange-400 ">
            <a href="#main-section">{customIcon.arrowsIcon.backTopIcon}</a>
          </div>
        </div>
      )}
      <section
        id="main-section"
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
