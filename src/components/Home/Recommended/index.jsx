import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../../Card";
import { Icon } from "../Carousel/style";
import { Carousel, Container, Wrapper } from "./style";

const Recommended = () => {
  const slider = useRef();
  const items = [
    <Card mr={10} />,
    <Card mr={10} />,
    <Card mr={10} />,
    <Card mr={10} />,
    <Card mr={10} />,
  ];

  const responsive = {
    0: { items: 1 },
    900: { items: 2 },
    1200: { items: 3 },
  };

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [window.innerWidth]);

  const iconsPosition = width < 500 ? "2%" : "5%";

  return (
    <Container>
      <div className="title">Recommended</div>
      <div className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Carousel>
          <Icon
            position={{ right: iconsPosition }}
            onClick={() => slider.current.slideNext()}
          >
            <LeftOutlined />
          </Icon>
          <Icon
            position={{ left: iconsPosition }}
            onClick={() => slider.current.slidePrev()}
          >
            <RightOutlined />
          </Icon>
          <AliceCarousel
            mouseTracking
            keyboardNavigation
            ref={slider}
            items={items}
            responsive={responsive}
          />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Recommended;
