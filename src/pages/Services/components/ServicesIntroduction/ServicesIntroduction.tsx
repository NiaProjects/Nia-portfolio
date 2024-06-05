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

const ServicesIntroduction = ({
  srcImg,
  alt,
  headerText,
  paragraph: paragraph,
}: IProps) => {
  return (
    <section
      id="servicesIntroduction "
      className="container max-md:px-[18px] md:transform md:translate-x-[-1%] xl:translate-x-[-7.5%] 3xl:translate-x-[-10.5%]  mb-[40px] mb:mb-[90px] mt-[27px] md:mt-[57px]  xl:mt-[100px]"
    >
      <div className="servicesIntroductionBox flex flex-col md:flex-row md:justify-between items-center gap-4 xl:gap-12">
        <div className="   mx-auto w-[100%] md:w-1/2  ">
          <Image
            src={srcImg}
            className=" rounded-xl max-md:h-[12.5rem] w-full sm:h-auto  object-center "
            alt={alt}
          />
        </div>
        <div className="mt-[22px] text-start md:w-1/2">
          <HeadingTitle
            headerDark={headerText.darkHeader}
            headerOrang={headerText.orangeHeader}
            type="services"
          />
          <Text
            fontSize={{ base: "18px", lg: "20px" }}
            fontWeight={"500"}
            __css={{ textWrap: "balance" }}
          >
            {paragraph}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroduction;
