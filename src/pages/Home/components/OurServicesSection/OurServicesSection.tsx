import { FaArrowRightLong } from "react-icons/fa6";
import {
  cardServicesCategory,
  cardServicesCategory2,
  serviceCard,
  serviceCardHeaderIcon,
} from "../../../../assets";
import { HeadingTitle } from "../../../../components/text";
import "./OurServicesSection.scss";
import { Text } from "@chakra-ui/react";

interface IProps {}
const cardsData = [
  {
    icon: { serviceCardHeaderIcon },
    url: { serviceCard },
    serviceCardImage: cardServicesCategory,
    header: "Advertising",
  },
  {
    icon: { serviceCard },
    serviceCardImage: cardServicesCategory2,
    header: "Digital Marketing  ",
  },
  {
    icon: { serviceCard },
    serviceCardImage: cardServicesCategory,
    header: "Software",
  },
  {
    icon: { serviceCard },
    serviceCardImage: cardServicesCategory,
    header: "Advertising",
  },
  {
    icon: { serviceCard },
    serviceCardImage: cardServicesCategory,
    header: "Digital Marketing  ",
  },
  {
    icon: { serviceCard },
    serviceCardImage: cardServicesCategory,
    header: "Software",
  },
];
const OurServicesSection = () => {
  return (
    <>
      <section
        id="our-services"
        className="  py-7 px-[40px] sm:px-10 lg:px-[100px]  overflow-hidden"
      >
        <div className="layerService"></div>
        <HeadingTitle headerDark="our services" classes={"text-white 	"} />
        <div className="text-white w-[250px] sm:w-[441px] lg:w-[674px] m-auto">
          {" "}
          <Text
            textAlign={"center"}
            fontSize={{ base: "16px", md: "18px" }}
            color={"white"}
          >
            lorem ibsum donetlorem ibsum donet lorem ibsum donetlorem{" "}
          </Text>
        </div>
        <div className=" ourServicesCardsContainer mt-[32px] mb-[24px] bg-re-200 ">
          <div className=" container ServiceCard xl:pb-24 flex flex-col md:flex-row flex-wrap gap-3 xl:gap-[55px]  justify-center items-center mb-2">
            {cardsData?.map((cardData, index) => {
              const { icon, header, url } = cardData;
              return (
                <>
                  <div className="cards xl:mt-24">
                    <div
                      key={index}
                      className="relative  card rounded-2xl bluer   w-[210px]  xl:w-[376px] h-[170px] xl:h-auto mb-[18px] "
                    >
                      <div className="flex  rounded-2xl bluer border  w-[210px] xl:w-[376px] xl:h-[214px] h-[108px] mb-[18px] ">
                        <span className=" py-5 px-2">
                          <img
                            src={serviceCardHeaderIcon}
                            className="w-[13px] xl:w-[24px]"
                          />
                        </span>
                        <h2 className="text-white py-4 px-2 text-[16px] xl:text-[24px]">
                          {header}
                        </h2>
                      </div>
                      {/*  */}
                      <div className="absolute rounded-2xl bluer  translate-x-[11%]  max-xl:-translate-y-[115%] xl:top-[97px]  w-[170px] xl:w-[320px] bg-[#e2e2e24b] h-[70px] mb-[18px] "></div>
                      <div className="absolute  h-[113px]  top-[58px]  xl:w-[376px] xl:h-[224px] xl:top-[115px] ">
                        <img
                          src={cardServicesCategory2}
                          className="w-full object-fill"
                        />
                      </div>
                      <s
                        className={`circleService absolute rounded-full  right-0 translate-y-[10px] xl:translate-y-[190%] xl:w-[70px] xl:h-[70px]  `}
                      >
                        <FaArrowRightLong className="-rotate-45 text-white w-[25.5px] h-[25.5px] xl:bottom-0" />
                      </s>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;
