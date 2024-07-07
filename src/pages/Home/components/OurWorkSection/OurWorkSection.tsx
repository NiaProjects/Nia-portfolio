import React from "react";
import { Text } from "@chakra-ui/react";
import { HeadingTitle } from "../../../../components/text";
import {
  prevWorksndBigImg,
  whatAchieved,
  whatAchievedBigSection,
} from "../../../../assets";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const OurWorkSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="our-works" className="mx-auto py-8 " data-aos="fade-up">
      {/* container flex  justify-center w-[30%] md:w-[40%] lg:w-[10%] xl:w-[30%] mx-auto" */}
      <div
        className="max-w-[330px] min-w-[184px] mx-auto text-center"
        data-aos="fade-up"
      >
        <div className="text-center m-auto  max-w-[20.625rem]">
          <HeadingTitle
            headerDark={t("home.ourWorks.header.darkText")}
            headerOrang={t("home.ourWorks.header.orangeHeader")}
            classes=""
          />
        </div>
      </div>
      <Text
        data-aos="fade-up"
        fontSize={{ base: "16px", md: "18px" }}
        marginBottom={{ base: "32px", md: "64px", lg: "100px" }}
        textAlign="center"
      >
        {t("home.ourWorks.description")}
      </Text>
      <div className="max-md:bg-[#FAD4AA]  relative" data-aos="fade-up">
        <div className=" container w-[90.4%] ">
          <div
            className={`backgroundLayer absolute -left-10 md:bg-[#FAD4AA] w-screen max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0 z-1 md:h-[261px] lg:h-[400px]
                 ${
                   i18n.language !== "ar"
                     ? "right-0   md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
                     : "  right-0 left-0  md:top-1/4"
                 } `}
          ></div>
          <div className="ourWorksContainer relative z-2 py-[24px] grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-[1.25rem]">
            {/* Column 1 */}
            <div className="inline-grid  max-md:grid-cols-2 gap-4 xl:gap-[1.25rem]">
              <figure>
                <img
                  src={whatAchieved}
                  className="w-full h-[140px] md:h-full lg:h-[305px] rounded-xl"
                />
              </figure>
              <figure>
                <img
                  src={whatAchieved}
                  className="w-full h-[140px] md:h-full lg:h-[305px] rounded-xl"
                />
              </figure>
            </div>
            {/* Column 2 */}
            <div className="flex justify-center h-full w-full">
              <div className="w-full h-[140px] max-h-[630px] md:h-full rounded-xl">
                <figure className="relative w-full h-full">
                  <img
                    src={whatAchievedBigSection}
                    className="w-full h-full absolute bottom-0 top-0 left-0 right-0 object-cover md:hidden rounded-xl"
                  />
                  <img
                    src={prevWorksndBigImg}
                    alt=""
                    className="w-full h-full max-md:hidden"
                  />
                </figure>
              </div>
            </div>
            {/* Column 3 */}
            <div className="inline-grid  max-md:grid-cols-2 gap-4 xl:gap-[1.25rem]">
              <figure>
                <img
                  src={whatAchieved}
                  className="w-full h-[140px] md:h-full lg:h-[305px] rounded-xl"
                />
              </figure>
              <figure>
                <img
                  src={whatAchieved}
                  className="w-full h-[140px] md:h-full lg:h-[305px] rounded-xl"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
