import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../../Card";
import { Icon } from "../Carousel/style";
import { Carousel, Container, Wrapper } from "./style";

const Recommended = () => {
  const slider = useRef();
  const items = [
    <Card mr={20} />,
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
          <Icon.Right onClick={() => slider.current.slidePrev()} />
          <Icon.Left onClick={() => slider.current.slideNext()} />
          <AliceCarousel ref={slider} autoWidth items={items} />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Recommended;
