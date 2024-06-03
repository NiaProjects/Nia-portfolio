import React, { FC, useRef } from "react";
import { logo } from "../../../../../assets";
import Icon from "../../../../../assets/icons/Icons";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { AiOutlineRollback } from "react-icons/ai";
import { BiHomeSmile, BiUser } from "react-icons/bi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { FiSettings, FiShoppingCart } from "react-icons/fi";

interface NavMobileProps {
  isVisible: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const SidebarItem: FC<{ title: string; Icon: any; href?: string }> = ({
  title,
  Icon,
  href,
}) => (
  <li className="p-2 hover:bg-gray-700 cursor-pointer">
    <a href={href} className="flex items-center space-x-2">
      <Icon />
      <span>{title}</span>
    </a>
  </li>
);

const NavMobile: FC<NavMobileProps> = ({ isVisible, setOpen, isOpen }) => {
  const sidebarRef = useRef(null);
  useClickAway(sidebarRef, () => {
    if (isOpen) setOpen(false);
  });

  const toggleSidebar = () => setOpen((prev) => !prev);

  const items = [
    { title: "Home", Icon: BiHomeSmile, href: "#" },
    { title: "About", Icon: BiUser, href: "#" },
    { title: "Contact", Icon: HiOutlineChatBubbleBottomCenterText, href: "#" },
    { title: "Settings", Icon: FiSettings, href: "#" },
    { title: "Shop", Icon: FiShoppingCart, href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : [-35, -50, -100, -100] }}
      transition={{ duration: 0.2, type: "spring" }}
      className={`lg:hidden flex justify-between w-screen h-[50px] md:h-20 fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-xl bg-white/40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-[45px] md:w-[70px] h-auto left-0 mx-10 translate-y-[5px]">
        <img src={logo} alt="Logo" />
      </div>
      <aside className="transform bg-red-200 ">
        <button
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          className="menuIcon mx-10 translate-y-[50%]"
        >
          <Icon name="Menu" size={24} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={sidebarRef}
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              exit={{ width: 0 }}
              className="bg-gray-800 text-white h-screen absolute top-0 right-0 shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <button onClick={toggleSidebar} className="mb-4">
                  Toggle
                </button>
                <ul>
                  {items.map((item, index) => (
                    <SidebarItem key={index} {...item} />
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </motion.nav>
  );
};

export default NavMobile;
