import React, { FC } from "react";
import HeroImage from "../components/HeroImage";
import ServicesIntroduction from "../components/ServicesIntroduction";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import { data } from "../../../data";

interface DesignProps {}

const Designs: FC<DesignProps> = () => {
  const { imgSection, categories, introduction, description } =
    data.services.design;
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
        headerText={categories.header}
        paragraph={categories.paragraph}
        icons={categories.categoriesIcons}
      />
      <ServicesDescription
        srcImg={description.srcImg}
        alt={description.alt}
        headerText={description.descriptionHeader}
        paragraph={description.descriptionText}
        descriptionData={description.descriptionData}
      />
    </>
  );
};

export default Designs;
