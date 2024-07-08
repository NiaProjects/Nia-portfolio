import { motion } from "framer-motion";
import { FC } from "react";
import { logo, navBg, navImg } from "../../../../../assets";
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
        <div className=" ">
          <img
            src={navImg}
            alt=""
            className="w-full min-h-[80px] max-h-[150px]  absolute"
          />
        </div>
        <div className="">
          <NavItems />
          <div
            className={`absolute w-[7%] h-auto left-1/2 right-1/2 ${
              i18n.language !== "ar"
                ? "transform -translate-x-[50%] translate-y-[10%]	2xl:translate-y-[30%] 2xl:-translate-x-[35%]	 top-2"
                : "transform translate-x-[50%] translate-y-[10%]	2xl:translate-y-[30%] 2xl:translate-x-[35%]	 top-2"
            } `}
          >
            <img src={logo} className="2xl:w-[70%] h-auto" alt="" />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavDeskTop;
