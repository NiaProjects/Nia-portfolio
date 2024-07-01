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

const ServicesSection = ({ srcImg, alt, headerText, paragraph }: IProps) => {
  return (
    <section
      id="servicesIntroduction "
      className=" max-md:px-[18px] md:ps-[4.7%]  md:mt-[55px] xl:mt-24.5 mt-xsmall "
    >
      {/* md:transform md:translate-x-[-1%] xl:translate-x-[-7.5%] 3xl:translate-x-[-10.5%]  mb-[40px] mb:mb-[90px] mt-[27px] md:mt-[57px]  xl:mt-[100px] */}
      <div className="  servicesIntroductionBox flex flex-col md:flex-row-reverse md:justify-between items-center md:gap-1 lg:gap-xsmall ">
        <div className="   mx-auto w-[100%] md:w-1/2  transform md:translate-x-[2%] ">
          <Image
            src={srcImg}
            className=" rounded-xl max-sm:h-[12.5rem]  w-full sm:h-auto  object-center"
            alt={alt}
          />
        </div>
        <div className="services__interoduction-letter text-start md:w-1/2">
          <h1 className="max-xs:text-[1.5rem] text-[1.5rem] md:text-[1.625rem] lg:text-[2.5rem] font-semibold md:font-bold capitalize mb-1 lg:mb-xsmall max-w-[700px] ">
            {headerText.darkHeader}
            <span className="text-[#EF7D00] capitalize ms-2  inline-block">
              {headerText.orangeHeader}
            </span>
            .{" "}
          </h1>
          <Text
            fontSize={{ base: "1rem", lg: "1.25rem", "2xl": "1.75rem" }}
            fontWeight={"500"}
            __css={{ textWrap: "balance" }}
            color="#464440"
            lineHeight={"normal"}
          >
            {paragraph}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
