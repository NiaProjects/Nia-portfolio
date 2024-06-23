import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  NiarightIcone,
  aboutNia1,
  aboutNia2,
  aboutNia3,
  dotedVector,
} from "../../../../assets";
import { HeadingTitle } from "../../../../components/text";

const AboutSection = () => {
  return (
    <>
      <section
        id="about-us"
        className="relative   lg:h-[813px] md:flex  md:pt-medium   pb-6 px-[40px]  sm:px-10  md:px-xsmall  "
      >
        <img
          src={dotedVector}
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
                headerDark="why"
                headerOrang="nia"
                type="aboutUsHeader"
              />
            </div>
            <div className=" m-auto capitalize mb-small ">
              <Text
                fontSize={{ base: "16px", md: "16px", lg: "20px" }}
                fontWeight={{ base: "normal", md: "medium" }}
                textAlign={"center"}
              >
                Lorem ipsum dolor sit amet consectetur. Scelerisque ut fermentum
                non libero quis Lorem ipsum dolor sit amet consectetur.
                Scelerisque ut fermentum non libero quis Lorem ipsum dolor sit
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
                  read more
                </Text>
              </Link>
              <span>
                <img src={NiarightIcone} />
              </span>
            </div>
          </div>
          <div className="aboutImages  h-[380px] lg:h-[813px] w-1/2 md:flex flex-col justify-end hidden relative  ">
            <img
              src={aboutNia3}
              className="w-[190px] h-[160px]  top lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  ms-auto   absolute top-[31px] lg:top-[120px] xl:top-[80px] right-0    order-1 z-20	 "
            />
            <img
              src={aboutNia2}
              className="w-[190px] h-[160px]  lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  order-2 z-10 absolute left-0 top-[116px]  lg:top-[255px]"
            />
            <img
              src={aboutNia1}
              className="w-[190px] h-[160px]   lg:w-[280px] lg:h-[230px]  xl:w-[376px]   xl:h-[304px]  ms-auto order-3 z-0 absolute  right-0 bottom-[31px] lg:bottom-[20%]  xl:bottom-[7%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
