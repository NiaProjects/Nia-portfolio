import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { customIcon } from "../../../assets/icons/customIcons";
import { v4 as uuidv4 } from "uuid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../../Button";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher ";
import { useTranslation } from "react-i18next";

interface IProps {
  type?: "header" | "footer" | "mobile";
  classes?: string;
}

export const contactUsLinks = [
  { name: "contact us", url: "contact-us", icon: "" },
  { name: "CTA form", url: "about-us", icon: customIcon.rightArrowFooter },
  { name: "chat pot", url: "services", icon: customIcon.rightArrowFooter },
];
const getRoutesServiceList = (t: Function) => [
  {
    name: t("nav.pages.software"),
    url: "our-services/software",
    icon: customIcon.rightArrowFooter,
  },
  {
    name: t("nav.pages.design"),
    url: "our-services/designs",
    icon: customIcon.rightArrowFooter,
  },
  {
    name: t("nav.pages.marketing"),
    url: "our-services/digital-marketing",
    icon: customIcon.rightArrowFooter,
  },
  {
    name: t("nav.pages.events"),
    url: "our-services/events",
    icon: customIcon.rightArrowFooter,
  },
  {
    name: t("nav.pages.photography"),
    url: "our-services/photography",
    icon: customIcon.rightArrowFooter,
  },
  {
    name: t("nav.pages.advertising"),
    url: "our-services/advertising",
    icon: customIcon.rightArrowFooter,
  },
];
const getRoutesPages = (t: Function) => [
  { name: t("nav.pages.home"), url: "/", icon: "" },
  {
    name: t("nav.pages.aboutUs"),
    url: "about-us",
    icon: customIcon.rightArrowFooter,
  },
  { name: t("nav.pages.ourServices"), url: "services", icon: "" },
  {
    name: t("nav.pages.ourWorks"),
    url: "our-work",
    icon: customIcon.rightArrowFooter,
  },
  { name: t("nav.pages.news"), url: "news", icon: customIcon.rightArrowFooter },
];
const className =
  "font-medium lg:text-sm xl:text-xl 2xl:mx-4  flex flex-row items-center lg:mx-2   capitalize hover:text-orange-400 pt-3 transition ";

const NavItems = ({ type = "header" }) => {
  const { t, i18n } = useTranslation();
  const routesServiceList = getRoutesServiceList(t);
  const routes = getRoutesPages(t);

  const location = useLocation();
  const linkPages = routes?.map((item, index) => {
    const { url, name, icon } = item;
    if (name === "our services" && type === "header") {
      const isActive = location.pathname === url;

      return (
        <div key={uuidv4()}>
          <Center>
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
                <span className={`${className} ${isActive ? "active" : ""}`}>
                  Service
                  <ChevronDownIcon color="#00000" />
                </span>
              </MenuButton>
              <MenuList
                minW={207}
                textAlign={"center"}
                justifyContent={"center"}
              >
                {routesServiceList?.map((itemList) => {
                  const { name, url, icon } = itemList;
                  return (
                    <MenuItem
                      key={uuidv4()}
                      sx={{
                        backgroundColor: "transparent",
                      }}
                      command=""
                    >
                      <Link to={url} className="capitalize">
                        {" "}
                        {name}
                      </Link>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </Center>
        </div>
      );
    }
    const isActive = location.pathname === url;
    return (
      name !== "our services" && (
        <li
          key={uuidv4()}
          className={`text-start  my-auto ${
            type === "footer" && "flex items-center first:pb-[22px]"
          }`}
        >
          {" "}
          <Link
            to={url}
            className={
              className +
              "" +
              ` text-nowrap relative  transition duration-300 ${
                isActive ? "active" : ""
              }`
            }
          >
            {type === "footer" && icon} {item.name}
          </Link>
        </li>
      )
    );
  });

  return (
    <ul
      key={uuidv4()}
      className={`flex ${
        type === "header"
          ? "mx-auto lg:translate-y-[30%] w-[86.2%] items-center "
          : "flex-col text-base"
      }`}
    >
      {linkPages}
      <li className="ms-auto my-auto  font-medium">
        <LanguageSwitcher />
        <Button className="flex flex-row items-center  justify-center">
          <Link
            to="contact-us"
            className="inline-block order-1 my-auto text-xl "
          >
            {t("components.contactUs")}
          </Link>
          <div className="inline-block mx-2  items-center my-auto">
            {customIcon.arrowsIcon.contactBtn}
          </div>
        </Button>
      </li>
    </ul>
  );
};

export default NavItems;
