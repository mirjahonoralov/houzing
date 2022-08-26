import styled from "styled-components";
import { device } from "../../../utils/sizes";

const Carousel = styled.div`
  position: relative;
  padding: 0 130px;
  /* max-width: 1440px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .alice-carousel__prev-btn-wrapper,
  .alice-carousel__next-btn-wrapper {
    display: none;
  }

  @media (max-width: 1370px) {
    padding: 0 7%;
  }

  @media ${device.laptop} {
    padding: 0 9%;
  }

  @media (max-width: 900px) {
    padding: 0 22%;
  }
  @media (max-width: 650px) {
    padding: 0 15%;
  }
  @media (max-width: 560px) {
    padding: 0 13%;
  }
`;

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

export { Carousel, Icon };
