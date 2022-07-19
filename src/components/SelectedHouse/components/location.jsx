import React from "react";
import { LocationInfo, LocationWrapper } from "../style";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Location = ({ house }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: house?.location?.latitude,
    lng: house?.location?.longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4",
  });

  return (
    <LocationWrapper>
      <div className="subtitle">Location</div>
      <LocationInfo>
        <div>
          <span>Address: </span>
          <span>{house?.address || "not assigned"}</span>
        </div>
        <div>
          <span>City: </span>
          <span>{house?.city || "not assigned"}</span>
        </div>
        <div>
          <span>Area: </span>
          <span>{house?.area || "not assigned"}</span>
        </div>
        <div>
          <span>State/County: </span>
          <span>{house?.county || "not assigned"}</span>
        </div>
        <div>
          <span>Zip: </span>
          <span>{house?.zipCode || "not assigned"}</span>
        </div>
        <div>
          <span>Country: </span>
          <span>{house?.country || "not assigned"}</span>
        </div>
      </LocationInfo>

      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {center.lat && center.lng && <Marker position={center} />}
        </GoogleMap>
      )}
    </LocationWrapper>
  );
};

export default Location;
