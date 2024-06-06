import { Image, Text } from "@chakra-ui/react";
import { HeadingTitle } from "../../../../components/text";
import Icon from "../../../../assets/icons/Icons";
import { v4 as uuidv4 } from "uuid";

// interface HeaderText {
//   darkHeader: string;
//   orangeHeader: string;
// }
interface IProps {
  srcImg: string;
  alt: string;
  descriptions: { name: string; description: string }[];
}
const descriptionData = [
  {
    name: "Mobile",
    description:
      "Viverra tristique vitae rutrum dui aliquet sed at nunc    convallis. Tellus facilisis adipiscing cras est. software    responsive social media e-commerce utility app",
  },
  {
    name: "website",
    description:
      "Viverra tristique vitae rutrum dui aliquet sed at nunc    convallis. Tellus facilisis adipiscing cras est. software    responsive social media e-commerce utility app",
  },
  {
    name: "crm system",
    description:
      "Viverra tristique vitae rutrum dui aliquet sed at nunc    convallis. Tellus facilisis adipiscing cras est. software    responsive social media e-commerce utility app",
  },
  {
    name: "dashboard",
    description:
      "Viverra tristique vitae rutrum dui aliquet sed at nunc    convallis. Tellus facilisis adipiscing cras est. software    responsive social media e-commerce utility app",
  },
];

const ServicesDescription = ({ srcImg, alt }: IProps) => {
  return (
    <section
      id="ServicesDescription"
      className=" max-md:px-[18px] ps-[1.5rem] xl:ps-[5.12rem]   md:pe-[4.7%] pt-6 md:mt-[55px] xl:mt-24.5 leading-normal	"
    >
      <div className="ServicesDescriptionBox relative -right-10 flex flex-col  md:flex-row jus md:justify-center items-center  gap-2 xl:gap-[3.31rem]">
        <div className="   mx-auto w-full md:w-1/3   md:transform md:translate-x-[12%] md:order-1 ">
          <Image
            src={srcImg}
            className="rounded-xl max-sm:h-[12.5rem]  w-full sm:h-auto  object-center   "
            alt={alt}
          />
        </div>
        <div className="me-auto flex flex-col  mt-[22px]  md:w-2/3">
          <div className="servicesDescription ">
            {descriptionData?.map((desData) => {
              const { name, description } = desData;
              return (
                <>
                  <div
                    key={uuidv4()}
                    className="flex  justify-between capitalize  ms-1.5 gap-[.5rem] "
                  >
                    <div
                      id="arrowIcon"
                      className=" text-start pe-2.5 xl:pe-[22px] "
                    >
                      <Icon
                        name="MoveRight"
                        classes=" w-[1.875rem] h-[1.875rem] xl:w-[3.125rem] xl:h-[1.875rem]"
                        color="#EF7D00"
                      />
                    </div>
                    <div id="descriptionServiceHeader" className="">
                      {" "}
                      <h3 className="text-[1.25rem] md:text-1.375rem xl:text-[2.5rem] font-semibold  pb-[.5rem] md:pb-1 lg:mb-1.5">
                        {name}{" "}
                      </h3>
                      <p className="text-[1.125rem] md:text-[1.25rem] font-medium  whitespace-break-spaces	">
                        {description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDescription;
