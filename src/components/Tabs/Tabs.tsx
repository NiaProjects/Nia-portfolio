import React, { ReactElement, useCallback, useState } from "react";
import TabContent from "./components/TabContent";
import TabButtons from "./components/TabButtons";

interface IProps {
  type: string;
  children: any | ReactElement | ReactElement[];
}
const location = ["saudi", "egypt"];
const Tabs = (props: IProps) => {
  const { children, type } = props;
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const handleOnClick = useCallback(
    (index: number) => {
      setSelectedTabIndex(index);
      console.log(index);
    },
    [setSelectedTabIndex]
  );

  return (
    <>
      <section>
        <TabButtons
          tabHeader={location}
          type={type}
          selectedTabIndex={selectedTabIndex}
          handleOnClick={handleOnClick}
        />

        <article>{React.Children.toArray(children)[selectedTabIndex]}</article>
      </section>
    </>
  );
};

export default Tabs;
