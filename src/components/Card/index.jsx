import React, { useState } from "react";
import {
  Container,
  Footer,
  Icon,
  Img,
  Info,
  ItemsWrapper,
  Like,
  Person,
} from "./style";
import noImg from "../../assets/imgs/no_image.jpeg";
import noUser from "../../assets/imgs/no-user.jpg";
import { useMutation } from "react-query";
import { useHttp } from "../../hooks/useHttp";
import { useEffect } from "react";

const Card = ({ info, mr, onClick, setFilter }) => {
  const { request } = useHttp();
  const [likeStatus, setLikeStatus] = useState(null);

  const { mutate: addFavorite } = useMutation(() =>
    request({
      method: "PUT",
      url: `/v1/houses/addFavourite/${info?.id}?favourite=${likeStatus}`,
      body: { id: info?.id, favourite: likeStatus },
      token: true,
    })
  );

  useEffect(() => {
    likeStatus !== null &&
      addFavorite("like", {
        onSuccess: (res) => setFilter("getAll/favouriteList"),
        onError: (err) => console.log(err, "add favorite error"),
      });
  }, [addFavorite, likeStatus, setFilter]);

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
          <Like
            isFavorite={info?.favorite}
            onClick={() =>
              info?.favorite ? setLikeStatus(false) : setLikeStatus(!likeStatus)
            }
          >
            {info?.favorite ? <Icon.LoveWhite /> : <Icon.Love />}
          </Like>
        </main>
      </Footer>
    </Container>
  );
};

export default Card;
