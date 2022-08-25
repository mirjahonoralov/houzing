import styled from "styled-components";
import { device } from "../../utils/sizes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  align-items: center;
  width: 100%;

  .pagination {
    margin-top: 30px;

    .ant-pagination-options {
      display: none;
    }
  }
`;

const Top = styled.div`
  @media (max-width: 500px) {
    .title,
    .description {
      padding: 0 30px;
      text-align: center;
    }
  }
`;

const Result = styled.div`
  margin: 70px 0 16px 0;
  padding: 0 130px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-right: 5px;
  }

  .ant-select-selector {
    border: none !important;
    border-bottom: 2px solid #e6e9ec !important;
    box-shadow: none;
  }

  .ant-select-arrow {
    right: 0;
  }

  @media ${device.laptop} {
    padding: 0 50px;
    margin-top: 30px;
  }

  @media ${device.mobileL} {
    padding: 0 30px;

    flex-direction: column;
    gap: 15px;
  }
`;

const Wrapper = styled.div`
  padding: 0 130px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    padding: 50px;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Wrapper, Result, Top, Loading };
