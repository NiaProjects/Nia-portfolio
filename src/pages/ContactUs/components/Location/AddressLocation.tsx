import React from "react";

import {
  APIProvider,
  AdvancedMarker,
  Map,
  MapCameraChangedEvent,
  Pin,
} from "@vis.gl/react-google-maps";
import { logo } from "../../../../assets";
import { customIcon } from "../../../../assets/icons/customIcons";
import { motion } from "framer-motion";
interface IProps {}
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

const AddressLocation = ({}: IProps) => {
  return (
    <>
      <APIProvider
        apiKey={MapKey}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        {/*
         1: Entire World
        5: Landmass/continent
        10: City
        15: Streets
        20: Buildings 
        */}
        <Map
          defaultZoom={10}
          gestureHandling={"red"}
          disableDefaultUI={true}
          style={{ borderRadius: "50%" }}
          defaultCenter={{ lat: 29.987664269730214, lng: 31.135320380036145 }}
          mapId={"626858346ad1e161"}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
        >
          {locations.map((poi: Poi) => (
            <AdvancedMarker key={poi.key} position={poi.location}>
              <div className="locationIcon relative">
                <div className="absolute z-20">{customIcon.locationPin}</div>
                <motion.div
                  //   animate={{
                  //     scale: [1, 1.2, 1],
                  //   }}
                  //   transition={{
                  //     duration: 2,
                  //     repeat: Infinity,
                  //     ease: "easeInOut",
                  //   }}
                  className="circleLocation absolute w-10 h-10 rounded-full bg-[#ef7b0054] top-0 z-0 transform -translate-x-[15%]  -translate-y-[15%]  "
                ></motion.div>
              </div>
            </AdvancedMarker>
          ))}
          <AdvancedMarker position={{ lat: 29.5, lng: -81.2 }}></AdvancedMarker>
        </Map>
      </APIProvider>
    </>
  );
};

export default AddressLocation;
