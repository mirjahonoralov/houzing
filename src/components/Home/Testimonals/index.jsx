import React from "react";
import CommonCarousel from "../CommonCarousel";
import { Container, Wrapper } from "./style";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const responsive = {
    0: { items: 1 },
    900: { items: 2 },
    1300: { items: 3 },
  };
  const items = [
    <Testimonial />,
    <Testimonial />,
    <Testimonial />,
    <Testimonial />,
  ];
  return (
    <Container>
      <Wrapper>
        <div>
          <div className="title">Testimonials</div>
          <div className="description">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
        </div>
        <CommonCarousel responsive={responsive} items={items} />
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
