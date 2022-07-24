import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/properties/share.svg";
import { ReactComponent as like } from "../../assets/icons/properties/like.svg";
import { ReactComponent as calendar } from "../../assets/icons/properties/calendar.svg";
import { ReactComponent as bed } from "../../assets/icons/properties/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/properties/bath.svg";
import { ReactComponent as ruler } from "../../assets/icons/properties/ruler.svg";
import { ReactComponent as file } from "../../assets/icons/properties/file.svg";
import { ReactComponent as garage } from "../../assets/icons/properties/car.svg";
import user from "../../assets/imgs/no-user.jpg";

const Container = styled.div`
  padding: 30px 130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 50%;
  padding: 0 130px;
  img {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 1440px;
  padding: 0 130px;

  .line {
    background: #e6e9ec;
    height: 1px;
    width: 100%;
    margin: 48px 0;
    width: 100%;
  }
`;

const Content = styled.div`
  width: 80%;
  align-items: flex-start;

  display: flex;
  flex-direction: column;

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

const ContactWrapper = styled.div`
  width: 20%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .img {
    width: 52px;
    img {
      width: 100%;
    }
  }
`;

const Documents = styled.div`
  margin-top: 64px;
  width: 100%;

  .docs {
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
`;

const Doc = styled.div`
  display: flex;
  gap: 24px;
  span {
    display: flex;
    gap: 10px;
  }

  a {
    text-decoration: underline;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const LocationInfo = styled.div`
  margin: 24px 0;
  width: 100%;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  row-gap: 24px;

  span:nth-child(1) {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0d263b;
  }

  span:nth-child(2) {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
`;

const PropertyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 24px;
  width: 100%;
  margin-top: 24px;

  span:nth-child(1) {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0d263b;
  }

  span:nth-child(2) {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
`;

const ScheduleWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .selectors {
    display: flex;
    gap: 36px;
  }

  .ant-select-selector {
    border: none !important;
    border-bottom: 2px solid #e6e9ec !important;
    box-shadow: none;
  }

  .ant-select-arrow {
    right: 0;
  }

  .ant-picker {
    width: 100%;
    border: none;
    border-bottom: 2px solid #e6e9ec !important;
  }

  .inputs {
    display: flex;
    gap: 24px;
  }
`;

const Rates = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const Rate = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  div {
    width: 35%;
    display: flex;
    justify-content: space-between;
  }
`;

const ReviewInputs = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .top {
    width: 100%;
    display: flex;
    gap: 20px;
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
Icons.User = user;
Icons.File = file;

export {
  Container,
  ImgWrapper,
  Wrapper,
  Content,
  Actions,
  Icons,
  Params,
  Price,
  Description,
  User,
  ContactWrapper,
  Documents,
  Doc,
  LocationInfo,
  LocationWrapper,
  PropertyWrapper,
  ScheduleWrapper,
  Rates,
  Rate,
  ReviewInputs,
};
