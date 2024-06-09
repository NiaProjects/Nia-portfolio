import React from "react";

interface IProps {
  tabHeader: string[];
  type: string;
  selectedTabIndex: number;
  handleOnClick: (index: number) => void;
}
const TabButtons = ({
  tabHeader,
  type,
  selectedTabIndex,
  handleOnClick,
}: IProps) => {
  const classes = type === "location" ? "" : "other-class"; // Example class names

  return (
    <div className="tabsButton flex justify-center  ">
      {type === "location"
        ? tabHeader?.map((locate, index) => {
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
          })
        : ""}
    </div>
  );
};

export default TabButtons;
