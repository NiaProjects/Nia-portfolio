import React, { FC } from "react";
import HeroImage from "../components/HeroImage";
import ServicesIntroduction from "../components/ServicesIntroduction";
import { data } from "../../../data";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import ServicesSection from "../components/ServicesSection";

interface EventsProps {}

const Events: FC<EventsProps> = () => {
  const { imgSection, categories, introduction, description } =
    data.services.events;
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
