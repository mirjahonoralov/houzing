import React, { useRef, useState } from "react";
import {
  Container,
  Img,
  Wrapper,
  Icon,
  ExtraWrapper,
  Content,
  ItemsWrapper,
  Opacity,
  InfoIcon,
  Info,
} from "./style";
import home1 from "../../../assets/imgs/home1.jpg";
import home2 from "../../../assets/imgs/home2.png";
import { Button } from "../../Generic";

const Carousel = () => {
  const [info, setInfo] = useState();
  const slider = useRef();
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
                {info?.houseDetails?.bed || 0} Bed
              </div>
            </Info>
            <Info>
              <InfoIcon.Bath />
              <div className="description">
                {info?.houseDetails?.bath || 0} Baths
              </div>
            </Info>
            <Info>
              <InfoIcon.Car />
              <div className="description">
                {info?.houseDetails?.garage || 0} Garage
              </div>
            </Info>
            <Info>
              <InfoIcon.Ruler />
              <div className="description">
                {info?.houseDetails?.room || 0} Sq ft
              </div>
            </Info>
          </ItemsWrapper>
          <div className="title">$5,250/mo</div>
          <Button>Read more</Button>
        </Content>
        <Icon.Right onClick={() => slider.current.prev()} />
        <Icon.Left onClick={() => slider.current.next()} />
        <Container dots autoplay ref={slider}>
          <Opacity />
          <Img src={home1} alt="test" />
          <Img src={home2} />
        </Container>
      </Wrapper>
    </ExtraWrapper>
  );
};

export default Carousel;
