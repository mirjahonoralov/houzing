import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as bath } from "../../../assets/icons/home/bath.svg";
import { ReactComponent as bed } from "../../../assets/icons/home/bed.svg";
import { ReactComponent as car } from "../../../assets/icons/home/car.svg";
import { ReactComponent as ruler } from "../../../assets/icons/home/ruler.svg";
import { device } from "../../../utils/sizes";

const ExtraWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Container = styled(Carousel)`
  height: fit-content;
  width: 100%;

  @media ${device.tablet} {
    overflow: hidden;
  }
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
  width: 100vw;
  background: #000;

  @media ${device.tablet} {
    width: 768px !important;
    margin-right: calc(384px - 50%);
    height: 300px;
  }
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
  text-align: center;

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

  @media ${device.laptop} {
    h1 {
      font-size: 25px;
    }

    .title {
      margin: 15px !important;
      font-size: 20px;
    }
  }

  @media (max-width: 870px) {
    top: 110px;
    h1 {
      font-size: 20px;
    }

    .title {
      margin: 0 !important;
      font-size: 18px;
    }

    button {
      height: 30px !important;
      width: 50px !important;
      min-width: 50% !important;
    }
  }

  @media (max-width: 630px) {
    top: 130px;

    .title {
      font-size: 15px;
    }

    h1 {
      margin-bottom: 0;
      font-size: 15px;
      width: 90vw;
    }
    /* h4 {
      display: none;
    } */
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin: 25px 0;

  div {
    color: #fff;
  }

  @media ${device.laptop} {
    margin: 15px 0;
  }

  @media (max-width: 870px) {
    margin: 10px 0;
  }

  @media (max-width: 630px) {
    display: none;
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

const Icon = styled.div`
  font-size: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  opacity: 0.5;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  color: #fff;
  z-index: 999;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${({ position }) => position}
  padding: 12px;
  cursor: pointer;

  color: #0d263b;
  :hover {
    opacity: 0.97;
  }
  box-shadow: 0 0 10px #404040;

  @media (max-width: 630px) {
    width: 30px !important;
    height: 30px !important;
    padding: 2px;
    top: 45%;
    svg {
      font-size: 15px;
    }
  }
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
