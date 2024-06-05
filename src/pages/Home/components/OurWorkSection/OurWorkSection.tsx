import React from "react";
import { Text } from "@chakra-ui/react";
import { HeadingTitle } from "../../../../components/text";

const OurWorkSection = () => {
  return (
    <section className="container mx-auto py-8 px-[18px] max-md:bg-[#FAD4AA]">
      <div className=" flex justify-center text-wrap w-[30%] md:w-[40%] lg:w-[10%] xl:w-[30%]  mx-auto">
        {" "}
        <HeadingTitle
          headerDark="What we have"
          headerOrang="achieved"
          classes=""
        />
      </div>
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        marginBottom={{ base: "32px", md: "64px", lg: "100px" }}
        textAlign="center"
      >
        Lorem ipsum dolor sit amet consectetur. Volutpat condimentum
      </Text>
      <div className="relative">
        <div
          className="backgroundLayer absolute -left-10 md:bg-[#FAD4AA] w-screen max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:right-0 z-1 md:h-[261px] lg:h-[400px]
                 md:top-1/2 md:left-1/2  right-10 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
        ></div>
        <div className="ourWorksContainer  relative z-2 mx-[18px] md:mx-[24px] lg:mx-[11.111%]">
          <div className="py-[24px] flex flex-col md:flex-row justify-between gap-4 xl:gap-[35px]">
            {/* order-1 */}
            <div className="inline-flex md:flex-col justify-center md:w-[31.8%] gap-4 xl:gap-[35px]">
              <div className="max-md:w-[162px] w-full h-[140px] md:h-full lg:h-[305px] bg-slate-400 rounded-xl"></div>
              <div className="w-full md:w-full lg:w-full h-[140px] md:h-full lg:h-[305px] bg-slate-400 rounded-xl"></div>
            </div>
            {/* order-2 */}
            <div className=" flex justify-center m-auto  h-full w-[280px] md:h-[326px] lg:w-[400px] lg:h-[630px] ">
              <div className="w-full md:w-full  lg:w-full h-[140px] md:h-full bg-slate-400 rounded-xl"></div>
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
