import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { customIcon } from "../../../assets/icons/customIcons";
interface IProps {
  type?: "header" | "footer" | "mobile";
  classes?: string;
}

export const contactUsLinks = [
  { name: "contact us", url: "/", icon: "" },
  { name: "CTA form", url: "about-us", icon: customIcon.rightArrowFooter },
  { name: "chat pot", url: "services", icon: customIcon.rightArrowFooter },
];
export const routesServiceList = [
  { name: "software", url: "/", icon: customIcon.rightArrowFooter },
  { name: "design", url: "about-us", icon: customIcon.rightArrowFooter },
  { name: "digital marketing", url: "", icon: customIcon.rightArrowFooter },
  { name: "events", url: "our-works", icon: customIcon.rightArrowFooter },
  { name: "photography", url: "news", icon: customIcon.rightArrowFooter },
  { name: "advertising", url: "news", icon: customIcon.rightArrowFooter },
];

const routes = [
  { name: "Home", url: "/", icon: "" },
  { name: "about us", url: "about-us", icon: customIcon.rightArrowFooter },
  { name: "our services", url: "services", icon: "" },
  { name: "our works", url: "our-works", icon: customIcon.rightArrowFooter },
  { name: "news", url: "news", icon: customIcon.rightArrowFooter },
];
const className =
  "font-medium lg:text-sm xl:text-xl 2xl:mx-4  flex items-center lg:mx-2   capitalize hover:text-orange-400 pt-3 transition ";

const NavItems = ({ type = "header" }) => {
  const location = useLocation();
  const linkPages = routes?.map((item, index) => {
    const { url, name, icon } = item;
    if (name === "our services" && type === "header") {
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
              <MenuList
                minW={207}
                textAlign={"center"}
                justifyContent={"center"}
              >
                {routesServiceList?.map((itemList, index) => {
                  const { name, url, icon } = itemList;
                  return (
                    <>
                      <MenuItem
                        sx={{
                          backgroundColor: "transparent",
                        }}
                        command=""
                      >
                        <Link to={url}> {name}</Link>
                      </MenuItem>
                    </>
                  );
                })}
              </MenuList>
            </Menu>
          </Center>
        </>
      );
    }
    const isActive = location.pathname === url;
    return (
      <>
        {name !== "our services" && (
          <li
            key={index}
            className={` text-start ${
              type === "footer" && "flex items-center first:pb-[22px]"
            }`}
          >
            <a
              href={"#" + url}
              className={
                className +
                " " +
                ` text-nowrap relative text-white  transition duration-300 ${
                  isActive ? "active" : ""
                }`
              }
            >
              {type === "footer" && icon} {item.name}
            </a>
          </li>
        )}
      </>
    );
  });

  return (
    <>
      <ul
        className={` flex  ${
          type === "header"
            ? "2xl:translate-x-[6.4%] lg:translate-x-[6.4%] lg:translate-y-[90%]  "
            : " flex-col text-base   "
        } `}
      >
        {linkPages}
      </ul>
    </>
  );
};

export default NavItems;
