import React, { FC } from "react";

import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import {
  Center,
  ChakraProvider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import theme from "../../../";
interface IProps {
  type?: "header" | "footer" | "mobile";
  classes?: string;
}

// const className = "font-medium xl:text-[20px] py-3 transition ";

// const NavigationBar: React.FC = () => {
//   return (
//     <>
//       <NavItem to="#home" text="home" />
//       <NavItem to="#about-us" text="about us" />
//       <NavItem to="#services" text="services" />
//       <NavItem to="#our-works" text="our works" />
//       <NavItem to="#news" text="news" />
//     </>
//   );
// };
const routes = [
  { name: "Home", url: "/" },
  { name: "about us", url: "about-us" },
  { name: "our services", url: "" },
  { name: "our works", url: "our-works" },
  { name: "news", url: "news" },
];

const className =
  "font-medium lg:text-sm xl:text-xl 2xl:mx-4   lg:mx-2   capitalize hover:text-orange-400 py-3 transition ";

const NavItems = ({ type = "header" }) => {
  const location = useLocation();
  const linkPages = routes?.map((item, index) => {
    const { url, name } = item;
    if (name === "our services") {
      return (
        <>
          <Center key={name}>
            <Menu variant="roundRight">
              <MenuButton
                px={0}
                py={0}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="0px"
                _hover={{ bg: "" }}
                // _expanded={{ bg: "orange.500" }}
                _focus={{ boxShadow: "none" }}
              >
                <span className={`${className} text-white`}> Service</span>
                <ChevronDownIcon color="#ffffff" />
              </MenuButton>
              <MenuList>
                <MenuItem
                  sx={{
                    backgroundColor: "transparent",
                  }}
                  command=""
                >
                  New Tab
                </MenuItem>
                <MenuItem
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                  command=""
                >
                  New Tab
                </MenuItem>
                <MenuItem
                  sx={{
                    backgroundColor: "transparent",
                  }}
                  command=""
                >
                  New Tab
                </MenuItem>
                <MenuItem
                  sx={{
                    backgroundColor: "transparent",
                  }}
                  command=""
                >
                  New Tab
                </MenuItem>
              </MenuList>
            </Menu>
          </Center>
        </>
      );
    }
    const isActive = location.pathname === url;
    return (
      <li key={index} className={` `}>
        <a
          href={"#" + url}
          className={
            className +
            " " +
            ` relative text-white  transition duration-300 ${
              isActive ? "active" : ""
            }`
          }
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <>
      <ul
        className={` flex  ${
          type === "header"
            ? "2xl:translate-x-[6.4%] lg:translate-x-[6.4%] lg:translate-y-[90%]  "
            : ""
        } items-center`}
      >
        {linkPages}
      </ul>
    </>
  );
};

export default NavItems;
