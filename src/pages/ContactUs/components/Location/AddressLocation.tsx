import {
  APIProvider,
  AdvancedMarker,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { motion } from "framer-motion";
import { customIcon } from "../../../../assets/icons/customIcons";

interface IProps {
  locations: any;
}

const MapKey = "AIzaSyALVzDd_-YceNQIpzRFq0w60jTU3RhV22I";

const AddressLocation = ({ locations }: IProps) => {
  return (
    <>
      <APIProvider
        apiKey={MapKey}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          defaultZoom={10}
          disableDefaultUI={true}
          defaultCenter={{ lat: 29.987664269730214, lng: 31.135320380036145 }}
          mapId={"626858346ad1e161"}
        >
          {locations?.map((item) => (
            <AdvancedMarker key={item.key} position={item.location}>
              <div className="locationIcon relative">
                <div className="absolute z-20">{customIcon.locationPin}</div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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
