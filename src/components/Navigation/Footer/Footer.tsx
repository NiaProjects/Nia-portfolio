import { Box, Link } from "@chakra-ui/react";
import { footerLogo } from "../../../assets";
import { customIcon } from "../../../assets/icons/customIcons";
import NavItems, { routesServiceList } from "../NavLinks/NavLinks";
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
    <footer className="bg-stone-400 overflow-hidden">
      <div className=" footerContainer bg-[#0E0D0D] flex flex-col  justify-center items-start  px-[18px] py-[30px]	">
        <div className="footerLogo md:hidden m-auto block justify-center items-center  pb-[55px] pt-6">
          <img src={footerLogo} className="w-[82.2px] h-[82.2px] block" />
        </div>
        {/*  */}
        <div className="flex justify-center md:gap-x-4 max-md:flex-col  w-full ">
          <div className="footerList flex  justify-evenly gap-12  ">
            <div className="footerLogo max-md:hidden m-auto block justify-center items-center  pb-[55px] pt-6 w-1/3">
              <img src={footerLogo} className="w-[82.2px] h-[82.2px] block" />
            </div>
            <NavItems type={"footer"} />
            {/* our services */}
            <div>
              <a
                href="#services"
                className={`pt-3  capitalize text-white flex items-center first:pb-[22px]`}
              >
                our services
              </a>
              <ul className="flex flex-col text-base first:pb-6  ">
                {routesServiceList?.map((itemList, index) => {
                  const { name, url, icon } = itemList;
                  return (
                    <li
                      key={uuidv4()}
                      className="flex text-start items-center text-base capitalize  text-white text-[18px] text-wrap pt-3"
                    >
                      {icon}{" "}
                      <a href={`#${url}`} className="">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="max-md:hidden relative">
              <div className="footerContact flex justify-between  max-md:mt-[22px]  max-md:mb-[55px]  ">
                {/* <ul className="flex flex-col  text-base pb-[22px]  first:pb-[22px]">
                  {contactUsLinks?.map((item, index) => {
                    const { url, name, icon } = item;
                    return (
                      <li
                        key={uuidv4()}
                        className="flex text-star  first:pb-[22px] justify-start items-center text-base capitalize text-white text-[18px] text-nowrap  "
                      >
                        <a href={`#${url}`} className="pt-3 flex ute">
                          {icon} {name}
                        </a>
                      </li>
                    );
                  })}
                </ul> */}
                {/* Icons */}
                <ul className="bg-[#0E0D0D] gap-3  md:transform md:translate-y-[50%] z-50 mx-10">
                  {socialIcons?.map((socialIcon, index) => {
                    const { url, icon } = socialIcon;
                    return (
                      <li
                        key={uuidv4()}
                        className="flex mt-3 text-start text-base capitalize text-white text-[18px] text-nowrap  "
                      >
                        <a href={`#${url}`}>{icon}</a>
                      </li>
                    );
                  })}{" "}
                </ul>
              </div>
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
          <div className="md:hidden">
            <div className="footerContact flex justify-between max-md:mt-[22px]  max-md:mb-[55px] ">
              <ul className="flex flex-col  text-base pb-[22px] ">
                {contactUsLinks?.map((item, index) => {
                  const { url, name, icon } = item;
                  return (
                    <li
                      key={uuidv4()}
                      className="flex text-star justify-start items-center text-base capitalize text-white text-[18px] text-nowrap  "
                    >
                      <a href={`#${url}`} className="pt-3 flex ute">
                        {icon} {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              {/* Icons */}
              <ul className="gap-3 z-50">
                {/* {socialIcons?.map((socialIcon, index) => {
                  const { url, icon } = socialIcon;
                  return (
                    <li
                      key={uuidv4()}
                      className="flex mt-3 text-start text-base capitalize text-white text-[18px] text-nowrap  "
                    >
                      <a href={`#${url}`}>{icon}</a>
                    </li>
                  );
                })} */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <Box bg="#0E0D0D" color="white" borderTop="1px solid gold">
        <div className="flex flex-col justify-center text-center  md:justify-between px-[100] container">
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
      </Box>
    </footer>
  );
};

export default Footer;
