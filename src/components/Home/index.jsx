import React from "react";
import Filter from "../Filter";
import Carousel from "./Carousel";
import Recommended from "./Recommended";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      {/* <Recommended /> */}
    </Container>
  );
};

export default Home;
