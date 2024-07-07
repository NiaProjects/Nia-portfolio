import { FaArrowRightLong } from "react-icons/fa6";
import {
  cardServicesCategory,
  cardServicesCategory2,
  homeImgs,
  serviceCard,
  serviceCardHeaderIcon,
} from "../../../../assets";
import { HeadingTitle } from "../../../../components/text";
import "./OurServicesSection.scss";
import { Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { customIcon } from "../../../../assets/icons/customIcons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServicesCardSVG from "./components/ServicesCardSVG";
import React from "react";

interface IProps {}
const { ads, marketing, design, events, software, photography } =
  homeImgs.ourServicesImgs;
const OurServicesSection = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const cardsData = [
    {
      id: uuidv4(),
      icon: customIcon.ourServicesIcons.advertisingIcon,
      url: ads,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.ads"),
      path: "our-services/advertising",
    },
    {
      id: uuidv4(),
      url: marketing,
      icon: customIcon.ourServicesIcons.digitalMarkingIcon,
      serviceCardImage: cardServicesCategory2,
      header: t("home.ourServices.mainServices.marketing"),
      path: "our-services/digital-marketing",
    },

    {
      id: uuidv4(),
      url: design,
      icon: customIcon.ourServicesIcons.designIcon,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.design"),
      path: "our-services/designs",
    },
    {
      id: uuidv4(),
      url: events,
      icon: customIcon.ourServicesIcons.eventsIcon,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.events"),
      path: "our-services/events",
    },
    {
      id: uuidv4(),
      url: software,
      icon: customIcon.ourServicesIcons.softWareIcon,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.software"),
      path: "our-services/software",
    },
    {
      id: uuidv4(),
      url: photography,
      icon: customIcon.ourServicesIcons.photographyIcon,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.Photography"),
      path: "our-services/photography",
    },
  ];
  const navigate = useNavigate();
  const handleCardClick = (url?: string) => {
    if (url) {
      navigate(url.toLowerCase());
    }
  };
  return (
    <>
      <section
        id="our-services"
        className="   md:pb-medium lg:pb-large   overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div className="max-w-[330px] min-w-[184px] mx-auto text-center">
          <HeadingTitle
            headerDark={t("home.ourServices.header.text")}
            classes={"text-white"}
          />
        </div>
        <div className="text-white w-[250px] mb-small md:mb-[3.5rem] lg:mb-large sm:w-[441px] lg:w-[674px] m-auto">
          {" "}
          <Text
            textAlign={"center"}
            fontSize={{ base: "16px", md: "18px" }}
            color={"white"}
          >
            {t("home.ourServices.header.description")}
          </Text>
        </div>
        <div className=" ourServicesCardsContainer  mt-8  max-md:w-[14.8125rem] md:w-[94.64%] lg:w-[87.15rem]  container ">
          <div className="  ServiceCard  grid gap-6 grid-cols-1  w-full  md:grid-cols-3 lg:grid-cols-3 justify-center items-center  ">
            {cardsData?.map((cardData) => {
              const { icon, header, url, id, path } = cardData;
              return (
                <div
                  className="cards relative group     max-md:h-[13rem] md:min-h-[13rem] lg:h-[17rem] xl:h-[24rem] w-full"
                  key={id}
                  onClick={() => navigate(path)}
                >
                  <div
                    className={`absolute   z-10 card   rounded-2xl bluer mx-auto   w-full  min-h-[170px] max-h-[214.41px] `}
                  >
                    <div
                      className={`flex card-first-layer group-hover:bg-[#ef7b00] rounded-2xl bluer border  xl:h-[250px] h-[108px]`}
                    >
                      <header className=" flex ms-[10px] md:ms-[1.5rem] md: mt-[.6rem] mb-[1.18rem] xl:mt-[1.5rem] lg:mb-[2.5rem]">
                        <span className=" me-1 p-1">{icon}</span>
                        <h3 className="text-white text-[1rem] xl:text-[1.5rem] capitalize">
                          {header}
                        </h3>
                      </header>
                    </div>

                    <div className="absolute rounded-2xl bluer  left-0 right-0 max-xl:-translate-y-[80%]   xl:top-[97px]  w-[80%] xl:w-[80%] bg-[#e2e2e25d]  mx-auto h-[70px] mb-[18px] "></div>
                    <div className="absolute  min-h-[7.0625rem]  top-[4rem] w-full   xl:h-[224px] xl:top-[115px] ">
                      <div className="w-full object-fill group-hover:scale-[1.05] transform  transition-all ease-in-out delay-150">
                        <ServicesCardSVG url={url} id={id} />
                      </div>
                    </div>
                  </div>
                  <s
                    className={`circleService group-hover:bg-orange-500 absolute z-0 rounded-full  lg:first-letter  right-0 lg:right-1 bottom-1 xl:bottom-2 transform translate-y-[-5%] translate-x-[15%]  w-[18%] h-[20%] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]  `}
                  >
                    <FaArrowRightLong className="-rotate-45 text-white w-[50%]  h-[25.5px] xl:bottom-0 transform group-hover:rotate-[1deg] transition-all ease-in-out duration-150	" />
                  </s>
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
