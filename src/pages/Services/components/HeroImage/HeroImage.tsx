import React from "react";

interface IProps {
  data?: object;
  headerText?: string;
  paragraph?: string;
}

const HeroImage = ({ imageSection, headerText }: IProps) => {
  console.log(imageSection);
  return (
    <section className="relative h-[200px] md:h-[300px] xl:h-[500px]">
      <div>
        <img
          src={imageSection.img}
          alt={imageSection.alt}
          className="object-cover h-full w-full absolute inset-0"
        />
        {/* Overlay layer */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>{" "}
      </div>
      <div className="absolute transform container inset-0 flex items-center justify-center md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto pt-[50px] lg:pt-[80px]">
        <div className="opacity-100 p-4 rounded">
          <div className="text-white text-center">
            <header>
              <h2 className="uppercase font-bold mb-3 text-lg md:text-[2.5rem] xl:text-[5.625rem] opacity-70">
                {headerText}
              </h2>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
