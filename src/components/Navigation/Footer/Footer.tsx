import { Box, Link } from "@chakra-ui/react";
import { footerLogo } from "../../../assets";
import { customIcon } from "../../../assets/icons/customIcons";
import NavItems, {
  contactUsLinks,
  routesServiceList,
} from "../NavLinks/NavLinks";

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
    <>
      <div className=" bg-[#0E0D0D] flex flex-row justify-evenly items-center px-[18px]">
        <div className="footerLogo flex justify-center items-center">
          <img src={footerLogo} className="w-[82.2px] h-[82.2px] block" />
        </div>
        {/*  */}
        <div className="footerList flex  justify-evenly gap-10  ">
          <NavItems type={"footer"} />
          <div>
            <a
              href="#services"
              className={`pt-3  capitalize text-white flex items-center first:pb-[22px]`}
            >
              our services
            </a>
            <ul className="flex flex-col text-base first:pb-6 ">
              {routesServiceList?.map((itemList, index) => {
                const { name, url, icon } = itemList;
                return (
                  <>
                    <li
                      key={index}
                      className="flex text-start items-center text-base capitalize  text-white text-[18px] text-nowrap pt-3"
                    >
                      {icon}{" "}
                      <a href={`#${url}`} className="">
                        {name}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <ul className="flex flex-col  text-base pb-[22px] ">
            {contactUsLinks?.map((item, index) => {
              const { url, name, icon } = item;
              return (
                <>
                  <>
                    <li
                      key={index}
                      className="flex text-star justify-start items-center text-base capitalize text-white text-[18px] text-nowrap  "
                    >
                      <a href={`#${url}`} className="pt-3 flex ute">
                        {icon} {name}
                      </a>
                    </li>
                  </>
                </>
              );
            })}
          </ul>
        </div>
        {/*footerContact  */}
        <div className="footerContact flex justify-between max-md:mt-[22px] max-md:mb-[55px]">
          {/* <ul className="flex flex-col  text-base pb-[22px] ">
            {contactUsLinks?.map((item, index) => {
              const { url, name, icon } = item;
              return (
                <>
                  <>
                    <li
                      key={index}
                      className="flex text-star justify-start items-center text-base capitalize text-white text-[18px] text-nowrap  "
                    >
                      <a href={`#${url}`} className="pt-3 flex ute">
                        {icon} {name}
                      </a>
                    </li>
                  </>
                </>
              );
            })}
          </ul> */}
          {/* Icons */}
          {/* <ul className="bg-[#0E0D0D] gap-3">
            {socialIcons?.map((socialIcon, index) => {
              const { url, icon } = socialIcon;
              return (
                <>
                  <li
                    key={index}
                    className="flex mt-3 text-start text-base capitalize text-white text-[18px] text-nowrap  "
                  >
                    <a href={`#${url}`}>{icon}</a>
                  </li>
                </>
              );
            })}{" "}
          </ul> */}
        </div>
      </div>
      {/*  */}
      <Box as="footer" bg="#0E0D0D" color="white" borderTop="1px solid gold">
        <>
          <div className="flex flex-col justify-center mb-6 text-center  md:justify-between px-[100] container">
            <div className="flex gap-2.5 justify-center my-4">
              <Link href="#" _hover={{ color: "gray.400" }}>
                Privacy Policy
              </Link>
              <Link href="#" _hover={{ color: "gray.400" }}>
                Terms of Service
              </Link>
            </div>
            <div className="text-sm text-center">
              &copy; 2024 Nia. All rights reserved.
            </div>
          </div>
        </>
      </Box>
    </>
  );
};

export default Footer;
