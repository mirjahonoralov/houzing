import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { useHttp } from "../../../hooks/useHttp";
import Card from "../../Card";
import Loading from "../../Loading";
import { Icon } from "../Carousel/style";
import { Carousel, Container, Wrapper } from "./style";

const Recommended = () => {
  const slider = useRef();
  const { request } = useHttp();
  const [houses, setHouses] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);

  const items = [
    ...houses.map((house) => (
      <Card
        mr={width > 900 ? 10 : 0}
        key={house.id}
        info={house}
        isHomePage={true}
      />
    )),
  ];

  useQuery("deps", () => request({ url: "/v1/houses/list" }), {
    onSuccess: (res) => {
      const all = res?.data;
      const recommendedHouses = [];
      for (let i = 0; i < 4; i++)
        recommendedHouses.push(all[Math.floor(Math.random() * all.length)]);

      setHouses(recommendedHouses);
      setLoading(false);
    },
    enabled: !houses.length,
  });

  const responsive = {
    0: { items: 1 },
    900: { items: 2 },
    1300: { items: 3 },
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const iconsPosition = width < 1024 ? "3%" : 560 ? "2%" : "5%";

  return (
    <Container>
      <div className="title">Recommended</div>
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
              items={items}
              responsive={responsive}
            />
          </Carousel>
        </Wrapper>
      )}
    </Container>
  );
};

export default Recommended;
