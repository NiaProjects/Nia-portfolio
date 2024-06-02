import React from "react";
import { Text } from "@chakra-ui/react";

const OurWorkSection = () => {
  return (
    <section className="container mx-auto py-8">
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        marginBottom={{ base: "32px", md: "64px", lg: "100px" }}
        textAlign="center"
      >
        Lorem ipsum dolor sit amet consectetur. Volutpat condimentum
      </Text>
      <div className="relative">
        <div
          className="backgroundLayer absolute bg-[#FAD4AA] w-full max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0 z-1 md:h-[261px] lg:h-[400px]
                 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
        ></div>
        <div className="ourWorksContainer bg-dark relative z-2 mx-[18px] md:mx-[24px] lg:mx-[11.111%]">
          <div className="py-[24px] flex flex-col md:flex-row justify-between gap-4 xl:gap-[35px]">
            {/* order-1 */}
            <div className="inline-flex md:flex-col justify-center md:w-[31.8%] gap-4 xl:gap-[35px]">
              <div className="max-md:w-[162px] w-full h-[140px] md:h-full lg:h-[305px] bg-slate-400 rounded-xl">
                31%
              </div>
              <div className="w-full md:w-full lg:w-full h-[140px] md:h-full lg:h-[305px] bg-slate-400 rounded-xl"></div>
            </div>
            {/* order-2 */}
            <div className="flex-1 flex justify-center m-auto bg-red-500 h-full">
              <div className="w-full md:w-full lg:w-full h-full bg-slate-400 rounded-xl">
                aa order-2aa
              </div>
            </div>
            {/* order-3 */}
            <div className="flex md:flex-col justify-center gap-4 xl:gap-[35px] md:w-[31.8%]">
              <div className="w-[162px] md:w-full lg:w-full h-[140px] md:h-[155px] lg:h-[305px] bg-slate-400 rounded-xl"></div>
              <div className="w-[162px] md:w-full lg:w-full h-[140px] md:h-[155px] lg:h-[305px] bg-slate-400 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
