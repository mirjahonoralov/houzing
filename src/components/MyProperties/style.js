import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/table/edit.svg";
import { ReactComponent as trash } from "../../assets/icons/table/trash.svg";
import { device } from "../../utils/sizes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 130px;

  @media ${device.laptop} {
    padding: 50px;
  }

  @media (max-width: 500px) {
    padding: 15px;
  }
`;

const TableWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  width: 100%;
  padding: 24px 30px;

  @media (max-width: 1100px) {
    padding: 15px;
  }
`;

const Table = styled.table`
  width: 100%;

  thead {
    th {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #0d263b;
      text-align: start;
    }
  }

  tbody {
    tr {
      td {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #696969;
        padding-right: 50px;

        @media (max-width: 1100px) {
          padding-right: 20px;
        }
      }
    }
  }
`;

const Icons = styled.div``;
Icons.Edit = styled(edit)``;
Icons.Trash = styled(trash)``;

const CardWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  align-items: flex-start;
  margin: 8px 0;
  justify-content: space-between;

  main {
    display: flex;
    gap: 16px;
  }

  button {
    background: #0d263b;
    border-radius: 3px;
    padding: 5px 12px;
    color: #fff;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    min-width: 80px;
  }
`;

const ImgWrapper = styled.div`
  min-width: 113px;
  height: 113px;
  background: #c4c4c4;
  border-radius: 3px;

  img {
    width: 100%;
  }
`;

export {
  Container,
  Top,
  Wrapper,
  Table,
  TableWrapper,
  Icons,
  CardWrapper,
  ImgWrapper,
};
