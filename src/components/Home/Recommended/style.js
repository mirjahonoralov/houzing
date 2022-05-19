import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const Carousel = styled.div`
  width: 1440px;
  display: flex;
  padding: 0 130px;
  overflow: hidden;
`;
export { Container, Wrapper, Carousel };
