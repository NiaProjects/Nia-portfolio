import React, { FC } from "react";
import ServicesIntroduction from "../components/ServicesIntroduction";
import ServicesSection from "../components/ServicesSection";
import HeroImage from "../components/HeroImage";
import { data } from "../../../data";

interface PhotographyProps {}

const Photography: FC<PhotographyProps> = () => {
  const { imgSection, categories, introduction, description } =
    data.services.photography;
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

export default Photography;
