import { motion } from "framer-motion";
import { FC } from "react";
import { logo, navBg } from "../../../../../assets";
import NavItems from "../../../NavLinks/NavLinks";
import { customIcon } from "../../../../../assets/icons/customIcons";
import { useTranslation } from "react-i18next";

interface IProp {
  isVisible: boolean;
}

const NavDeskTop: FC<IProp> = ({ isVisible }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : [-35, -50, -100, -140] }}
        transition={{ duration: 0.2, type: "spring" }}
        className={`absolute top-0 left-0 right-0 z-30 max-lg:hidden ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${i18n.language === "ar" ? "rtl" : "ltr"}`}
      >
        <div className="w-full min-h-[80px] max-h-[100px] absolute ">
          {customIcon.navBarSvg}
        </div>
        <div className="">
          <NavItems />

          <div className="absolute w-[7%] h-auto  translate-x-[-50%] 2xl:translate-x-[-40%]  translate-y-[13px]  left-1/2 	top-2">
            <img src={logo} className="2xl:w-[70%] h-auto" alt="" />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavDeskTop;
