import styled from "styled-components";
import { device } from "../../../utils/sizes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  width: 100%;

  @media (max-width: 570px) {
    padding: 0 10px;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 32px;
`;

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

  @media ${device.laptop} {
    /* padding: 50px; */
  }

  @media (max-width: 900px) {
    padding: 0 22%;
  }
  @media (max-width: 650px) {
    padding: 0 15%;
  }
`;

export { Container, Wrapper, Carousel };
