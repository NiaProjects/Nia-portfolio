import { FC } from "react";
import { heroImg, servicesPagesImg } from "../../../assets";
import ServicesCategories from "../components/ServicesCategories";
import ServicesDescription from "../components/ServicesDescription";
import ServicesIntroduction from "../components/ServicesIntroduction";
import HeroImage from "../components/HeroImage";
import { data } from "../../../data";
import { customIcon } from "../../../assets/icons/customIcons";
import { useTranslation } from "react-i18next";
heroImg;
interface SoftwareProps {}

const SoftWareService: FC<SoftwareProps> = () => {
  const { t } = useTranslation();
  const { headerImgSF, introImgSF, descriptionImgSF } =
    servicesPagesImg.softwareImages;
  const imgSection = {
    img: headerImgSF,
    alt: "software service",
    headerText: t("softwareService.name"),
  };

  const introduction = {
    srcImg: introImgSF,
    alt: "",
    introductionHeader: {
      darkHeader: t("softwareService.intro.introductionHeader.darkHeader"),
      orangeHeader: t("softwareService.intro.introductionHeader.orangeHeader"),
    },
    introductionText: t("softwareService.intro.introductionText"),
  };

  const categories = {
    header: {
      darkHeader: t("softwareService.categories.header.darkHeader"),
      orangeHeader: t("softwareService.categories.header.orangeHeader"),
    },
    paragraph: t("softwareService.categories.categoriesText"),

    categoriesIcons: [
      {
        text: t("softwareService.categories.categoriesData.mobile"),
        icon: customIcon.servicesIcons.software.app,
      },
      {
        text: t("softwareService.categories.categoriesData.website"),
        icon: customIcon.servicesIcons.software.website,
      },
      {
        text: t("softwareService.categories.categoriesData.crm"),
        icon: customIcon.servicesIcons.software.crm,
      },
      {
        text: t("softwareService.categories.categoriesData.dashboard"),
        icon: customIcon.servicesIcons.software.dashboard,
      },
    ],
  };

  const description = {
    srcImg: descriptionImgSF,

    descriptionData: [
      {
        name: t("softwareService.desc.descriptionData.mobile.name"),
        description: t(
          "softwareService.desc.descriptionData.mobile.description"
        ),
      },
      {
        name: t("softwareService.desc.descriptionData.website.name"),
        description: t(
          "softwareService.desc.descriptionData.website.description"
        ),
      },
      {
        name: t("softwareService.desc.descriptionData.crm.name"),
        description: t("softwareService.desc.descriptionData.crm.description"),
      },
      {
        name: t("softwareService.desc.descriptionData.dashboard.name"),
        description: t(
          "softwareService.desc.descriptionData.dashboard.description"
        ),
      },
    ],
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

export default SoftWareService;
