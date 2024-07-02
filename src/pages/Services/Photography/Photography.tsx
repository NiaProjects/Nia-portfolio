import React, { FC } from "react";
import ServicesIntroduction from "../components/ServicesIntroduction";
import ServicesSection from "../components/ServicesSection";
import HeroImage from "../components/HeroImage";
import { data } from "../../../data";
import { useTranslation } from "react-i18next";
import { servicesPagesImg } from "../../../assets";

interface PhotographyProps {}

const Photography: FC<PhotographyProps> = () => {
  const { t } = useTranslation();
  const { introImgPH, headerImgPH, descriptionImgPH } =
    servicesPagesImg.photographyImages;
  const imgSection = {
    img: headerImgPH,
    alt: "software service",
    headerText: t("photography.name"),
  };

  const introduction = {
    srcImg: introImgPH,
    alt: "",
    introductionHeader: {
      darkHeader: t("photography.intro.introductionHeader.darkHeader"),
      orangeHeader: t("photography.intro.introductionHeader.orangeHeader"),
    },
    introductionText: t("photography.intro.introductionText"),
  };

  const description = {
    srcImg: descriptionImgPH,
    descriptionHeader: {
      darkHeader: t("photography.desc.descriptionHeader.darkHeader"),
      orangeHeader: t("photography.desc.descriptionHeader.orangeHeader"),
    },
    descriptionText: t("photography.desc.descriptionText"),
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

export default Photography;
