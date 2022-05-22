import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  align-items: center;
  padding: 0 130px;
`;

const Result = styled.div`
  margin: 70px 0 16px 0;
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  span {
    margin-right: 5px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1440px;
`;

export { Container, Wrapper, Result };
