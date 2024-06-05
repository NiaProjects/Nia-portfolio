import { Image, Text } from "@chakra-ui/react";

interface IProps {}

const ServicesDescription = ({ srcImg, alt }: IProps) => {
  return (
    <section
      id="ServicesDescription"
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
      </div>
    </section>
  );
};

export default ServicesDescription;
