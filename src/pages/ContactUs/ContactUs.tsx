import { v4 as uuidv4 } from "uuid";
import Tabs from "../../components/Tabs/Tabs";
import TabContent from "../../components/Tabs/components/TabContent";
// import "../../styles/main.scss";
import { customIcon } from "../../assets/icons/customIcons";
import AddressLocation from "./components/Location/AddressLocation";
import FormData from "./components/FormData/FormData";
import { HeadingTitle } from "../../components/text";
import TabButtons from "../../components/Tabs/components/TabButtons";
import React from "react";
import { contactUsImg, heroImg } from "../../assets";
import HeroImage from "../Services/components/HeroImage";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";

interface ContactInfo {
  id: string;
  adds: string;
  phone: string;
  location: string;
  iconAdds: any;
  iconPhone: any;
}
interface ContactsData {
  [key: string]: ContactInfo[]; // Change the structure to accept any location key
}
type Poi = {
  key: string;
  location: google.maps.LatLngLiteral;
  zoon: string;
};

const locations: any = [
  {
    zoon: "saudi",
    key: uuidv4(),
    location: { lat: 29.987664269730214, lng: 31.135320380036145 },
  },
  {
    zoon: "saudi",
    key: uuidv4(),
    location: { lat: 29.940071799838737, lng: 31.220967166544746 },
  },
  {
    zoon: "egp",
    key: uuidv4(),
    location: { lat: 29.984292325438595, lng: 31.254057970423073 },
  },
];
const contactsData: ContactInfo[] = [
  {
    id: uuidv4(),
    location: "saudi", // location for saudi
    adds: `Salhiya- <br/> Riyadh-12662, Saudi Arabia`,
    phone: "+9660126176182",
    iconAdds: customIcon.locationPin,
    iconPhone: customIcon.locationPhone,
  },
  {
    id: uuidv4(),
    location: "saudi", // location for saudi
    adds: "Aziziyah-<br/> Jeddah-23337,SaudiArab",
    phone: "+9660126176182 ",
    iconAdds: customIcon.locationPin,
    iconPhone: customIcon.locationPhone,
  },

  {
    id: uuidv4(),
    location: "egp", // location for egp
    adds: "al naser giza ",
    phone: "+201028872884",
    iconAdds: customIcon.locationPin,
    iconPhone: customIcon.locationPhone,
  },
];

{
  /*ContactUs component */
}
const ContactUs = () => {
  const { t } = useTranslation();
  const saudiContacts = contactsData.filter(
    (contact) => contact.location === "saudi"
  );
  const egpContacts = contactsData.filter(
    (contact) => contact.location === "egp"
  );
  const soaudiLocation = locations.filter((locate) => locate.zoon === "saudi");

  const egpLocation = locations.filter((locate) => locate.zoon === "egp");
  //
  const location = [t("location.sa"), t("location.eg")];
  const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0);
  const handleOnClick = React.useCallback(
    (index: number) => {
      setSelectedTabIndex(index);
    },
    [setSelectedTabIndex]
  );
  const imgSection = {
    img: heroImg,
    alt: "software service",
    headerText: t("components.contactUs"),
  };

  return (
    <>
      <HeroImage heroImage={imgSection} headerText={imgSection.headerText} />
      {/* <ToastContainer /> */}

      <section className=" bg-[#FFFDFB]   ">
        {/* w-[90.4%] lg:w-[50%]  */}
        <div className="lg:p-[10px] mt-6 mx-auto rounded-3xl container ">
          <div className="flex flex-col lg:flex-row items-center  justify-between lg:w-[98.5%] mx-auto mb-[32px] lg:mb-[62px]">
            {/* <TabButtons types="location"  /> */}
            <Tabs type="location" selectedTabIndex={selectedTabIndex}>
              <TabContent>
                <>
                  <div className="w-full md:w-[420px] lg:w-[33.8%] max-lg:mb-[24px] m-auto  flex flex-col   justify-center ">
                    <div className="w-[71.4%] mx-auto text-lg  md:text-xl  ">
                      <TabButtons
                        tabHeader={location}
                        type={"location"}
                        selectedTabIndex={selectedTabIndex}
                        handleOnClick={handleOnClick}
                      />
                    </div>
                    {saudiContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="shadowEffect flex flex-col w-[95.4%] lg:w-full  mx-auto max-w-[420px] p-[10px] gap-4 bg-white rounded-[10px] shadowEffect mt-4 "
                      >
                        <div className="address flex">
                          <span className="me-2">{contact.iconAdds}</span>{" "}
                          <span
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: contact.adds,
                            }}
                          ></span>
                        </div>
                        <div className="phone flex ">
                          <span className="me-2">{contact.iconPhone}</span>
                          <span>{contact.phone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-[95.2%] md:w-[94%] lg:ms-auto max-md:mx-auto lg:w-[60.4%]  h-[246px] sm:h-[382px] lg:h-[616px] rounded-xl overflow-hidden ">
                    {/* <AddressLocation locations={soaudiLocation} /> */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231794.66815599796!2d38.8808213!3d21.4497989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d781e8e6e2ad%3A0x340366416b99128c!2sKing%20Abdulaziz%20International%20Airport!5e0!3m2!1sen!2ssa!4v1698765539737!5m2!1sen!2ssa"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </>
              </TabContent>
              <TabContent>
                <>
                  <div className="w-full md:w-[420px] lg:w-[33.8%] max-md:mb-[24px] m-auto  flex flex-col   justify-center ">
                    <div className="w-[71.4%] mx-auto text-lg  md:text-xl">
                      <TabButtons
                        tabHeader={location}
                        type={"location"}
                        selectedTabIndex={selectedTabIndex}
                        handleOnClick={handleOnClick}
                      />
                    </div>
                    {egpContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="shadowEffect flex flex-col w-[95.4%] lg:w-full mx-auto max-w-[420px] p-[10px] gap-4 bg-white rounded-[10px] shadowEffect mt-4 "
                      >
                        <div className="address flex">
                          <span className="me-2">{contact.iconAdds}</span>{" "}
                          <span
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: contact.adds,
                            }}
                          ></span>
                        </div>
                        <div className="phone flex">
                          <span className="me-2">{contact.iconPhone}</span>
                          <span>{contact.phone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="md:w-[94%]  w-full lg:ms-auto max-md:mx-auto lg:w-[60.4%]  h-[246px] sm:h-[382px] xl:h-[616px] rounded-xl overflow-hidden ">
                    {/* <AddressLocation locations={egpLocation} /> */}
                    <iframe
                      className="w-full h-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2816259024455!2d31.2110639!3d30.0147202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846e11ac5de1d%3A0x4bd49368639ecfff!2z2LTYsdmD2Kkg2K_YqNmG2KzYqA!5e0!3m2!1sen!2sus!4v1698688011704!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </>
              </TabContent>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="w-[89.8%] md:w-[89.2%]  bg-[#FFFDFB]  flex flex-col justify-center mx-auto  items-start mb-4  ">
        <div className="  container shadowEffect flex flex-col w-[96.8%] lg:w-[96.5%] min-h-[490px]    mx-auto items-start   rounded-xl  py-[32px] md:py-[57px] xl:py-[75px]">
          <div className=" flex w-full justify-center lg:justify-between mx-auto">
            <div className="max-lg:hidden w-[41.8%] ">
              <img src={contactUsImg} alt="contact us" />
            </div>
            <div className="w-full md:w-[55%] relative ">
              {/* <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce,
/>
<ToastContainer /> */}
              <div className="text-center">
                <HeadingTitle
                  headerDark={"Get in "}
                  headerOrang={"touch"}
                  type="services"
                />
              </div>
              <FormData />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
