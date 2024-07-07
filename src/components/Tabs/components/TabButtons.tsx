import React from "react";

interface IProps {
  tabHeader: string[];
  types: "location" | "news";
  selectedTabIndex: number;
  handleOnClick: (index: number) => void;
}
const TabButtons = ({
  tabHeader,
  types = "location",
  selectedTabIndex,
  handleOnClick,
}: IProps) => {
  const classes = types === "location" ? "" : "other-class"; // Example class names

  return (
    <>
      <div className="tabsButton btn-location flex justify-center   ">
        {types === "location" &&
          tabHeader?.map((locate, index) => {
            const isActive = index === selectedTabIndex;

            return (
              <button
                key={index}
                className={`${
                  isActive ? "	activeTab " : "custom-cursor"
                } 	 w-1/2 capitalize`}
                onClick={() => !isActive && handleOnClick(index)}
                disabled={isActive}
              >
                {locate}
              </button>
            );
          })}
      </div>
      {/* w-[90.66%] lg:w-[86.2%]   */}
      <div className="container tabsButton max-w-[44rem] m-auto min-w-[481px] mb-[32px] md:mb-[59px] lg:mb-[80px] flex itepscenter  flex-nowrap ms-[18px] md:ms-[xsmall]  lg:ms-[5.25rem] xl:ms-[6.25rem] mt-xsmall md:mt-[3rem] lg:mt-[4.375rem]">
        {types === "news" &&
          tabHeader?.map((locate, index) => {
            const isActive = index === selectedTabIndex;

            return (
              <button
                key={index}
                className={`min-w-[7.25rem] max-w-[11.625rem]  p-[10px] font-medium  ${
                  isActive ? "	activeTab " : "custom-cursor"
                } 	 w-full capitalize`}
                onClick={() => !isActive && handleOnClick(index)}
                disabled={isActive}
              >
                {locate}
              </button>
            );
          })}
      </div>
    </>
  );
};

export default TabButtons;
