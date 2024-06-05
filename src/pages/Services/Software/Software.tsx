import { FC } from "react";
import {
  SoftwareDescription,
  SoftwareIntroduction,
  heroImg,
} from "../../../assets";
import HeroImage from "../components/HeroImage";
import ServicesIntroduction from "../components/ServicesIntroduction";
import ServicesDescription from "../components/ServicesDescription";
import ServicesCategories from "../components/ServicesCategories";
heroImg;
interface SoftwareProps {}
const data = {
  imgSection: { img: heroImg, alt: "contact us Image" },
  introduction: {
    srcImg: SoftwareIntroduction,
    alt: "",
    introductionHeader: { darkHeader: "loarm", orangeHeader: "loarm" },
    introductionText:
      " Lorem ipsum dolor sit amet consectetur. Viverra tristique vitaerutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet  consectetur.",
  },
  description: {
    srcImg: SoftwareDescription,
    alt: "",
    descriptionHeader: { darkHeader: "loarm", orangeHeader: "loarm" },
    descriptionText:
      " Lorem ipsum dolor sit amet consectetur. Viverra tristique vitaerutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet  consectetur.",
  },
  categories: {
    header: { darkHeader: "loarm", orangeHeader: "loarm" },
    paragraph:
      " Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est Lorem ipsum dolor sit amet  consectetur.",
  },
};

const SoftWareService: FC<SoftwareProps> = () => {
  // const { srcImg, alt, introductionHeader, introductionText } =
  //   data.serviceIntro;
  return (
    <>
      <HeroImage
        imageSection={data.imgSection}
        headerText={"contact us"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis."
        }
      />
      <ServicesIntroduction
        srcImg={data.introduction.srcImg}
        alt={data.introduction.alt}
        headerText={data.introduction.introductionHeader}
        paragraph={data.introduction.introductionText}
      />
      <ServicesCategories />
      <ServicesDescription
        srcImg={data.description.srcImg}
        alt={data.description.alt}
        headerText={data.description.descriptionHeader}
        paragraph={data.description.descriptionText}
      
      />
    </>
  );
};

export default SoftWareService;
