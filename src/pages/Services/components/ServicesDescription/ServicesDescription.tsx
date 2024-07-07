import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { HeadingTitle } from "../../../../components/text";
import Icon from "../../../../assets/icons/Icons";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

interface IProps {
  srcImg: string;
  alt: string;
  descriptions: { name: string; description: string }[];
  descriptionData: any;
}

const ServicesDescription = ({ srcImg, alt, descriptionData }: IProps) => {
  const { i18n } = useTranslation();
  return (
    <section
      id="ServicesDescription"
      className="max-md:px-[18px] ps-[1.5rem] xl:ps-[5.12rem] md:w-[108vw] md:pe-[4.7%] pt-6 md:mt-[55px] xl:mt-24.5 leading-normal mb-8 lg:mb-16"
    >
      <div className="ServicesDescriptionBox relative flex flex-col md:flex-row md:justify-center items-center xl:items-start gap-2 xl:gap-[3.31rem]">
        <div className="mx-auto w-full md:w-[40%] md:order-1 my-auto">
          <Image
            src={srcImg}
            className="rounded-xl max-sm:h-[12.5rem] max-h-[679px] min-h-[542px] hidden md:block w-full sm:h-auto object-center"
            alt={alt}
          />
        </div>
        <div className="me-auto flex flex-col md:w-[54%] my-auto">
          <div className="servicesDescription">
            {descriptionData?.map((desData) => {
              const { name, description } = desData;
              return (
                <article
                  key={uuidv4()}
                  className="flex justify-between capitalize ms-1.5 pb-3"
                >
                  <div
                    id="arrowIcon"
                    className="text-start pe-2.5 xl:pe-[22px] xl:pt-4"
                  >
                    <Icon
                      name="MoveRight"
                      classes={`w-[1.875rem] h-[1.875rem] xl:w-[3.125rem] xl:h-[1.875rem] ${
                        i18n.language === "ar" && "rotate-180"
                      }`}
                      color="#EF7D00"
                    />
                  </div>
                  <div id="descriptionServiceHeader">
                    <header>
                      <h3 className="text-[1.25rem] md:text-[1.375rem] xl:text-[2.5rem] font-bold pb-[.5rem] md:pb-1 lg:mb-1.5 text-[#131312]">
                        {name}
                      </h3>
                    </header>
                    <p className="text-[1.125rem] xl:text-[1.25rem] font-medium leading-5 text-[#464440] xl:leading-6">
                      {description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDescription;
