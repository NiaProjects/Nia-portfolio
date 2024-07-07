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
                } 	 w-1/2 capitalize  p-6`}
                onClick={() => !isActive && handleOnClick(index)}
                disabled={isActive}
              >
                {locate}
              </button>
            );
          })}
      </div>
      {/* w-[90.66%] lg:w-[86.2%]   */}
      <div className="container tabsButton ">
        {types === "news" &&
          tabHeader?.map((locate, index) => {
            const isActive = index === selectedTabIndex;

            return (
              <button
                key={index}
                className={`min-w-[7.25rem] max-w-[11.625rem]   font-medium  p-6  ${
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
