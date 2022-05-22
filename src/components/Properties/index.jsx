import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Card from "../Card";
import Filter from "../Filter";
import { Container, Result, Wrapper } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const { search } = useLocation();
  const [data, setData] = useState([]);
  useQuery(
    [search],
    () => fetch(`${url}/v1/houses/list${search}`).then((res) => res.json()),
    {
      onSuccess: (res) => setData(res.dataList[0] || []),
    }
  );

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
            <Card key={card.id} info={card} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default Properties;
