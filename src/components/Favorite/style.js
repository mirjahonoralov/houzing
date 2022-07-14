import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  padding: 64px 130px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export { Container, Wrapper, CardsWrapper };
