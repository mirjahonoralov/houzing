import React from "react";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Info from "./Info";
import Recommended from "./Recommended";
import { Container } from "./style";
import Testimonials from "./Testimonals";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Info />
      <Categories />
      <Testimonials />
    </Container>
  );
};

export default Home;
