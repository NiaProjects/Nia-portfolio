import { FC } from "react";
import HeroImage from "../components/HeroImage";
import { heroImg } from "../../../assets";
import ServicesDescription from "../components/ServicesDescription/ServicesDescription";
heroImg;
interface SoftwareProps {}
const images = {
  imgSection: { img: heroImg, alt: "contact us Image" },
};
const SoftWareService: FC<SoftwareProps> = () => (
  <>
    <HeroImage
      imageSection={images.imgSection}
      headerText={"contact us"}
      paragraph={
        "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis."
      }
    />
    <ServicesDescription />
  </>
);

export default SoftWareService;
