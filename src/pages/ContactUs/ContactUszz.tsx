import React from "react";
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

interface IProps {}
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
  
const ContactUszz = ({}: IProps) => {
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
  return <></>;
};

export default ContactUszz;
