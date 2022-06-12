import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as left } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as right } from "../../../assets/icons/right-arrow.svg";
import { ReactComponent as bath } from "../../../assets/icons/home/bath.svg";
import { ReactComponent as bed } from "../../../assets/icons/home/bed.svg";
import { ReactComponent as car } from "../../../assets/icons/home/car.svg";
import { ReactComponent as ruler } from "../../../assets/icons/home/ruler.svg";

const ExtraWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100vw;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
`;

const Container = styled(Carousel)`
  height: fit-content;
  width: 100%;
`;

const Opacity = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  position: absolute;
  z-index: 2;
`;

const Img = styled.img`
  width: 100%;
  max-width: 1440px;
  background: #000;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;

  h1 {
    color: #fff;
    font-size: 40px;
  }

  .title,
  h4,
  svg {
    color: #fff;
  }
  .title:nth-child(even) {
    margin: 24px 0 40px 0;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin: 25px 0;

  div {
    color: #fff;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

const InfoIcon = styled.div``;

InfoIcon.Bath = bath;
InfoIcon.Bed = bed;
InfoIcon.Car = car;
InfoIcon.Ruler = ruler;

const Icon = styled.div``;

Icon.Right = styled(right)`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  opacity: 0.5;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  color: #fff;
  padding: 7px;
  z-index: 999;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 5%;
  padding: 12px;
  cursor: pointer;
  & path {
    fill: #0d263b;
  }
  :hover {
    opacity: 0.97;
  }
  box-shadow: 0 0 10px #404040;
`;

Icon.Left = styled(left)`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  opacity: 0.5;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  color: #fff;
  padding: 7px;
  z-index: 999;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 5%;
  padding: 12px;
  cursor: pointer;
  & path {
    fill: #0d263b;
  }
  :hover {
    opacity: 0.97;
  }
  box-shadow: 0 0 10px #404040;
`;

export {
  Container,
  Img,
  Wrapper,
  Icon,
  ExtraWrapper,
  Content,
  ItemsWrapper,
  Opacity,
  Info,
  InfoIcon,
};
