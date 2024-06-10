import { v4 as uuidv4 } from "uuid";
import Tabs from "../../components/Tabs/Tabs";
import TabContent from "../../components/Tabs/components/TabContent";
import "../../styles/App.css";
import { customIcon } from "../../assets/icons/customIcons";
import AddressLocation from "./components/Location/AddressLocation";
import FormData from "./components/FormData/FormData";
import { HeadingTitle } from "../../components/text";
import TabButtons from "../../components/Tabs/components/TabButtons";
import React from "react";
import { contactUsImg } from "../../assets";

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
  const saudiContacts = contactsData.filter(
    (contact) => contact.location === "saudi"
  );
  const egpContacts = contactsData.filter(
    (contact) => contact.location === "egp"
  );
  const soaudiLocation = locations.filter((locate) => locate.zoon === "saudi");

  const egpLocation = locations.filter((locate) => locate.zoon === "egp");
  //
  const location = ["saudi", "egypt"];
  const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0);
  const handleOnClick = React.useCallback(
    (index: number) => {
      setSelectedTabIndex(index);
      console.log(index);
    },
    [setSelectedTabIndex]
  );
  return (
    <>
      <section className=" bg-[#FFFDFB]   ">
        {/* w-[90.4%] lg:w-[50%]  */}
        <div className="lg:p-[10px] mt-6 mx-auto rounded-3xl container ">
          <div className="flex flex-col lg:flex-row items-center   justify-between lg:w-[98.5%] mx-auto mb-[32px] lg:mb-[62px]">
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
                    <AddressLocation locations={soaudiLocation} />
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
                  <div className="w-full md:w-[94%] lg:ms-auto max-md:mx-auto lg:w-[60.4%]  h-[246px] sm:h-[382px] xl:h-[616px] rounded-xl overflow-hidden ">
                    <AddressLocation locations={egpLocation} />
                  </div>
                </>
              </TabContent>
            </Tabs>
          </div>
        </div>
      </section>
      <section className="w-[89.8%] md:w-[89.2%]  bg-[#FFFDFB]  flex flex-col justify-center mx-auto  items-start mb-4  ">
        {/* max-md:w-[90.4%]  */}
        <div className="  container shadowEffect flex flex-col w-[96.8%] lg:w-[96.5%] min-h-[490px]    mx-auto items-start   rounded-xl  py-[32px] md:py-[57px] xl:py-[75px]">
          <div className=" flex w-full justify-center lg:justify-between mx-auto">
            <div className="max-lg:hidden w-[41.8%] ">
              <img src={contactUsImg} alt="contact us" />
            </div>
            <div className="w-full md:w-[55%] ">
              <HeadingTitle
                headerDark={"Get in "}
                headerOrang={"touch"}
                type="services"
              />
              <FormData />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
