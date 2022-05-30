import React from "react";
import { useQuery } from "react-query";
import Filter from "../Filter";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Info from "./Info";
import Recommended from "./Recommended";
import { Container } from "./style";
const { REACT_APP_BASE_URL: url } = process.env;

const Home = () => {
  useQuery(
    "some",
    () => {
      return fetch(`${url}/public/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "webbrain@gmail.com",
          password: "webbrain",
        }),
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        if (res?.authenticationToken) {
          localStorage.setItem("token", res?.authenticationToken);
        }
      },
      keepPreviousData: true,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
      <Info />
      <Categories />
    </Container>
  );
};

export default Home;
