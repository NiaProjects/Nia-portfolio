import React from "react";
import { HeadingTitle } from "../../../../components/text";
import { Image, Text } from "@chakra-ui/react";
import { partners, partnersLogos } from "../../../../assets";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { delay } from "framer-motion";
import { useTranslation } from "react-i18next";

interface IProps {}
const partnersArray = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11];
const partnerLogos = [{ url: partners }];
const swiperSliedsPartnersLogos = (
  <>
    {partnersArray.map((item, index) => (
      <SwiperSlide key={uuidv4()}>
        <div className="partnerLogos  bg-[#FAD4AA] w-full">
          <img
            src={partnerLogos[0].url}
            className="w-[100px] md:w-[110px] lg:w-[168px] h-[44px] md:h-[60px] lg:h-[108px] "
          />
        </div>
      </SwiperSlide>
    ))}
  </>
);
const PartnersSection = ({}: IProps) => {
  const { t, i18n } = useTranslation();
  return (
    <section className="  m-auto my-large">
      <div className="header w-[160px] md:w-[200px] lg:w-[266px] text-center m-auto">
        {" "}
        <HeadingTitle
          headerDark={t("home.partners.header.darkText")}
          headerOrang={t("home.partners.header.orangeHeader")}
        >
          <span className="text-[#131312]  font-semibold block">
            {i18n.language !== "ar" && "In success"}
          </span>
        </HeadingTitle>
      </div>
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        marginBottom={{ base: "32px", md: "64px", lg: "100px" }}
        textAlign="center"
      >
        {t("home.partners.description")}
      </Text>
      <div className="   flex justify-center items-center mt-large ">
        <div className=" h-[140px] lg:h-[295px] w-full ">
          <div className="py-[48px] md:py-[90px] bg-[#FAD4AA]">
            <Swiper
              spaceBetween={0}
              navigation={false}
              speed={1000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                300: {
                  slidesPerView: 4.5,
                  spaceBetween: 8,
                },
                550: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 7,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1225: {
                  slidesPerView: 8.5,
                  spaceBetween: 10,
                },
              }}
            >
              {swiperSliedsPartnersLogos}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
