import React from "react";

interface IProps {}

const Footer = ({}: IProps) => {
  return (
    <footer className="relative px-[18px] sm:px-10 lg:px-25 md:h-[337px] lg:md:h-[410px] bg-stone-950 sm:rounded-tl-[31px] sm:rounded-tr-[31px] lg:rounded-tl-[60px] lg:rounded-tr-[60px]">
      Footer
      <div className="text-white sm:px-10 lg:px-25 flex justify-between items-center absolute  sm:bottom-[0] lg:bottom-[0] border-t-2 border-orange-600 left-0 right-0 ">
        <div className="my-[19px] ">
          lorem© 2024 bluehost inc. all rights reserved
        </div>
        <div>
          <span className="mx-4">terms of service</span>{" "}
          <span>privacy policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
