import React, { FC } from "react";
import HeroImage from "../components/HeroImage";
import ServicesIntroduction from "../components/ServicesIntroduction";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import { data } from "../../../data";
import { servicesPagesImg } from "../../../assets";

interface DigitalMarketingProps {}

const DigitalMarketing: FC<DigitalMarketingProps> = () => {
  const { imgSection, categories, introduction, description } =
    data.services.digitalMarketingService;
  return (
    <>
      {" "}
      <HeroImage heroImage={imgSection} headerText={imgSection.headerText} />
      <ServicesIntroduction
        srcImg={introduction.srcImg}
        alt={introduction.alt}
        headerText={introduction.introductionHeader}
        paragraph={introduction.introductionText}
      />
      <ServicesCategories
        headerText={description.descriptionHeader}
        paragraph={description.descriptionText}
        icons={categories.categoriesIcons}
      />
      <ServicesDescription
        srcImg={description.srcImg}
        alt={description.alt}
        headerText={description.descriptionHeader}
        paragraph={description.descriptionText}
      />
    </>
  );
};

export default DigitalMarketing;
