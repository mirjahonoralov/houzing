import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/table/edit.svg";
import { ReactComponent as trash } from "../../assets/icons/table/trash.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 130px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
`;

const Wrapper = styled.div`
  margin-top: 32px;
`;

const TableWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  width: 100%;
  padding: 24px 30px;
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
      }
    }
  }
`;

const Icons = styled.div``;
Icons.Edit = styled(edit)``;
Icons.Trash = styled(trash)``;

export { Container, Top, Wrapper, Table, TableWrapper, Icons };
