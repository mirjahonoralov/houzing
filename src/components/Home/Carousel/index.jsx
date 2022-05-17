import React, { useRef } from "react";
import { Container, Img } from "./style";
import home1 from "../../../assets/imgs/home1.jpg";
import home2 from "../../../assets/imgs/home2.png";

const Carousel1 = () => {
  return (
    <Container dots autoplay>
      {/* <Img src={home1} />
      <Img src={home2} /> */}
      <div>
        <h2>first</h2>
      </div>
      <div>
        <h2>second</h2>
      </div>
    </Container>
  );
};

export default Carousel1;
