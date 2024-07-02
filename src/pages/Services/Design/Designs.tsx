import React, { FC } from "react";
import HeroImage from "../components/HeroImage";
import ServicesIntroduction from "../components/ServicesIntroduction";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import { data } from "../../../data";
import { customIcon } from "../../../assets/icons/customIcons";
import { servicesPagesImg } from "../../../assets";
import { useTranslation } from "react-i18next";

interface DesignProps {}

const Designs: FC<DesignProps> = () => {
  const { t } = useTranslation();
  const { headerImgDesign, introImgDesign, descriptionImgDesign } =
    servicesPagesImg.designImages;
  const imgSection = {
    img: headerImgDesign,
    alt: "software service",
    headerText: t("design.name"),
  };

  const introduction = {
    srcImg: introImgDesign,
    alt: "",
    introductionHeader: {
      darkHeader: t("design.intro.introductionHeader.darkHeader"),
      orangeHeader: t("design.intro.introductionHeader.orangeHeader"),
    },
    introductionText: t("design.intro.introductionText"),
  };

  const categories = {
    header: {
      darkHeader: t("design.categories.header.darkHeader"),
      orangeHeader: t("design.categories.header.orangeHeader"),
    },
    paragraph: t("design.categories.categoriesText"),

    categoriesIcons: [
      {
        text: t("design.categories.categoriesData.logos"),
        icon: customIcon.servicesIcons.software.app,
      },
      {
        text: t("design.categories.categoriesData.printing"),
        icon: customIcon.servicesIcons.software.website,
      },
      {
        text: t("design.categories.categoriesData.mediaDesign"),
        icon: customIcon.servicesIcons.software.crm,
      },
      {
        text: t("design.categories.categoriesData.dashboard"),
        icon: customIcon.servicesIcons.software.dashboard,
      },
      {
        text: t("design.categories.categoriesData.dashboard"),
        icon: customIcon.servicesIcons.software.dashboard,
      },
    ],
  };

  const description = {
    srcImg: descriptionImgDesign,

    descriptionData: [
      {
        name: t("design.desc.descriptionData.logos.name"),
        description: t("design.desc.descriptionData.logos.description"),
      },
      {
        name: t("design.desc.descriptionData.brandIdentity.name"),
        description: t("design.desc.descriptionData.brandIdentity.description"),
      },
      {
        name: t("design.desc.descriptionData.printing.name"),
        description: t("design.desc.descriptionData.printing.description"),
      },
      {
        name: t("design.desc.descriptionData.mediaDesign.name"),
        description: t("design.desc.descriptionData.mediaDesign.description"),
      },
      {
        name: t("design.desc.descriptionData.motionGraphic.name"),
        description: t("design.desc.descriptionData.motionGraphic.description"),
      },
      {
        name: t("design.desc.descriptionData.infoGraphic.name"),
        description: t("design.desc.descriptionData.infoGraphic.description"),
      },
    ],
  };
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
