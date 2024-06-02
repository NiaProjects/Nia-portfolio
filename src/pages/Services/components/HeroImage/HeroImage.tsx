import React from "react";

interface IProps {
  imageSection: object;
  headerText: string;
  paragraph: string;
}

const HeroImage = ({ imageSection, headerText, paragraph }: IProps) => {
  const { img, alt } = imageSection;
  return (
    <section className="h-[200px] md:h-[300px] xl:h-[500px] relative  ">
      <div>
        <img
          src={img}
          alt={alt}
          className="object-cover h-full w-full absolute "
        />
      </div>
      <div className="absolute transform container inset-0 flex items-center justify-center md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto pt-[50px] lg:pt-[80px] ">
        <div className=" opacity-100 p-4 rounded">
          <div className="text-white text-center text-xl md:text-2xl xl:text-3xl">
            <h2 className="capitalize font-bold mb-3">{headerText}</h2>
            {/* <p className="text-sm font-medium text-wrap  ">{paragraph}</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
