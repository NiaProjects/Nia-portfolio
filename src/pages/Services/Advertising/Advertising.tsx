import { FC } from "react";
import { data } from "../../../data";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import ServicesIntroduction from "../components/ServicesIntroduction";
import HeroImage from "../components/HeroImage";
interface AdvertisingProps {}

const Advertising: FC<AdvertisingProps> = () => {
  const { imgSection, categories, introduction, description } =
    data.services.advertising;
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

export default Advertising;
