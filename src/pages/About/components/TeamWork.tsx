import { Heading, IconButton, Image, Text } from "@chakra-ui/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { customIcon } from "../../../assets/icons/customIcons";
import { ReviewUserImg } from "../../../assets";

interface IProps {}
const swiperSliedsReviews = (
  <>
    {[1, 2, 3, 4].map((index) => (
      <SwiperSlide key={uuidv4()}>
        <div
          style={{ boxShadow: " 1px 2px 2px 0px rgba(0, 0, 0, 0.20)" }}
          className="reviewBox shadowEffect relative  mt-24  rounded-xl mb-[100px] w-[270px] lg:w-[376px] h-[250px] lg:h-[235px]  lg:mx-2"
        >
          <div className="reviewBoxHeader py-[14px]   ">
            <div className="reviewIcon pt-[12px] "></div>
            <Heading
              fontSize={{ base: "18px", lg: "28px" }}
              fontWeight={{ base: "600", md: "600", lg: "600" }}
              textAlign={"center"}
              textTransform={"capitalize"}
            >
              region manager
            </Heading>
            <h3 className="text-lg lg:text-xl font-medium my-2">
              Amed el shekh
            </h3>
          </div>
          <Text
            textAlign={"center"}
            paddingBottom={{ base: "42px", lg: "73px" }}
            className="reviewBoxBody px-2 text-center"
          >
            Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae
            rutrum dui aliquet sed{" "}
          </Text>
          <div className=" absolute top-0  right-1/2  -translate-y-[70%] translate-x-[50%] ">
            <Image
              borderRadius="full"
              objectFit={"contain"}
              boxSize={{ base: "60px", md: "80px" }}
              src={ReviewUserImg}
              alt="userReview"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </>
);

const TeamWork = ({}: IProps) => {
  const { t } = useTranslation();
  return (
    <section className=" flex container flex-col bg-[#FFFDFB] mx-auto   justify-center items-center  lg:mx-auto">
      <h2 className="text-2xl md:text-xl  ms-4 lg:text-[40px] font-bold text-start me-auto mb-4 lg:mb-8">
        {t("aboutusPage.ourTeam.header.darkHeader")}
        <span className="text-[#EF7D00] inline-block font-bold ms-2">
          {t("aboutusPage.ourTeam.header.orangeHeader")}
        </span>
      </h2>
      <Text
        fontSize={{ base: "18px", md: "18px" }}
        marginBottom={{ base: "32px", md: "64px", lg: "100px" }}
        textAlign={"start"}
        marginEnd={"auto"}
        marginLeft={{ base: "18px" }}
      >
        {t("home.reviews.description")}{" "}
      </Text>
      {/*  */}
      <Swiper
        spaceBetween={0}
        pagination={true}
        loop={true}
        center-slides="true"
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2.5,
            spaceBetween: 1,
            navigation: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 2.1,
          },
        }}
      >
        {swiperSliedsReviews}

        <div className="max-md:hidden pagination-btn btn-prev w-[50px] custom-swiper-button-prev">
          {" "}
          {customIcon.paginationIcons.prevIcon}
        </div>
        <div className="max-md:hidden pagination-btn btn-next w-[50px] custom-swiper-button-next">
          {customIcon.paginationIcons.nextIcon}
        </div>
      </Swiper>
    </section>
  );
};

export default TeamWork;
