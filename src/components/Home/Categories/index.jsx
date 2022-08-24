import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Carousel/style";
import { Carousel, CategoryWrapper, Container, Wrapper } from "./style";
import categoryImg from "../../../assets/imgs/category.png";
import { useHttp } from "../../../hooks/useHttp";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect } from "react";

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

  const responsive = {
    0: { items: 1 },
    850: { items: 2 },
    1000: { items: 3 },
    1400: { items: 4 },
  };

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const iconsPosition = width < 500 ? "2%" : "5%";

  const items = [
    ...list.map((item) => <Category category={item} key={item.id} />),
  ];

  return (
    <Container>
      <div className="title">Categories</div>
      <div className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Carousel>
          <Icon
            position={{ right: iconsPosition }}
            onClick={() => slider.current.slideNext()}
          >
            <LeftOutlined />
          </Icon>
          <Icon
            position={{ left: iconsPosition }}
            onClick={() => slider.current.slidePrev()}
          >
            <RightOutlined />
          </Icon>
          <AliceCarousel
            mouseTracking
            keyboardNavigation
            ref={slider}
            // autoWidth
            responsive={responsive}
            items={items}
          />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Categories;
