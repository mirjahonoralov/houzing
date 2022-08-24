import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Img,
  Wrapper,
  ExtraWrapper,
  Content,
  ItemsWrapper,
  Opacity,
  InfoIcon,
  Info,
  Icon,
} from "./style";
import home1 from "../../../assets/imgs/home1.jpg";
import home2 from "../../../assets/imgs/home2.png";
import { Button } from "../../Generic";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Carousel = () => {
  const [info, setInfo] = useState();
  const slider = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [window.innerWidth]);
  const iconsPosition = width < 500 ? "2%" : "5%";

  return (
    <ExtraWrapper>
      <Wrapper>
        <Content>
          <h1>Skyper Pool Partment</h1>
          <h4>112 Glenwood Ave Hyde Park, Boston, MA</h4>
          <ItemsWrapper>
            <Info>
              <InfoIcon.Bed />
              <div className="description">
                {info?.houseDetails?.bed || 3} Bed
              </div>
            </Info>
            <Info>
              <InfoIcon.Bath />
              <div className="description">
                {info?.houseDetails?.bath || 2} Baths
              </div>
            </Info>
            <Info>
              <InfoIcon.Car />
              <div className="description">
                {info?.houseDetails?.garage || 1} Garage
              </div>
            </Info>
            <Info>
              <InfoIcon.Ruler />
              <div className="description">
                {info?.houseDetails?.room || 5} Sq ft
              </div>
            </Info>
          </ItemsWrapper>
          <div className="title">$5,250/mo</div>
          <Button>Read more</Button>
        </Content>
        <Icon
          position={{ right: iconsPosition }}
          onClick={() => slider.current.next()}
        >
          <LeftOutlined />
        </Icon>
        <Icon
          position={{ left: iconsPosition }}
          onClick={() => slider.current.prev()}
        >
          <RightOutlined />
        </Icon>
        <div style={{ position: "relative" }}>
          <Opacity />
          <Container dots autoplay ref={slider}>
            <Img src={home1} alt="test" />
            <Img src={home2} />
          </Container>
        </div>
      </Wrapper>
    </ExtraWrapper>
  );
};

export default Carousel;
