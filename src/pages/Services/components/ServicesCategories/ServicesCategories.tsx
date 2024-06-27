import React from "react";
import { HeadingTitle } from "../../../../components/text";
import { Text } from "@chakra-ui/react";
import { customIcon } from "../../../../assets/icons/customIcons";
import { v4 as uuidv4 } from "uuid";

interface HeaderText {
  darkHeader: string;
  orangeHeader: string;
}

interface IProps {
  headerText: HeaderText;
  paragraph: string;
  icons: {
    text: string;
    icon: JSX.Element;
  }[];
}

const ServicesCategories = ({ headerText, paragraph, icons }: IProps) => {
  return (
    <section
      id="ServicesCategories"
      className="container mt-[35px] text-center md:mt-[100px] px-[18px]"
    >
      <div className="serviceDescriptionBox mx-auto flex flex-col justify-center text-pretty">
        <header className="mb-8">
          <HeadingTitle
            headerDark={headerText.darkHeader}
            headerOrang={headerText.orangeHeader}
            type="services"
            classes="xl:text-[2.5rem] "
          />

          <Text
            as="p"
            fontSize={{ base: "1rem", lg: "1.25rem", "2xl": "1.75rem" }}
            fontWeight={"500"}
            __css={{ textWrap: "balance" }}
            marginTop={"1rem"}
            lineHeight={"normal"}
          >
            {paragraph}
          </Text>
        </header>
        <div className="categoriesIconBox pt-6 pb-4 flex justify-center items-center flex-wrap md:flex-nowrap gap-4 md:gap-[2.8125rem] xl:gap-[36px] text-balance whitespace-normal break-normal first:mt-6">
          {icons?.map((item) => (
            <article key={uuidv4()} className="flex flex-col items-center">
              <figure
                id="catIcon"
                className="relative mx-auto w-[6.25rem] md:w-[7.5rem] h-[6.25rem] md:h-[7.5rem] flex items-center justify-center "
              >
                <div className="layer rounded-full absolute top-0 left-0 w-full h-full bg-[#FBE2C6] z-0"></div>
                <span className="w-1/2 absolute top-1/2 transform -translate-y-1/2 z-10 text-[#131312]">
                  {item.icon}
                </span>
              </figure>
              <figcaption className=" capitalize text-[1.125rem] xl:text-[1.75rem] font-semibold leading-8 	 text-center z-10 w-[126px] h-[44px] lg:w-[196px]  lg:h-[77px] text-wrap mt-4">
                {item.text}
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCategories;
