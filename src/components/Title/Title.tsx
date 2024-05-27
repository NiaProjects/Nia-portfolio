import React, { FC } from "react";

interface TitleProps {}
import "./Title.scss";
const Title: FC<TitleProps> = () => (
  <div className="flex items-center justify-center gap-5">
    <h2 className="titleSections text-center capitalize text-[40px]">
      <span className="text-[#131312]  font-montserrat font-semibold capitalize break-words">
        Why
      </span>
      <span className="ms-2  text-[#EF7D00]  font-montserrat font-semibold  break-words">
        Nia
      </span>
      <span className="text-[#131312]  font-montserrat font-semibold capitalize break-words">
        ?
      </span>
    </h2>
  </div>
);

export default Title;
