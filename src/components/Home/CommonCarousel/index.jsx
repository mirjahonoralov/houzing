import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Icon } from "./style";

const CommonCarousel = ({ items, responsive }) => {
  const slider = useRef();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const iconsPosition = width < 1024 ? "3%" : 560 ? "2%" : "5%";
  return (
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
  );
};

export default CommonCarousel;
