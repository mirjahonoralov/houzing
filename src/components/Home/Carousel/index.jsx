import React, { useRef } from "react";
import { Container, Img, Wrapper, Icon, ExtraWrapper } from "./style";
import home1 from "../../../assets/imgs/home1.jpg";
import home2 from "../../../assets/imgs/home2.png";

const Carousel = () => {
  const slider = useRef();
  return (
    <ExtraWrapper>
      <Wrapper>
        <Icon.Right onClick={() => slider.current.prev()} />
        <Icon.Left onClick={() => slider.current.next()} />
        <Container dots autoplay ref={slider}>
          <Img src={home1} alt="test" />
          <Img src={home2} />
        </Container>
      </Wrapper>
    </ExtraWrapper>
  );
};

export default Carousel;
