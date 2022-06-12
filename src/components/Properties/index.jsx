import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import Card from "../Card";
import Filter from "../Filter";
import { Container, Result, Wrapper } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const { request } = useHttp();
  useQuery(
    ["", search],
    // () => fetch(`${url}/v1/houses/list${search}`).then((res) => res.json()),
    () => {
      return request({ url: `/v1/houses/list${search}` });
    },
    {
      onSuccess: (res) => setData(res.data || []),
    }
  );
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/properties/:${id}`);
  };

  return (
    <>
      <Filter />
      <Container>
        <div className="title">Properties</div>
        <div className="description">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
        <Result>
          <span>{data?.length}</span> <div className="description">results</div>
        </Result>
        <Wrapper>
          {data?.map((card) => (
            <Card key={card.id} info={card} onClick={() => onClick(card.id)} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Properties;
