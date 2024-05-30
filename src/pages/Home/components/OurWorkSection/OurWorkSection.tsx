import React from "react";
import { HeadingTitle } from "../../../../components/text";
import { Text } from "@chakra-ui/react";

interface IProps {}

const OurWorkSection = ({}: IProps) => {
  return (
    <section className="  m-auto">
      {/* <HeadingTitle headerDark="What we have" headerOrang="Achieved" /> */}
      <Text
        fontSize={{ base: "16px", md: "18px" }}
        marginBottom={{ base: "32px", md: "64px", lg: "100px" }}
        textAlign={"center"}
      >
        Lorem ipsum dolor sit amet consectetur. Volutpat condimentum
      </Text>
      <div className=" bg-[#FAD4AA]">
        <div className="ourWorksContainer     mx-[18px] md:mx-[24px] lg:mx-[100px]">
          <div className="py-[24px] flex flex-col md:flex-col-reverse gap-4">
            <div className="order-1 flex ">
              <div className="w-1/2 h-[140px] md:h-[155px] lg:h-[305px]  bg-slate-400 rounded-xl me-4"></div>
              <div className="w-1/2 h-[140px] md:h-[155px] lg:h-[305px] bg-slate-400 rounded-xl"></div>
            </div>
            <div className="order-2 flex">
              <div className="w-full h-[140px] bg-slate-400 rounded-xl ">
                {" "}
                order-2
              </div>
            </div>
            <div className="order-3 flex">
              <div className="w-1/2 h-[140px] md:h-[155px] lg:h-[305px] bg-slate-400 rounded-xl me-4">
                {" "}
                order-3
              </div>
              <div className="w-1/2 h-[140px] md:h-[155px] lg:h-[305px] bg-slate-400 rounded-xl"></div>
            </div>
          </div>
          {/*  */}
          <div className="py-[24px] flex flex-col md:flex-col-reverse gap-4">
            <div className="order-1  inline-flex flex-col">
              <div className="w-[162px] h-[140px] md:h-[155px] lg:h-[305px]  bg-slate-400 rounded-xl me-4"></div>
              <div className="w-[162px] h-[140px] md:h-[155px] lg:h-[305px] bg-slate-400 rounded-xl"></div>
            </div>
            <div className="order-2 inline-flex flex-col">
              <div className="w-full h-[140px] bg-slate-400 rounded-xl ">
                {" "}
                order-2
              </div>
            </div>
            <div className="order-3 inline-flex flex-col">
              <div className="w-[162px] h-[140px] md:h-[155px] lg:h-[305px] bg-slate-400 rounded-xl me-4">
                {" "}
                order-3
              </div>
              <div className="w-[162px] h-[140px] md:h-[155px] lg:h-[305px] bg-slate-400 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
