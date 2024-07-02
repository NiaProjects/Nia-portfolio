import React, { FC } from "react";
import HeroImage from "../components/HeroImage";
import ServicesIntroduction from "../components/ServicesIntroduction";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import ServicesSection from "../components/ServicesSection";
import { data } from "../../../data";
import { servicesPagesImg } from "../../../assets";
import { useTranslation } from "react-i18next";

interface EventsProps {}

const Events: FC<EventsProps> = () => {
  const { t } = useTranslation();
  const { headerImgEV, introImgEV, descriptionImgEV } =
    servicesPagesImg.eventsImages;
  const imgSection = {
    img: headerImgEV,
    alt: "software service",
    headerText: t("events.name"),
  };

  const introduction = {
    srcImg: introImgEV,
    alt: "",
    introductionHeader: {
      darkHeader: t("events.intro.introductionHeader.darkHeader"),
      orangeHeader: t("events.intro.introductionHeader.orangeHeader"),
    },
    introductionText: t("events.intro.introductionText"),
  };

  const description = {
    srcImg: descriptionImgEV,
    descriptionHeader: {
      darkHeader: t("events.desc.descriptionHeader.darkHeader"),
      orangeHeader: t("events.desc.descriptionHeader.orangeHeader"),
    },
    descriptionText: t("events.desc.descriptionText"),
  };
  return (
    <>
      <HeroImage heroImage={imgSection} headerText={imgSection.headerText} />
      <ServicesIntroduction
        srcImg={introduction.srcImg}
        alt={introduction.alt}
        headerText={introduction.introductionHeader}
        paragraph={introduction.introductionText}
      />
      <ServicesSection
        srcImg={description.srcImg}
        alt={introduction.alt}
        headerText={description.descriptionHeader}
        paragraph={description.descriptionText}
      />
    </>
  );
};

export default Events;
