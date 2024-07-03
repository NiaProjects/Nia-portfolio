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

interface IProps {}
const { ads } = homeImgs.ourServicesImgs;
const OurServicesSection = () => {
  const { t } = useTranslation();
  const cardsData = [
    {
      id: uuidv4(),
      icon: customIcon.ourServicesIcons.advertisingIcon,
      url: ads,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.ads"),
    },
    {
      id: uuidv4(),
      url: ads,

      icon: customIcon.ourServicesIcons.digitalMarkingIcon,
      serviceCardImage: cardServicesCategory2,
      header: t("home.ourServices.mainServices.marketing"),
    },

    {
      id: uuidv4(),
      url: ads,
      icon: customIcon.ourServicesIcons.designIcon,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.design"),
    },
    {
      id: uuidv4(),
      url: ads,
      icon: customIcon.ourServicesIcons.eventsIcon,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.events"),
    },
    {
      id: uuidv4(),
      url: ads,
      icon: customIcon.ourServicesIcons.softWareIcon,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.software"),
    },
    {
      id: uuidv4(),
      url: ads,
      icon: customIcon.ourServicesIcons.photographyIcon,
      serviceCardImage: cardServicesCategory,
      header: t("home.ourServices.mainServices.Photography"),
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
              const { icon, header, url, id } = cardData;
              return (
                <div
                  className="cards relative   max-md:h-[13rem] md:min-h-[13rem] lg:h-[17rem] xl:h-[24rem] w-full"
                  key={id}
                  onClick={() => alert(header)}
                >
                  <div className="  card rounded-2xl bluer mx-auto   w-full  min-h-[170px] max-h-[214.41px] ">
                    <div className="flex card-first-layer  rounded-2xl bluer border  xl:h-[250px] h-[108px] ">
                      <header className=" flex ms-[10px] md:ms-[1.5rem] md: mt-[.6rem] mb-[1.18rem] xl:mt-[1.5rem] lg:mb-[2.5rem]">
                        <span className=" me-1 p-1">{icon}</span>
                        <h3 className="text-white text-[1rem] xl:text-[1.5rem] capitalize">
                          {header}
                        </h3>
                      </header>
                    </div>
                    {/*  translate-x-[11%]  max-xl:-translate-y-[100%] bg-[#e2e2e24b]*/}
                    <div className="absolute rounded-2xl bluer left-0 right-0 max-xl:-translate-y-[80%]   xl:top-[97px]  w-[80%] xl:w-[80%] bg-[#0000004b]  mx-auto h-[70px] mb-[18px] "></div>
                    <div className="absolute  min-h-[7.0625rem]   top-[4rem] w-full   xl:h-[224px] xl:top-[115px] ">
                      <div className="w-full object-fill ">
                        <ServicesCardSVG url={url} />
                      </div>
                    </div>
                  </div>
                  <s
                    className={`circleService absolute rounded-full  lg:first-letter  right-0 lg:right-1 bottom-1 xl:bottom-2 transform translate-y-[-5%] translate-x-[15%]  w-[18%] h-[20%] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]  `}
                  >
                    <FaArrowRightLong className="-rotate-45 text-white w-[50%]  h-[25.5px] xl:bottom-0" />
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
