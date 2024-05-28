import { motion } from "framer-motion";
import React, { FC } from "react";
import { logo } from "../../../../../assets";

interface NavMobileProps {}

const NavMobile: FC<NavMobileProps> = ({ isVisible, setOpen, isOpen }) => (
  <motion.nav
    initial={{ y: 0 }}
    animate={{ y: isVisible ? 0 : [-35, -50, -100, -100] }}
    transition={{ duration: 0.2, type: "spring" }}
    className={`lg:hidden flex justify-between  shrink-0  w-screen h-20   fixed top-0 left-0 right-0 z-50 backdrop-filter  backdrop-blur-xl bg-white/40  transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}
  >
    <div className=" w-[70px] h-[70px] left-0 mx-10 translate-y-[5px]  ">
      <img src={logo} className="" alt="" />
    </div>
    {/* <SideBarMenuIcon setOpen={setOpen} isOpen={isOpen} /> */}
  </motion.nav>
);

export default NavMobile;
