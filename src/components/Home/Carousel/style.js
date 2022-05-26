import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as left } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as right } from "../../../assets/icons/right-arrow.svg";

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

const Img = styled.img`
  width: 100%;
  max-width: 1440px;
  background: #000;
`;

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

export { Container, Img, Wrapper, Icon, ExtraWrapper };
