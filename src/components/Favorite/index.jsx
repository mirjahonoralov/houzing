import React from "react";
import { CardsWrapper, Container, Wrapper } from "./style";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "react-query";
import Card from "../Card";

const Favorite = () => {
  const { request } = useHttp();

  // useQuery(
  //   "",
  //   () => {
  //     const data = request({
  //       url: "",
  //       token: true,
  //     });
  //   },
  //   {
  //     onSuccess: (res) => console.log(res),
  //   }
  // );

  return (
    <Container>
      <Wrapper>
        <div className="title">Favorite</div>
        <div className="subtitle">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
        <CardsWrapper>{/* {data.map(item => <Card />)} */}</CardsWrapper>
      </Wrapper>
    </Container>
  );
};

export default Favorite;
