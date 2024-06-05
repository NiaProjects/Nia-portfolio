import { FC, ReactNode } from "react";
import "./Title.scss";

// Define the interface for the props
interface ITitleProps {
  type?: "header" | "aboutUsHeader" | "services";
  headerDark: string;
  headerOrang?: string;
  classes?: string;
  children?: ReactNode;
}

// Define the functional component with the correct prop type
const HeadingTitle: FC<ITitleProps> = ({
  type = "header",
  headerDark = "",
  headerOrang = "",
  classes = "",
  children,
}) => (
  <div
    className={` flex   ${
      type !== "services"
        ? type === "aboutUsHeader"
          ? "lg:pb-6 pb-4"
          : "pt-6 pb-2  md:pb-6 md:pt-8"
        : "mb-[16px]"
    }`}
  >
    {/*   justify-center  */}
    <h2
      className={`${
        type !== "services" && "titleSections text-center "
      } capitalize text-2xl md:text-[30px] lg-[40px]`}
    >
      <span
        className={`${classes} text-[#131312] font-montserrat font-semibold capitalize break-words`}
      >
        {headerDark}
      </span>
      <span className="ms-2 text-[#EF7D00] font-montserrat font-semibold break-words capitalize">
        {headerOrang}
      </span>
      {children}
      {headerDark === "why" && (
        <span className="text-[#131312] font-montserrat font-semibold capitalize break-words">
          ?
        </span>
      )}
    </h2>
  </div>
);

export default HeadingTitle;
