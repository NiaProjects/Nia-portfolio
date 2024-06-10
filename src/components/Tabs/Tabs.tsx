import React, { ReactElement, useCallback, useState } from "react";
import TabContent from "./components/TabContent";
import TabButtons from "./components/TabButtons";

interface IProps {
  type: string;
  children: any | ReactElement | ReactElement[];
  selectedTabIndex: any;
}
const location = ["saudi", "egypt"];
const Tabs = (props: IProps) => {
  const { children, type, selectedTabIndex } = props;
  // const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  // const handleOnClick = useCallback(
  //   (index: number) => {
  //     setSelectedTabIndex(index);
  //     console.log(index);
  //   },
  //   [setSelectedTabIndex]
  // );
  // console.log(selectedTabIndex);
  return (
    <>
      <>
        {/* {type !== "location" && (
          <TabButtons
            tabHeader={location}
            type={"location"}
            selectedTabIndex={selectedTabIndex}
            handleOnClick={handleOnClick}
          />
        )} */}
        {React.Children.toArray(children)[selectedTabIndex]}
      </>
    </>
  );
};

export default Tabs;
