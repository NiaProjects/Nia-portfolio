import { Heading, Text } from "@chakra-ui/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsCardImg } from "../../../../assets";
import { HeadingTitle } from "../../../../components/text";
import "swiper/css/navigation";

import { v4 as uuidv4 } from "uuid";
import { customIcon } from "../../../../assets/icons/customIcons";
import { useTranslation } from "react-i18next";

interface IProps {}
const NewsSection = ({}: IProps) => {
  const { t, i18n } = useTranslation();
  const swiperSlieds = (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <SwiperSlide key={index}>
          <div className="newsCard container   mb-[32px] md:mb-10  w-[270px] xl:h-auto  rounded-xl lg:w-[400px] m-auto flex flex-col text-center justify-center">
            <figure>
              <img src={newsCardImg} alt="news image" className="w-100" />
            </figure>
            <div className="shadowEffect rounded-b-xl	">
              <div className="newsCardBody ">
                <Heading
                  fontSize={{ base: "18px", md: "20px" }}
                  size="md"
                  className="capitalize px-[40px] md:px-[30px] lg:px-[53px] text-primary"
                  fontWeight={{ base: "500" }}
                  marginTop={{ base: "14px", lg: "22.5px" }}
                >
                  {t("home.news.newsCard.header")}
                </Heading>

                <Text
                  fontSize={{ base: "16px", md: "18px" }}
                  paddingTop={{ lg: "20px" }}
                  marginBottom={{ base: "30px" }}
                  className="pt-2 capitalize text-center px-4"
                >
                  {t("home.news.newsCard.body")}
                </Text>
              </div>
              <div className="cardFooter flex justify-between items-center pb-[14px] px-4  ">
                <Text
                  fontSize={{ base: "12px", md: "16px" }}
                  fontWeight={{ base: "400" }}
                  className="newsTime"
                >
                  10 {t("home.news.newsCard.footer.date")}.2024
                </Text>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  );
  return (
    <section id="news" className="m-auto  container  py-6 md:py-10 lg:py-20">
      <div className="text-center m-auto">
        <HeadingTitle headerDark={t("home.news.header.darkText")} />
      </div>
      <Text
        fontSize={{ base: "18px" }}
        textAlign={"center"}
        marginBottom={{ base: "32px", md: "56px", lg: "100px" }}
      >
        {t("home.news.description")}
      </Text>
      <div className="newCardsBox mb-[70px] mx-[18px] lg:mx-[100px]  ">
        <Swiper
          // spaceBetween={20}
          pagination={{
            dynamicBullets: true,
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
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {swiperSlieds}
        </Swiper>
      </div>
    </section>
  );
};
export default NewsSection;
