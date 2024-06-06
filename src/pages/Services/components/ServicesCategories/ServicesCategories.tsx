import React from "react";
import { HeadingTitle } from "../../../../components/text";
import { Text } from "@chakra-ui/react";
import { customIcon } from "../../../../assets/icons/customIcons";
interface HeaderText {
  darkHeader: string;
  orangeHeader: string;
}
interface IProps {
  headerText: HeaderText;
  paragraph: string;
}
const categiresIcons = [{ text: "", icon: "" }];
const ServicesCategories = ({ headerText, paragraph }: IProps) => {
  return (
    <section
      id="ServicesCategories"
      className="container mt-[35px] text-center md:mt-[100px] h-screen"
    >
      <div className="serviceDescriptionBox max-md:px-[18px] mx-auto flex flex-col w-[80%] text-pretty">
        <div>
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
        <div className="categoriesIconBox   grid max-md:grid-cols-2	md:grid-cols-4">
          <div id="catIcon" className="	mx-auto relative ">
            <span className="absolute z-2"> {customIcon.systemIcon}</span>
            <div className="layer rounded-full  absolute z-1 top-0 left-0 w-[6.25rem] h-[6.25rem] bg-red-400 "></div>
          </div>
          <span id="catIcon" className="max-md:ms-auto 	mx-auto">
            {customIcon.systemIcon}
          </span>
          <span id="catIcon" className="	mx-auto">
            {customIcon.systemIcon}
          </span>
          <span id="catIcon" className="max-md:ms-auto 	mx-auto">
            {customIcon.systemIcon}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesCategories;
