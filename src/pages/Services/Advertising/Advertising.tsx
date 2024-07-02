import { FC } from "react";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import ServicesIntroduction from "../components/ServicesIntroduction";
import HeroImage from "../components/HeroImage";
import { data } from "../../../data";
import { customIcon } from "../../../assets/icons/customIcons";
import { useTranslation } from "react-i18next";
import { servicesPagesImg } from "../../../assets";
interface AdvertisingProps {}

const Advertising: FC<AdvertisingProps> = () => {
  const { t } = useTranslation();
  const { headerImgAds, introImgAds, descriptionImgAds } =
    servicesPagesImg.advertisingImages;
  const imgSection = {
    img: headerImgAds,
    alt: "software service",
    headerText: t("advertising.name"),
  };

  const introduction = {
    srcImg: introImgAds,
    alt: "",
    introductionHeader: {
      darkHeader: t("advertising.intro.introductionHeader.darkHeader"),
      orangeHeader: t("advertising.intro.introductionHeader.orangeHeader"),
    },
    introductionText: t("advertising.intro.introductionText"),
  };

  const categories = {
    header: {
      darkHeader: t("advertising.categories.header.darkHeader"),
      orangeHeader: t("advertising.categories.header.orangeHeader"),
    },
    paragraph: t("advertising.categories.categoriesText"),

    categoriesIcons: [
      {
        text: t("advertising.categories.categoriesData.outdoor"),
        icon: customIcon.servicesIcons.software.app,
      },
      {
        text: t("advertising.categories.categoriesData.indoor"),
        icon: customIcon.servicesIcons.software.website,
      },
    ],
  };

  const description = {
    srcImg: descriptionImgAds,

    descriptionData: [
      {
        name: t("advertising.desc.descriptionData.outdoor.name"),
        description: t("advertising.desc.descriptionData.outdoor.description"),
      },
      {
        name: t("advertising.desc.descriptionData.indoor.name"),
        description: t("advertising.desc.descriptionData.indoor.description"),
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

export default Advertising;
