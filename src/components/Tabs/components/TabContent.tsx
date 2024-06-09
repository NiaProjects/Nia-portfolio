import React, { JSXElementConstructor, ReactElement } from "react";

interface IProps {
  children:
    | ReactElement
    | ReactElement<any, string | JSXElementConstructor<any>>[];
}

const TabContent = ({ children }: IProps): JSX.Element => {
  return (
    <div className="pt-[32px]  flex-col xl:flex-row justify-between">
      {children}
    </div>
  );
};

export default TabContent;
