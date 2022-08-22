import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useEffect } from "react";

const Map = ({ setData, data }) => {
  const [center, setCenter] = useState(null);
  // const center =
  useEffect(() => {
    setCenter({
      lat: data.locations.latitude,
      lng: data.locations.longitude,
    });
  }, [data]);
  console.log(center, "center");
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4",
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onMapClick = (e) => {
    // setCenter({ latitude: e.latLng.lat(), longitude: e.latLng.lng() });
    setData({
      ...data,
      locations: { latitude: e.latLng.lat(), longitude: e.latLng.lng() },
    });
  };
  console.log(
    {
      lng: data.locations.latitude,
      lat: data.locations.longitude,
    },
    "location"
  );
  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onClick={onMapClick}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
