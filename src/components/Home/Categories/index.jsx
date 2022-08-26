import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Carousel/style";
import {
  Carousel,
  CategoryIcons,
  CategoryWrapper,
  Container,
  Wrapper,
} from "./style";
import apartment from "../../../assets/imgs/apartment.png";
import house from "../../../assets/imgs/house.png";
import villa from "../../../assets/imgs/villa.png";
import office from "../../../assets/imgs/office.png";
import { useHttp } from "../../../hooks/useHttp";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import Loading from "../../Loading";

const Categories = () => {
  const Category = ({ category, media }) => (
    <CategoryWrapper
      onClick={() => navigate(`/properties?category_id=${category?.id}`)}
    >
      <img src={media?.image} alt="categoryImage" />
      <div>{media.icon}</div>
      <h3>{category?.name}</h3>
    </CategoryWrapper>
  );

  const Images = [
    {
      icon: <CategoryIcons.Villa />,
      image: villa,
    },
    {
      icon: <CategoryIcons.Apartment />,
      image: apartment,
    },
    {
      icon: <CategoryIcons.Home />,
      image: villa,
    },
    {
      icon: <CategoryIcons.Business />,
      image: office,
    },
  ];

  const navigate = useNavigate();
  const slider = useRef();
  const [list, setList] = useState([]);
  const { request } = useHttp();
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
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
    ...list.map((item, index) => (
      <Category category={item} key={item.id} media={Images[index % 4]} />
    )),
  ];

  return (
    <Container>
      <div className="title">Categories</div>
      <div className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      {loading ? (
        <Loading />
      ) : (
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
              responsive={responsive}
              items={items}
            />
          </Carousel>
        </Wrapper>
      )}
    </Container>
  );
};

export default Categories;
