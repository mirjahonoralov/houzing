import React from "react";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Info from "./Info";
import Recommended from "./Recommended";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Info />
      <Categories />
    </Container>
  );
};

export default Home;
