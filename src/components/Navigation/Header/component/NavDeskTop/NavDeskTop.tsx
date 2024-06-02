import React, { FC } from "react";
import { logo, navBg } from "../../../../../assets";
import { motion } from "framer-motion";
import NavLinks from "../../../NavLinks";
import NavigationBar from "../../../NavLinks/NavLinks";
import NavItems from "../../../NavLinks/NavLinks";

interface IProp {
  isVisible: boolean;
}

const NavDeskTop: FC<IProp> = ({ isVisible }) => {
  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : [-35, -50, -100, -140] }}
        transition={{ duration: 0.2, type: "spring" }}
        className={`fixed top-0 left-0 right-0 z-50 max-lg:hidden ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img src={navBg} className="w-full min-h-[80px] absolute  " alt="" />
        <div className="container ">
          <NavItems />

          <div className="absolute w-[7%] h-auto  translate-x-[-50%]  translate-y-[13px]  left-1/2 	top-2">
            <img src={logo} className="w-full h-auto" alt="" />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavDeskTop;
