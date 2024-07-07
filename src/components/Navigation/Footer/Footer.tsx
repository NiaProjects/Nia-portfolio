import { Box } from "@chakra-ui/react";
import { footerLogo, logo } from "../../../assets";
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
    // // <footer
    // //   className={`bg-stone-800 overflow-hidden ${
    // //     i18n.language === "ar" ? "rtl" : "ltr"
    // //   }`}
    // // >
    // //   <section className="">
    // //     <div className="flex justify-between  w-full py-6 px-[100] container flex-wrap md:flex-nowrap">
    // //       {/* logo */}
    // //       <div className="logo-box grid-rows-1 mx-auto ">
    // //         <Link href="/">
    // //           <img src={footerLogo} alt="logo" className="w-[100px]" />
    // //         </Link>
    // //       </div>
    // //       <div className="relative services h-[300px] flex flex-wrap w-full">
    // //         {/* home */}
    // //         <div className="nav-links_home  w-1/2 md:w-1/2 gap-4 px-2 bg-sky-600 z-20">
    // //           <p className="text-white capitalize">
    // //             {t("footer.footerLinksHeader.home")}
    // //           </p>
    // //           <ul className="bg-stone-950">
    // //             {footerLinks.home.map((serviceGroup) =>
    // //               Object.values(serviceGroup).map((service, subIndex) => (
    // //                 <li className="flex items-center ">
    // //                   <Link
    // //                     key={subIndex}
    // //                     to={"our-services/" + service.path}
    // //                     className="text-nowrap relative text-white transition duration-300 flex "
    // //                   >
    // //                     <span className="inline-block rotate-180">
    // //                       {customIcon.rightArrowFooter}
    // //                     </span>
    // //                     <span className="inline-block">{service.name}</span>
    // //                   </Link>
    // //                 </li>
    // //               ))
    // //             )}
    // //           </ul>
    // //         </div>
    // //         <div className="nav-links_services  w-1/2 md:w-1/2 z-10">
    // //           <p className="text-white capitalize">
    // //             {t("footer.footerLinksHeader.ourServices")}
    // //           </p>{" "}
    // //           <ul className="bg-stone-950">
    // //             {footerLinks.ourServices.map((serviceGroup, index) =>
    // //               Object.values(serviceGroup).map((service, subIndex) => (
    // //                 <li className="flex items-center  ">
    // //                   <Link
    // //                     key={subIndex}
    // //                     to={"our-services/" + service.path}
    // //                     className="text-nowrap relative text-white transition duration-300 flex "
    // //                   >
    // //                     <span className="inline-block ">
    // //                       {customIcon.rightArrowFooter}
    // //                     </span>
    // //                     <span className="inline-block">{service.name}</span>
    // //                   </Link>
    // //                 </li>
    // //               ))
    // //             )}
    // //           </ul>
    // //         </div>
    // //         <div className="nav-links_contactUS z-10 w-full md:w-1/2">
    // //           <p className="text-white capitalize">
    // //             {t("footer.footerLinksHeader.ourServices")}
    // //           </p>{" "}
    // //           <ul className="bg-stone-950">
    // //             {footerLinks.support.map((serviceGroup, index) =>
    // //               Object.values(serviceGroup).map((service, subIndex) => (
    // //                 <li className="flex items-center  ">
    // //                   <Link
    // //                     key={subIndex}
    // //                     to={"our-services/" + service.path}
    // //                     className="text-nowrap relative text-white transition duration-300 flex "
    // //                   >
    // //                     <span className="inline-block ">
    // //                       {customIcon.rightArrowFooter}
    // //                     </span>
    // //                     <span className="inline-block">{service.name}</span>
    // //                   </Link>
    // //                 </li>
    // //               ))
    // //             )}
    // //           </ul>
    // //         </div>
    // //       </div>
    // //       <div className="contact-us_btn grid-rows-1 mx-auto">
    // //         {" "}
    // //         <Button>contact us</Button>
    // //       </div>
    // //     </div>
    // //   </section>
    // //   <Box bg="#0E0D0D" color="white" borderTop="1px solid gold">
    // //     <div className="flex flex-col md:flex-row justify-center text-center w-full bg-sky-400 md:justify-between px-[100] container">
    // //       <div className="social-icons pt-3 md:w-1/2 bg-red-200 order-1">
    // //         Icons
    // //       </div>
    //       <div className="text-sm text-center pt-3 pb-6 bg-red-600 md:w-1/2">
    <footer className="bg-[#0E0D0D]  rounded-2xl">
      <div className="footer-container container grid grid-cols-1 md:grid-cols-10   ">
        <div className="footer_logo  md:col-span-2 mx-auto">
          <img src={logo} alt="nia company logo" width={80} height={80} />
        </div>
        <div className="footer-links  md:col-span-8  bg-sky-500 grid grid-cols-2 md:grid-cols-3  justify-items-stretch">
          <div className="home-links gap-y-5 bg-orange-500 text-capitalize text-white">
            <h3 className="text-lg md:text-xl md:text-[22px] font-medium ">
              home
            </h3>
            <ul className="">
              <li>about us</li>
              <li>about us</li>
              <li>about us</li>
            </ul>
          </div>
          <div className="our-service-links bg-orange-800 text-capitalize text-white">
            <h3 className="text-lg md:text-xl md:text-[22px] font-medium">
              our service
            </h3>
            <ul className="text-capitalize text-white">
              <li>about us</li>
              <li>about us</li>
              <li>about us</li>
            </ul>{" "}
          </div>
          <div className="get-help-links bg-orange-400 text-capitalize text-white ">
            {" "}
            <h3 className="text-lg md:text-xl md:text-[22px] font-medium">
              get-help
            </h3>
            <ul className="text-capitalize text-white">
              <li>about us </li>
              <li>about us</li>
              <li>about us</li>
            </ul>{" "}
          </div>
        </div>
        <div className="footer-btn bg-red-400  md:col-[5/10]  ms-auto my-auto">
          <button className=" border">contact us</button>
        </div>
      </div>
      <Box bg="#0E0D0D" color="white" borderTop="1px solid gold">
        <div
          className="grid grid-cols-1 md:grid-cols-2 justify-items-center justify-self-center items-center  content-center
        px-[100] container  h-[5.38rem] md:h-[3.56rem] lg:h-[5.19rem] gap-[.75rem] "
        >
          <div className=" md:order-2 ">
            <Link href="#" _hover={{ color: "gray.400" }}>
              Privacy Policy
            </Link>
            <Link href="#" _hover={{ color: "gray.400" }}>
              Terms of Service
            </Link>
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
