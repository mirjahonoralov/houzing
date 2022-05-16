import React from "react";
import Filter, { advancedSearch } from "../Filter";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Filter />
      {advancedSearch}
    </Container>
  );
};

export default Home;
