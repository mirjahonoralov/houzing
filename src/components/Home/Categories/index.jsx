import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Carousel/style";
import { Carousel, CategoryWrapper, Container, Wrapper } from "./style";
import categoryImg from "../../../assets/imgs/category.png";
import { useHttp } from "../../../hooks/useHttp";

const Categories = () => {
  const Category = ({ category }) => (
    <CategoryWrapper
      onClick={() => navigate(`/properties?category_id=${category?.id}`)}
    >
      <img src={categoryImg} alt="categoryImg" />
      <h3>{category?.name}</h3>
    </CategoryWrapper>
  );

  const navigate = useNavigate();
  const slider = useRef();
  const [list, setList] = useState([]);
  const { request } = useHttp();
  useQuery(
    "",
    () =>
      request({
        url: "/v1/categories/list",
        // headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    {
      onSuccess: (res) => {
        if (res?.data) setList(res?.data || []);
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
          <AliceCarousel
            ref={slider}
            autoWidth
            items={[
              ...list.map((item) => <Category category={item} key={item.id} />),
            ]}
          />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Categories;
