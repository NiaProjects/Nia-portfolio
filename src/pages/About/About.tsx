import { FC } from "react";

import { useTranslation } from "react-i18next";
import { customIcon } from "../../assets/icons/customIcons";
import { aboutNia, heroImg, servicesPagesImg } from "../../assets";
import HeroImage from "../Services/components/HeroImage";
import ServicesIntroduction from "../Services/components/ServicesIntroduction";
import ServicesCategories from "../Services/components/ServicesCategories";
import ServicesDescription from "../Services/components/ServicesDescription";
import ServicesSection from "../Services/components/ServicesSection";
import TeamWork from "./components/TeamWork";
interface AboutProps {}

const AboutPage: FC<AboutProps> = () => {
  const { t } = useTranslation();
  const { headerImgEV, introImgEV, descriptionImgEV } =
    servicesPagesImg.eventsImages;
  const imgSection = {
    img: heroImg,
    alt: "software service",
    headerText: t("aboutusPage.aboutUsHero.heder.heroText"),
  };

  const introduction = {
    srcImg: aboutNia,
    alt: "",
    introductionHeader: {
      darkHeader: t("aboutusPage.aboutUsIntro.heder.darkText"),
      orangeHeader: t("aboutusPage.aboutUsIntro.heder.orangeHeader"),
    },
    introductionText: t("aboutusPage.aboutUsIntro.paragraph"),
  };

  const categories = {
    header: {
      darkHeader: t("aboutusPage.desc.header.darkText"),
      orangeHeader: t("aboutusPage.desc.header.orangeHeader"),
    },
    paragraph: t("aboutusPage.desc.descText"),

    categoriesIcons: [
      {
        text: t("aboutusPage.desc.descriptionData.advertising"),
        icon: customIcon.aboutUsIcons.ads,
      },
      {
        text: t("aboutusPage.desc.descriptionData.software"),
        icon: customIcon.aboutUsIcons.software,
      },
      {
        text: t("aboutusPage.desc.descriptionData.marketing"),
        icon: customIcon.aboutUsIcons.market,
      },
      {
        text: t("aboutusPage.desc.descriptionData.design"),
        icon: customIcon.aboutUsIcons.design,
      },
      {
        text: t("aboutusPage.desc.descriptionData.events"),
        icon: customIcon.aboutUsIcons.events,
      },
      {
        text: t("aboutusPage.desc.descriptionData.Photography"),
        icon: customIcon.aboutUsIcons.photo,
      },
    ],
  };

  const description = {
    srcImg: aboutNia,
    descriptionHeader: {
      darkHeader: t("aboutusPage.aboutUsIntro.heder.darkText"),
      orangeHeader: t("aboutusPage.aboutUsIntro.heder.orangeHeader"),
    },
    descriptionText: t("aboutusPage.aboutUsIntro.paragraph"),
  };
  return (
    <>
      <HeroImage heroImage={imgSection} headerText={imgSection.headerText} />

      <ServicesSection
        srcImg={description.srcImg}
        alt={introduction.alt}
        headerText={description.descriptionHeader}
        paragraph={description.descriptionText}
      />
      <ServicesCategories
        headerText={categories.header}
        paragraph={categories.paragraph}
        icons={categories.categoriesIcons}
      />
      <TeamWork />
    </>
  );
};

export default AboutPage;
