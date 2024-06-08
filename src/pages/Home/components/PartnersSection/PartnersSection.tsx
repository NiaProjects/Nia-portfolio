import React from "react";
import { HeadingTitle } from "../../../../components/text";
import { Image } from "@chakra-ui/react";
import { partnersLogos } from "../../../../assets";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

interface IProps {}

const swiperSliedsPartnersLogos = (
  <>
    {[1, 2, 3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8].map(() => (
      <div key={uuidv4()}>
        {" "}
        <SwiperSlide>
          <div className="partnerLogos ">
            <img
              src={partnersLogos}
              className="w-[100px] md:w-[110px] lg:w-[168px] h-[44px] md:h-[60px] lg:h-[108px]"
            />
          </div>
        </SwiperSlide>
      </div>
    ))}
  </>
);
const PartnersSection = ({}: IProps) => {
  return (
    <section className="  m-auto">
      <div className="header w-[160px] md:w-[200px] lg:w-[266px] text-center m-auto">
        {" "}
        <HeadingTitle headerDark="our" headerOrang="partners">
          <span className="text-[#131312]"> in success</span>
        </HeadingTitle>
      </div>
      {/*  */}
      <div className="   flex justify-center items-center mt-[75px] mb-[100px] ">
        <div className=" h-[140px] lg:h-[295px] w-full ">
          <div className="py-[48px] md:py-[90px] bg-[#FAD4AA]">
            <Swiper
              spaceBetween={20}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                300: {
                  slidesPerView: 3,
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
                  slidesPerView: 7.8,
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
