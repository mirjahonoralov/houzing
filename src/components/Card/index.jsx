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
import noImg from "../../assets/imgs/no_image.jpeg";
import noUser from "../../assets/imgs/no-user.jpg";

const Card = ({ info, mr, onClick }) => {
  return (
    <Container mr={mr}>
      <Img onClick={onClick} src={info?.attachments[0]?.imgPath || noImg} />
      <Info>
        <Person src={info?.user?.img || noUser} />
        <div
          className="subtitle"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {info?.description}
        </div>
        <div
          className="description"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {info?.name || "house"}, {info?.address || "address"}{" "}
          {info?.city || "City"}, {info?.country || "Country"}
        </div>
        <ItemsWrapper>
          <Info.Item>
            <Icon.Bed />
            <div className="description">
              {info?.houseDetails?.bed || 0} Bed
            </div>
          </Info.Item>
          <Info.Item>
            <Icon.Bath />
            <div className="description">
              {info?.houseDetails?.bath || 0} Baths
            </div>
          </Info.Item>
          <Info.Item>
            <Icon.Car />
            <div className="description">
              {info?.houseDetails?.garage || 0} Garage
            </div>
          </Info.Item>
          <Info.Item>
            <Icon.Ruler />
            <div className="description">
              {info?.houseDetails?.room || 0} Sq ft
            </div>
          </Info.Item>
        </ItemsWrapper>
      </Info>
      <Footer>
        <Info.Item>
          <div className="description delete">${info?.price || 0}</div>
          <div className="subtitle">${info?.salePrice || 0}</div>
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
