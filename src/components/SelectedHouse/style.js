import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/properties/share.svg";
import { ReactComponent as like } from "../../assets/icons/properties/like.svg";
import { ReactComponent as calendar } from "../../assets/icons/properties/calendar.svg";
import { ReactComponent as bed } from "../../assets/icons/properties/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/properties/bath.svg";
import { ReactComponent as ruler } from "../../assets/icons/properties/ruler.svg";
import { ReactComponent as garage } from "../../assets/icons/properties/car.svg";

const Container = styled.div`
  display: flex;
  padding: 130px;
  /* max-width: 1440px; */
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1440px;
`;

const Content = styled.div`
  width: 80%;

  h1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 25px;
  span {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon-wrapper {
      background: #f6f8f9;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border-radius: 100%;
      cursor: pointer;
    }
  }
`;

const Params = styled.div`
  margin-top: 36px;
  display: flex;
  gap: 25px;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Price = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Description = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin-top: 16px;
  }
`;

const Icons = styled.div``;

Icons.Share = share;
Icons.Like = like;
Icons.Calendar = calendar;
Icons.Bed = bed;
Icons.Bath = bath;
Icons.Ruler = ruler;
Icons.Garage = garage;

export {
  Description,
  Container,
  Wrapper,
  Content,
  Actions,
  Icons,
  Params,
  Price,
};
