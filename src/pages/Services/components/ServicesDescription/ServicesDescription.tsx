import { Image, Text } from "@chakra-ui/react";
import { HeadingTitle } from "../../../../components/text";

interface HeaderText {
  darkHeader: string;
  orangeHeader: string;
}
interface IProps {
  srcImg: string;
  alt: string;
  headerText: HeaderText;
  paragraph: string;
}

const ServicesDescription = ({
  srcImg,
  alt,
  headerText,
  paragraph,
}: IProps) => {
  return (
    <section
      id="ServicesDescription"
      className="container max-md:px-[18px] md:transform md:translate-x-[-1%] xl:translate-x-[-7.5%] 3xl:translate-x-[-10.5%]  mb-[40px] mb:mb-[90px] mt-[27px] md:mt-[57px]  xl:mt-[100px]"
    >
      <div className="ServicesDescriptionBox flex flex-col md:flex-row md:justify-between items-center gap-4 xl:gap-12">
        <div className="   mx-auto w-[100%] md:w-1/2  md:order-1  ">
          <Image
            src={srcImg}
            className=" rounded-xl  w-full sm:h-auto  object-center h-[28.75rem]  "
            alt={alt}
          />
        </div>
        <div className="mt-[22px] text-center md:w-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, culpa
          minima. Officiis ullam ad est laboriosam. Necessitatibus voluptatibus,
          recusandae amet rem, delectus perferendis quos dignissimos sunt odit
          ea, nesciunt voluptate sequi magni? Accusantium voluptatem saepe
          voluptatum. Recusandae, inventore aliquid iusto esse tempora ratione
          quaerat doloremque hic accusamus. Sunt eligendi id ex eaque magni
          fugit harum, asperiores optio delectus, dolorem ab, dignissimos
          nesciunt nihil itaque deleniti vel maiores commodi molestias quos
          libero ratione voluptate. Sunt architecto exercitationem dolores modi
          ratione, dolorem quas qui veritatis quo enim cum dolore quaerat ipsam
          itaque inventore ullam facilis perferendis. Officiis deleniti odit
          cumque quod blanditiis.
        </div>
      </div>
    </section>
  );
};

export default ServicesDescription;
