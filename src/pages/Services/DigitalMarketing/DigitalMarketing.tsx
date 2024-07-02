import React, { FC } from "react";
import HeroImage from "../components/HeroImage";
import ServicesIntroduction from "../components/ServicesIntroduction";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import { servicesPagesImg } from "../../../assets";
import { data } from "../../../data";
import { useTranslation } from "react-i18next";
import { customIcon } from "../../../assets/icons/customIcons";

interface DigitalMarketingProps {}

const DigitalMarketing: FC<DigitalMarketingProps> = () => {
  const { t } = useTranslation();
  const { headerImgDM, introImgDM, descriptionImgDM } =
    servicesPagesImg.DigitalMarketingImages;
  const imgSection = {
    img: headerImgDM,
    alt: "software service",
    headerText: t("digitalMarketingService.name"),
  };

  const introduction = {
    srcImg: introImgDM,
    alt: "",
    introductionHeader: {
      darkHeader: t(
        "digitalMarketingService.intro.introductionHeader.darkHeader"
      ),
      orangeHeader: t(
        "digitalMarketingService.intro.introductionHeader.orangeHeader"
      ),
    },
    introductionText: t("digitalMarketingService.intro.introductionText"),
  };

  const categories = {
    header: {
      darkHeader: t("digitalMarketingService.categories.header.darkHeader"),
      orangeHeader: t("digitalMarketingService.categories.header.orangeHeader"),
    },
    paragraph: t("digitalMarketingService.categories.categoriesText"),

    categoriesIcons: [
      {
        text: t("digitalMarketingService.categories.categoriesData.content"),
        icon: customIcon.servicesIcons.software.app,
      },
      {
        text: t("digitalMarketingService.categories.categoriesData.analysis"),
        icon: customIcon.servicesIcons.software.website,
      },
      {
        text: t("digitalMarketingService.categories.categoriesData.seo"),
        icon: customIcon.servicesIcons.software.crm,
      },
      {
        text: t("digitalMarketingService.categories.categoriesData.marketing"),
        icon: customIcon.servicesIcons.software.dashboard,
      },
      {
        text: t(
          "digitalMarketingService.categories.categoriesData.mediaMarketing"
        ),
        icon: customIcon.servicesIcons.software.dashboard,
      },
    ],
  };

  const description = {
    srcImg: descriptionImgDM,

    descriptionData: [
      {
        name: t("digitalMarketingService.desc.descriptionData.content.name"),
        description: t(
          "digitalMarketingService.desc.descriptionData.content.description"
        ),
      },
      {
        name: t("digitalMarketingService.desc.descriptionData.analysis.name"),
        description: t(
          "digitalMarketingService.desc.descriptionData.analysis.description"
        ),
      },
      {
        name: t("digitalMarketingService.desc.descriptionData.seo.name"),
        description: t(
          "digitalMarketingService.desc.descriptionData.seo.description"
        ),
      },
      {
        name: t("digitalMarketingService.desc.descriptionData.marketing.name"),
        description: t(
          "digitalMarketingService.desc.descriptionData.marketing.description"
        ),
      },
      {
        name: t(
          "digitalMarketingService.desc.descriptionData.mediaMarketing.name"
        ),
        description: t(
          "digitalMarketingService.desc.descriptionData.mediaMarketing.description"
        ),
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

export default DigitalMarketing;
