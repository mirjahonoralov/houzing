import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { Container } from "./style";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const SelectedHouse = () => {
  const { id } = useParams();
  const [house, setHouse] = useState({});

  const { request } = useHttp();
  useQuery(
    "get",
    () =>
      request({
        url: `/v1/houses/${id.replace(":", "")}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      }),
    {
      onSuccess: (res) => {
        setHouse(res?.data);
        console.log(res);
      },
    }
  );

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
    <Container>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {center.lat && center.lng && <Marker position={center} />}
        </GoogleMap>
      )}
    </Container>
  );
};

export default SelectedHouse;
