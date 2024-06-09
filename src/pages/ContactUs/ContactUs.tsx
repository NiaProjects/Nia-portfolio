import { v4 as uuidv4 } from "uuid";
import Tabs from "../../components/Tabs/Tabs";
import TabContent from "../../components/Tabs/components/TabContent";
import "../../styles/App.css";
import { customIcon } from "../../assets/icons/customIcons";
import AddressLocation from "./components/Location/AddressLocation";
import FormData from "./components/FormData/FormData";
import { HeadingTitle } from "../../components/text";

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
  return (
    <>
      <section className=" bg-[#FFFDFB] container  flex flex-col  items-start mb-4 justify-between ">
        {/* w-[90.4%] xl:w-[50%]  */}
        <div className="p-[10px] mt-6 mx-auto rounded-3xl  w-full ">
          <Tabs type="location">
            <TabContent>
              <>
                <div className="flex flex-col lg:w-[56%]">
                  {saudiContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="shadowEffect flex flex-col  md:flex-row p-[10px] gap-4 bg-white rounded-[10px] shadowEffect mt-4 "
                    >
                      <div className=" gap-[18px]">
                        <div className="flex">
                          <span className="me-2">{contact.iconAdds}</span>{" "}
                          <span
                            className="address"
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
                    </div>
                  ))}
                </div>
                <div className="w-full xl:w-[55%] h-[246px] bg-slate-300 shadowEffect rounded-xl overflow-hidden mt-4">
                  <AddressLocation locations={soaudiLocation} />
                </div>
              </>
            </TabContent>
            <TabContent>
              <>
                {egpContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="shadowEffect capitalize text-lg font-normal flex flex-col p-[10px] gap-4 bg-white rounded-[10px] shadowEffect mt-4"
                  >
                    <div className="flex flex-col gap-[18px]">
                      <div className="flex">
                        <span className="me-2">{contact.iconAdds}</span>{" "}
                        <span
                          className="address"
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
                  </div>
                ))}
                <div className="w-full h-[246px] bg-slate-300 shadowEffect rounded-xl overflow-hidden mt-4">
                  <AddressLocation locations={egpLocation} />
                </div>
              </>
            </TabContent>
          </Tabs>
        </div>
      </section>
      <section className="h-screen   container flex flex-col  items-start mb-4 bg-[#FFFDFB] ">
        <div className="w-[90.4%] shadowEffect flex flex-col bg-white mx-auto items-start  min-h-[490px] rounded-xl  py-[32px] md:py-[57px] xl:py-[75px]">
          <header className="text-center mx-auto mb-[48px] md:mb-[58px] xl:mb-[80px]">
            <HeadingTitle
              headerDark={"Get in "}
              headerOrang={"touch"}
              type="services"
            />
          </header>
          <FormData />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
