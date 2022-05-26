import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { Icon } from "../Carousel/style";
import { Carousel, Container, Wrapper } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const Title = ({ text }) => (
  <div style={{ width: "500px", height: "200px" }}>{text}</div>
);

const Categories = () => {
  const slider = useRef();
  const [list, setList] = useState([]);
  let items = [...list.map((item) => <Title text={item} />)];

  useQuery(
    "",
    () => {
      return fetch(`${url}/v1/categories`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        if (res?.dataList?.[0]) setList(res?.dataList?.[0] || []);
      },
    }
  );

  return (
    <Container>
      <div className="title">Categories</div>
      <div className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Carousel>
          <Icon.Right onClick={() => slider.current.slidePrev()} />
          <Icon.Left onClick={() => slider.current.slideNext()} />
          <AliceCarousel ref={slider} autoWidth items={items} />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Categories;
