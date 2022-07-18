import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import {
  Actions,
  Container,
  Content,
  Description,
  Icons,
  Params,
  Price,
  Wrapper,
} from "./style";
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
      <Wrapper>
        <Content>
          <h1>
            Luxury Family Loft by Victoria Park
            <Actions>
              <span>
                <div className="description">Share</div>
                <div className="icon-wrapper">
                  <Icons.Share />
                </div>
              </span>
              <span>
                <div className="description">Like</div>
                <div className="icon-wrapper">
                  <Icons.Like />
                </div>
              </span>
            </Actions>
          </h1>
          <h1>
            <div>
              <div className="description">Quincy St, Brooklyn, NY, USA</div>
              <Params>
                <span>
                  <Icons.Bed />
                  <div className="description">4 beds</div>
                </span>
                <span>
                  <Icons.Bath />
                  <div className="description">4 baths</div>
                </span>
                <span>
                  <Icons.Garage />
                  <div className="description">4 garages</div>
                </span>
                <span>
                  <Icons.Ruler />
                  <div className="description">1200 Sq Ft</div>
                </span>
                <span>
                  <Icons.Calendar />
                  <div className="description">Year Built: 1800</div>
                </span>
              </Params>
            </div>
            <Price>
              <div>
                <span className="delete description">$2,800/mo</span>
                <span className="title">$7,500/mo</span>
              </div>
              <div className="description">Est. Mortgage</div>
            </Price>
          </h1>

          <Description>
            <div className="title">Description</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dicta
              at. Ad voluptatum corrupti ullam in debitis excepturi explicabo
              quam ratione dolorem molestias eos quasi veniam recusandae error
              qui doloremque magnam rem vitae id laudantium, dolores nostrum?
              Neque asperiores, iste dolore repudiandae similique earum adipisci
              pariatur incidunt hic quas, ab laborum nemo tempore? Temporibus
              molestias quia corrupti mollitia cumque, eveniet eius omnis, amet
              commodi enim nihil laudantium impedit ipsum magni.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              asperiores, odio a minima aut molestias impedit at distinctio
              incidunt error corporis maxime dolorum nostrum neque possimus
              assumenda, nulla veniam maiores necessitatibus aspernatur
              repudiandae, natus delectus voluptate? Pariatur odio blanditiis
              natus impedit maxime illo corrupti quibusdam assumenda? Facere
              enim asperiores amet?{" "}
            </p>

            <a href="#">Show more</a>
          </Description>

          {isLoaded && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {center.lat && center.lng && <Marker position={center} />}
            </GoogleMap>
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default SelectedHouse;
