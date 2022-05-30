import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Icon } from "../Carousel/style";
import { Carousel, CategoryWrapper, Container, Wrapper } from "./style";
import categoryImg from "../../../assets/imgs/category.png";

const { REACT_APP_BASE_URL: url } = process.env;

const Categories = () => {
  const Category = ({ text, id }) => (
    <CategoryWrapper
      onClick={() => navigate(`/properties?category_id=${id + 1}`)}
    >
      <img src={categoryImg} alt="categoryImg" />
      <h3>{text}</h3>
    </CategoryWrapper>
  );

  const navigate = useNavigate();
  const slider = useRef();
  const [list, setList] = useState([]);

  useQuery(
    "",
    () => {
      return fetch(`${url}/v1/categories`, {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        if (res?.data) setList(res?.data || []);
      },
    }
  );

  return (
    <Container>
      <div className="title">Categories</div>
      <div className="subtitle">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Carousel>
          <Icon.Right onClick={() => slider.current.slidePrev()} />
          <Icon.Left onClick={() => slider.current.slideNext()} />
          <AliceCarousel
            ref={slider}
            autoWidth
            items={[
              ...list.map((item, idx) => (
                <Category text={item} key={idx} id={idx} />
              )),
            ]}
          />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Categories;
