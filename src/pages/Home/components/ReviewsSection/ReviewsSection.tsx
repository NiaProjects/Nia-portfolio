import { Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { HeadingTitle } from "../../../../components/text";
import { ReviewUserImg } from "../../../../assets";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { v4 as uuidv4 } from "uuid";
import { customIcon } from "../../../../assets/icons/customIcons";

interface IProps {}
const swiperSliedsReviews = (
  <>
    {[1, 2, 3, 4].map((index) => (
      <SwiperSlide key={uuidv4()}>
        <div className="reviewBox shadowEffect  relative  rounded-xl mb-[100px] w-[270px] lg:w-[376px] h-[250px] lg:h-[235px]  lg:mx-2 relative ">
          <div className="absolute top-0 p-4  right-0">
            {customIcon.quoteDown}
          </div>
          <div className="reviewBoxHeader py-[14px]   ">
            <div className="reviewIcon pt-[12px]"></div>
            <Heading
              fontSize={{ base: "18px", md: "18px" }}
              fontWeight={{ base: "500", md: "500", lg: "600" }}
              textAlign={"center"}
            >
              Marco michel
            </Heading>
          </div>
          <Text
            textAlign={"center"}
            paddingBottom={{ base: "42px", lg: "73px" }}
            className="reviewBoxBody px-2 text-center"
          >
            Lorem ipsum dolor sit amet consectetur. Nec nunc tristique interdum
            tellus nibh aliquet elementum.
          </Text>
          <div className="reviewBoxAvatar absolute bottom-0 left-[50%] right-0 translate-y-[50%] -translate-x-[30%] ">
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

const ReviewsSection = ({}: IProps) => {
  return (
    <section className=" flex container flex-col mx-auto  justify-center items-center  lg:mx-auto">
      <HeadingTitle headerDark="reviews" />
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        marginBottom={{ base: "32px", md: "64px", lg: "100px" }}
        textAlign={"center"}
      >
        Lorem ipsum dolor sit amet consectetur. Volutpat condimentum{" "}
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

export default ReviewsSection;
