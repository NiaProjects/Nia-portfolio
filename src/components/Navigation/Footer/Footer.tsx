import { Box } from "@chakra-ui/react";
import { footerLogo } from "../../../assets";
import { customIcon } from "../../../assets/icons/customIcons";
import NavItems, {
  contactUsLinks,
  routesServiceList,
} from "../NavLinks/NavLinks";
import { v4 as uuidv4 } from "uuid";
import Button from "../../Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IProps {}
const socialIcons = [
  {
    url: "",
    icon: customIcon.twitter,
  },
  {
    url: "",
    icon: customIcon.ig,
  },
  {
    url: "",
    icon: customIcon.facebook,
  },
];

// name !== "our services" && (
//   <li
//     key={uuidv4()}
//     className={`text-start  my-auto ${
//       type === "footer" && "flex items-center first:pb-[22px]"
//     }`}
//   >
//     {" "}
//     <Link
//       to={url}
//       className={
//         className +
//         "" +
//         ` text-nowrap relative text-white transition duration-300 ${
//           isActive ? "active" : ""
//         }`
//       }
//     >
//       {type === "footer" && icon} {item.name}
//     </Link>
//   </li>
const Footer = ({}: IProps) => {
  const { t, i18n } = useTranslation();
  const footerLinks = {
    home: [
      {
        aboutUs: {
          name: t("footer.footerLinks.aboutUs"),
          path: "about-us",
        },
        clients: { name: t("footer.footerLinks.clients"), path: "/" },
        works: { name: t("footer.footerLinks.works"), path: "/" },
        news: { name: t("footer.footerLinks.news"), path: "/" },
      },
    ],

    ourServices: [
      {
        ads: { name: t("footer.footerLinks.advertising"), path: "advertising" },
        marketing: {
          name: t("footer.footerLinks.marketing"),
          path: "digital-marketing",
        },
        design: { name: t("footer.footerLinks.design"), path: "design" },
        event: { name: t("footer.footerLinks.events"), path: "event" },
        software: { name: t("footer.footerLinks.software"), path: "software" },
        photography: {
          name: t("footer.footerLinks.photography"),
          path: "photography",
        },
      },
    ],
    support: [
      {
        terms: { name: t("footer.footerLinks.terms"), path: "" },
        policy: { name: t("footer.footerLinks.policy"), path: "" },
      },
    ],
  };
  return (
    <footer
      className={`bg-stone-800 overflow-hidden ${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <section className="">
        <div className="flex justify-between  w-full py-6 px-[100] container flex-wrap md:flex-nowrap">
          {/* logo */}
          <div className="logo-box grid-rows-1 mx-auto ">
            <Link href="/">
              <img src={footerLogo} alt="logo" className="w-[100px]" />
            </Link>
          </div>
          <div className="relative services h-[300px] flex flex-wrap w-full">
            {/* home */}
            <div className="nav-links_home  w-1/2 md:w-1/2 gap-4 px-2 bg-sky-600 z-20">
              <p className="text-white capitalize">
                {t("footer.footerLinksHeader.home")}
              </p>
              <ul className="bg-stone-950">
                {footerLinks.home.map((serviceGroup) =>
                  Object.values(serviceGroup).map((service, subIndex) => (
                    <li className="flex items-center ">
                      <Link
                        key={subIndex}
                        to={"our-services/" + service.path}
                        className="text-nowrap relative text-white transition duration-300 flex "
                      >
                        <span className="inline-block rotate-180">
                          {customIcon.rightArrowFooter}
                        </span>
                        <span className="inline-block">{service.name}</span>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="nav-links_services  w-1/2 md:w-1/2 z-10">
              <p className="text-white capitalize">
                {t("footer.footerLinksHeader.ourServices")}
              </p>{" "}
              <ul className="bg-stone-950">
                {footerLinks.ourServices.map((serviceGroup, index) =>
                  Object.values(serviceGroup).map((service, subIndex) => (
                    <li className="flex items-center  ">
                      <Link
                        key={subIndex}
                        to={"our-services/" + service.path}
                        className="text-nowrap relative text-white transition duration-300 flex "
                      >
                        <span className="inline-block ">
                          {customIcon.rightArrowFooter}
                        </span>
                        <span className="inline-block">{service.name}</span>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className="nav-links_contactUS z-10 w-full md:w-1/2">
              <p className="text-white capitalize">
                {t("footer.footerLinksHeader.ourServices")}
              </p>{" "}
              <ul className="bg-stone-950">
                {footerLinks.support.map((serviceGroup, index) =>
                  Object.values(serviceGroup).map((service, subIndex) => (
                    <li className="flex items-center  ">
                      <Link
                        key={subIndex}
                        to={"our-services/" + service.path}
                        className="text-nowrap relative text-white transition duration-300 flex "
                      >
                        <span className="inline-block ">
                          {customIcon.rightArrowFooter}
                        </span>
                        <span className="inline-block">{service.name}</span>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
          <div className="contact-us_btn grid-rows-1 mx-auto">
            {" "}
            <Button>contact us</Button>
          </div>
        </div>
      </section>
      <Box bg="#0E0D0D" color="white" borderTop="1px solid gold">
        <div className="flex flex-col md:flex-row justify-center text-center w-full bg-sky-400 md:justify-between px-[100] container">
          <div className="social-icons pt-3 md:w-1/2 bg-red-200 order-1">
            Icons
          </div>
          <div className="text-sm text-center pt-3 pb-6 bg-red-600 md:w-1/2">
            &copy; 2024 Nia. All rights reserved.
          </div>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
