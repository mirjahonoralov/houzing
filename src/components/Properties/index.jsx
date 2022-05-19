import React, { useState } from "react";
import { useQuery } from "react-query";
import Card from "../Card";
import { Container, Result, Wrapper } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;
const Properties = () => {
  const [data, setData] = useState([]);
  useQuery(
    "get data",
    () => {
      return fetch(`${url}/v1/houses/list`).then((res) => res.json());
    },
    {
      onSuccess: (res) => setData(res?.dataList[0]),
    }
  );

  return (
    <Container>
      <div className="title">Properties</div>
      <div className="description">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Result>
        <span>{data.length}</span> <div className="description">results</div>
      </Result>
      <Wrapper>
        {data.map((card) => (
          <Card info={card} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Properties;
