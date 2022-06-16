import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = () => {
  const [center, setCenter] = useState({
    lat: 41.311081,
    lng: 69.240562,
  });

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
    setCenter({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

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
