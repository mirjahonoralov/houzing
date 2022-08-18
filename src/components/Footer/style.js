import styled from "styled-components";
import { ReactComponent as f } from "../../assets/icons/footer/f.svg";
import { ReactComponent as t } from "../../assets/icons/footer/t.svg";
import { ReactComponent as i } from "../../assets/icons/footer/i.svg";
import { ReactComponent as l } from "../../assets/icons/footer/l.svg";
import { ReactComponent as phone } from "../../assets/icons/footer/phone.svg";
import { ReactComponent as email } from "../../assets/icons/footer/email.svg";
import { ReactComponent as map } from "../../assets/icons/footer/map.svg";
import { device } from "../../utils/sizes";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #0d263b;
  margin-top: 70px;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  padding: 48px 130px;
  color: #fff;
  width: 100%;
  gap: 30px;

  @media ${device.laptop} {
    padding: 48px 50px;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #fff;
  max-width: 300px;

  h3 {
    color: #fff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  p {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;

const Icons = styled.div``;
Icons.Facebook = f;
Icons.Twitter = t;
Icons.Instagram = i;
Icons.Linkedin = l;
Icons.Phone = phone;
Icons.Email = email;
Icons.Map = map;

export { Container, Wrapper, Column, Icons };
