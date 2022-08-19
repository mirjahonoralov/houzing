import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  align-items: center;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 550px) {
    .title,
    .subtitle {
      padding: 0 30px;
      text-align: center;
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  position: relative;
`;

const Carousel = styled.div`
  padding: 0 130px;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  /* overflow: hidden; */
  width: 100%;

  .alice-carousel__stage {
    display: flex;
    gap: 20px;
  }

  .alice-carousel__prev-btn-wrapper,
  .alice-carousel__next-btn-wrapper {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 0 50px;
  }
`;

const CategoryWrapper = styled.div`
  width: 280px;
  height: 350px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  h3 {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 500px) {
    width: 220px;
    height: 280px;
  }
`;

export { Container, Wrapper, Carousel, CategoryWrapper };
