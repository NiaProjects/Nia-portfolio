import { Box, Link } from "@chakra-ui/react";
import { footerLogo, logo } from "../../../assets";
import { customIcon } from "../../../assets/icons/customIcons";
import NavItems, {
  contactUsLinks,
  routesServiceList,
} from "../NavLinks/NavLinks";
import { v4 as uuidv4 } from "uuid";

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
const Footer = ({}: IProps) => {
  return (
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
