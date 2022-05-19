import React from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../../Card";
import { Carousel, Container, Wrapper } from "./style";

const Recommended = () => {
  const items = [
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
  ];
  return (
    <Container>
      <div className="title">Recommended</div>
      <div className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Carousel>
          <AliceCarousel autoWidth items={items} />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Recommended;
