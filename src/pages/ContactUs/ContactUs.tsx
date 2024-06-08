import React from "react";
import {
  APIProvider,
  AdvancedMarker,
  Map,
  MapCameraChangedEvent,
  Pin,
} from "@vis.gl/react-google-maps";
import AddressLocation from "./components/Location/AddressLocation";
import { v4 as uuidv4 } from "uuid";

interface IProps {}
interface ContactInfo {
  id: any;
  adds: string;
  phone: string;
  addsIcon: string;
  phoneIcon: string;
}
interface ContactsData {
  saudi: ContactInfo;
}
const MapKey = "AIzaSyALVzDd_-YceNQIpzRFq0w60jTU3RhV22I";
type Poi = { key: string; location: google.maps.LatLngLiteral };

const locations: Poi[] = [
  {
    key: "operaHouse",
    location: { lat: 29.987664269730214, lng: 31.135320380036145 },
  },
  {
    key: "tarongaZoo",
    location: { lat: 29.940071799838737, lng: 31.220967166544746 },
  },
  {
    key: "manlyBeach",
    location: { lat: 29.984292325438595, lng: 31.254057970423073 },
  },
];
const contactsData: ContactsData[] = [
  {
    saudi: {
      id: uuidv4(),
      adds: "Salhiya-    Riyadh-12662,SaudiArabia ",
      phone: "+9660126176182 ",
      addsIcon: "",
      phoneIcon: "",
    },
  },
];
const ContactUs = ({}: IProps) => {
  return (
    <section className="h-screen flex flex-col  items-start">
      <div className="connectionInfo bg-red-200 cardStyle flex flex-col justify-center  w-[90.4%] mx-auto mb-4 ">
        {contactsData?.map((contactData) => {
          const { id, adds, phone, addsIcon, phoneIcon } = contactData.saudi;
          console.log(id, adds, phone, addsIcon, phoneIcon);
          return (
            <div className="bg-sky-600 h-1/2" key={id}>
              {adds}
              {phone}
              {addsIcon}
              {phoneIcon}
            </div>
          );
        })}
      </div>
      <div className="mapInfo bg-stone-500 w-[90.4%] min-h-[246px] mx-auto rounded-[10px]  overflow-hidden  ">
        <AddressLocation />
      </div>
    </section>
  );
};

export default ContactUs;
