import React from "react";
import {
  Container,
  Footer,
  Icon,
  Img,
  Info,
  ItemsWrapper,
  Person,
} from "./style";
import img1 from "../../assets/imgs/img2.png";
import person from "../../assets/icons/card/person.png";

const Card = ({ info }) => {
  return (
    <Container>
      <Img src={info?.img || img1} />
      <Info>
        <Person src={person} />
        <div className="subtitle">New Apartment Nice Wiew</div>
        <div className="description">Quincy St, Brooklyn, NY, USA</div>
        <ItemsWrapper>
          <Info.Item>
            <Icon.Bed />
            <div className="description">{info?.bed?.count || 0} Bed</div>
          </Info.Item>
          <Info.Item>
            <Icon.Bath />
            <div className="description">{info?.bath?.count || 0} Baths</div>
          </Info.Item>
          <Info.Item>
            <Icon.Car />
            <div className="description">{info?.car?.count || 0} Garage</div>
          </Info.Item>
          <Info.Item>
            <Icon.Ruler />
            <div className="description">{info?.qr?.count || 0} Sq ft</div>
          </Info.Item>
        </ItemsWrapper>
      </Info>
      <Footer>
        <Info.Item>
          <div className="description delete">$2800/mo</div>
          <div className="subtitle">$7500/mo</div>
        </Info.Item>
        <main>
          <Icon.Resize />
          <span>
            <Icon.Love />
          </span>
        </main>
      </Footer>
    </Container>
  );
};

export default Card;
