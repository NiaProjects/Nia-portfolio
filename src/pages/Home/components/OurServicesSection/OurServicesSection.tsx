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
import { v4 as uuidv4 } from "uuid";
import { customIcon } from "../../../../assets/icons/customIcons";

interface IProps {}
const cardsData = [
  {
    icon: customIcon.ourServicesIcons.advertisingIcon,
    url: { serviceCard },
    serviceCardImage: cardServicesCategory,
    header: "Advertising",
  },
  {
    icon: customIcon.ourServicesIcons.digitalMarkingIcon,
    serviceCardImage: cardServicesCategory2,
    header: "Digital Marketing  ",
  },

  {
    icon: customIcon.ourServicesIcons.designIcon,
    serviceCardImage: cardServicesCategory,
    header: "design",
  },
  {
    icon: customIcon.ourServicesIcons.eventsIcon,
    serviceCardImage: cardServicesCategory,
    header: "events",
  },
  {
    icon: customIcon.ourServicesIcons.softWareIcon,
    serviceCardImage: cardServicesCategory,
    header: "Software",
  },
  {
    icon: customIcon.ourServicesIcons.photographyIcon,
    serviceCardImage: cardServicesCategory,
    header: "photography",
  },
];
const OurServicesSection = () => {
  return (
    <>
      <section
        id="our-services"
        className="  pb-xsmall md:pb-medium lg:pb-large px-[40px] sm:px-10 lg:px-[100px]  overflow-hidden"
      >
        <div className="max-w-[330px] min-w-[184px] mx-auto text-center">
          <HeadingTitle headerDark="our services" classes={"text-white"} />
        </div>
        <div className="text-white w-[250px] mb-small md:mb-[3.5rem] lg:mb-large sm:w-[441px] lg:w-[674px] m-auto">
          {" "}
          <Text
            textAlign={"center"}
            fontSize={{ base: "16px", md: "18px" }}
            color={"white"}
          >
            lorem ibsum donetlorem ibsum donet lorem ibsum donetlorem{" "}
          </Text>
        </div>
        {/* mt-[32px] mb-[24px] */}
        <div className=" ourServicesCardsContainer   container">
          <div className="  ServiceCard xl:pb-24 flex flex-col md:flex-row flex-wrap gap-3 xl:gap-[55px]  justify-center items-center mb-2">
            {cardsData?.map((cardData, index) => {
              const { icon, header, url } = cardData;
              return (
                <div className="cards xl:mt-24" key={uuidv4()}>
                  <div className="relative  card rounded-2xl bluer   w-[210px]  xl:w-[376px] h-[170px] xl:h-auto mb-[18px] ">
                    <div className="flex card-first-layer  rounded-2xl bluer border  w-[210px] xl:w-[376px] xl:h-[214px] h-[108px] mb-[18px] ">
                      <header className=" flex ms-[10px] md:ms-[1.5rem] md: mt-[.6rem] mb-[1.18rem] xl:mt-[1.5rem] lg:mb-[2.5rem]">
                        <span className=" me-1 p-1">{icon}</span>
                        <h3 className="text-white text-[1rem] xl:text-[1.5rem] capitalize">
                          {header}
                        </h3>
                      </header>
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
                      className={`circleService absolute rounded-full  right-0 translate-y-[10px] lg:translate-y-[90%] xl:translate-y-[200%] xl:w-[70px] xl:h-[70px]  `}
                    >
                      <FaArrowRightLong className="-rotate-45 text-white w-[25.5px] h-[25.5px] xl:bottom-0" />
                    </s>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServicesSection;
