import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { customIcon } from "../../../assets/icons/customIcons";
import Button from "../../Button";
import { footerLogo } from "../../../assets";

interface IProps {}
const socialIcons = [
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.facebook,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.ig,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.linkedIn,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.pinterest,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.tiktok,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.twitter,
  },
];

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
      className={`overflow-hidden bg-[#0E0D0D]  rounded-t-2xl ${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="footer-container container grid grid-cols-1 md:grid-cols-10   ">
        <div className="footer_logo  md:col-span-2 mx-auto">
          <img src={footerLogo} alt="nia company logo " width={150} />
        </div>
        <div className="footer-links mx-3 md:col-span-8 lg:col-span-6   grid grid-cols-2 md:grid-cols-3  justify-items-stretch">
          <div className="home-links gap-y-5  text-capitalize text-white">
            <h3 className="text-lg md:text-xl md:text-[22px] font-medium capitalize mb-10">
              {t("footer.footerLinksHeader.home")}
            </h3>
            <ul className="bg-stone-950">
              {footerLinks.home.map((serviceGroup) =>
                Object.values(serviceGroup).map((service, subIndex) => (
                  <li className="flex items-center my-2">
                    <Link
                      key={subIndex}
                      to={"our-services/" + service.path}
                      className="text-nowrap relative text-white transition duration-300 flex capitalize"
                    >
                      <span
                        className={`inline-block ${
                          i18n.language !== "ar" ? "rotate-180" : ""
                        } `}
                      >
                        {customIcon.arrowsIcon.footerArrow}
                      </span>
                      <span className="inline-block">{service.name}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="our-service-links 0 text-capitalize text-white">
            <h3 className="text-lg md:text-xl md:text-[22px] font-medium mb-10 capitalize">
              {t("footer.footerLinksHeader.ourServices")}
            </h3>
            <ul className="bg-stone-950">
              {footerLinks.ourServices.map((serviceGroup, index) =>
                Object.values(serviceGroup).map((service, subIndex) => (
                  <li className="flex items-center  ">
                    <Link
                      key={subIndex}
                      to={"our-services/" + service.path}
                      className="text-nowrap relative text-white transition duration-300 flex my-2 capitalize"
                    >
                      <span
                        className={`inline-block ${
                          i18n.language !== "ar" ? "rotate-180" : ""
                        } `}
                      >
                        {customIcon.arrowsIcon.footerArrow}
                      </span>
                      <span className="inline-block">{service.name}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
          <div className="get-help-links  text-capitalize text-white ">
            {" "}
            <h3 className="text-lg md:text-xl md:text-[22px] font-medium mb-10 capitalize">
              {t("footer.footerLinksHeader.getHelp")}
            </h3>
            <ul className="">
              {footerLinks.support.map((serviceGroup, index) =>
                Object.values(serviceGroup).map((service, subIndex) => (
                  <li className="flex items-center my-2 ">
                    <Link
                      key={subIndex}
                      to={"our-services/" + service.path}
                      className="text-nowrap relative text-white transition duration-300 flex capitalize"
                    >
                      <span
                        className={`inline-block ${
                          i18n.language !== "ar" ? "rotate-180" : ""
                        } `}
                      >
                        {customIcon.arrowsIcon.footerArrow}
                      </span>
                      <span className="inline-block">{service.name}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="footer-btn   md:col-[8/10] lg:col-span-2 my-4  mx-auto max-md:mt-[4rem] mb-[1.8rem]">
          <div className="contact-us_btn grid-rows-1 mx-auto">
            <Button>
              {" "}
              <Link
                to="contact-us"
                className="inline-block order-1 my-auto text-xl capitalize"
              >
                {t("components.contactUs")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Box bg="#0E0D0D" color="white" borderTop="1px solid gold">
        <div
          className="grid grid-cols-1 md:grid-cols-2 justify-items-center justify-self-center items-center  content-center
        px-[100] container  h-[5.38rem] md:h-[3.56rem] lg:h-[5.19rem] gap-[.75rem] "
        >
          <div className=" md:order-2 flex gap-2">
            {socialIcons.map((item) => (
              <div>{item.icon}</div>
            ))}
          </div>
          <div className="text-sm text-center md:order-1">
            &copy; 2024 Nia. All rights reserved.
          </div>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
