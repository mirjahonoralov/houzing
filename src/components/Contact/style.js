import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 50px 130px;

  @media (max-width: 425px) {
    padding: 30px 15px;
  }
`;

export { Container, Wrapper };
