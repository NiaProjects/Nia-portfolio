import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  NiarightIcone,
  aboutNia1,
  aboutNia2,
  aboutNia3,
  dotedVector,
  homeImgs,
  servicesPagesImg,
} from "../../../../assets";
import { HeadingTitle } from "../../../../components/text";
import { useTranslation } from "react-i18next";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const AboutSection = () => {
  const { tech, mark, social } = homeImgs.aboutUs;
  const { t, i18n } = useTranslation();
  return (
    <>
      <section
        id="about-us"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="relative   lg:h-[813px] md:flex  md:pt-medium   pb-6 px-[40px]  sm:px-10  md:px-xsmall  "
      >
        <img
          src={dotedVector}
          data-aos="fade-right"
          className="w-[3.75rem] md:w-[70px] lg:w-[5rem]  absolute max-md:right-0  md:left-0  top-[10%] md:top-[9%]   transform translate-x-6  md:-translate-x-4  "
        />
        <img
          src={dotedVector}
          className="w-[3.75rem] md:w-[70px] lg:w-[5rem] absolute max-md:left-0  md:right-0 transform  max-md:-translate-x-6 md:translate-x-4 bottom-[10%] md:   lg:block"
        />
        <div className="container flex justify-between items-center md:gap-[45px] lg:gap-[50px]">
          <div className="aboutText  md:w-1/2   ">
            <div className="mx-auto text-center">
              <HeadingTitle
                headerDark={t("home.aboutUs.header.darkText")}
                headerOrang="nia "
                type="aboutUsHeader"
              />
            </div>
            <div className=" m-auto capitalize mb-xsmall ">
              <Text
                fontSize={{ base: "16px", md: "16px", lg: "20px" }}
                fontWeight={{ base: "normal", md: "medium" }}
                textAlign={"center"}
                lineHeight={{ base: "19.5px", lg: "24.38px" }}
              >
                {t("home.aboutUs.paragraph")}
              </Text>
            </div>
            <div className="flex gap-3 items-center justify-end md:me-4 xl:pt-[32px] cursor-pointer">
              <Link to={"/about-us"}>
                <Text
                  fontSize={{ base: "18px", md: "20px" }}
                  fontWeight={{ base: "medium" }}
                  textAlign={"end"}
                  textTransform={"capitalize"}
                >
                  {t("components.readMore")}
                </Text>
              </Link>
              <span>
                {i18n.language !== "ar" ? (
                  <FaArrowAltCircleRight size={20} color="#131312" />
                ) : (
                  <FaArrowAltCircleLeft size={20} color="#131312" />
                )}
              </span>
            </div>
          </div>
          <div className="aboutImages  h-[380px] lg:h-[813px] w-1/2 md:flex flex-col justify-end hidden relative  ">
            <img
              src={mark}
              className={`w-[190px] h-[160px] rounded-3xl  top lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  ms-auto z-5	  absolute top-[31px] lg:top-[120px] xl:top-[80px]  ${
                i18n.language !== "ar" ? "right-0" : "left-0"
              }   order-1 `}
            />
            <img
              src={social}
              className={`w-[190px] h-[160px]  rounded-3xl lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  order-2 z-0 absolute  ${
                i18n.language !== "ar" ? "left-0" : "right-0"
              }  top-[116px]  lg:top-[255px]`}
            />
            <img
              src={tech}
              className={`w-[190px] h-[160px]  rounded-3xl  lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  ms-auto order-3 z-10 absolute  ${
                i18n.language !== "ar" ? "right-0" : "left-0"
              } bottom-[31px] lg:bottom-[20%]  xl:bottom-[7%]`}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
