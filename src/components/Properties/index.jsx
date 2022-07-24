import { Select, Spin } from "antd";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import Card from "../Card";
import Filter from "../Filter";
import { Container, Result, Wrapper } from "./style";
const { Option } = Select;

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("list");
  const [loading, setLoading] = useState(false);

  const { request } = useHttp();
  useQuery(
    ["", search, filter],
    () => {
      setLoading(true);
      return request({ url: `/v1/houses/${filter}${search}`, token: true });
    },
    {
      onSuccess: (res) => {
        setLoading(false);
        setData(res?.data || []);
      },
    }
  );
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(`/properties/:${id}`);
  };

  const handleChange = (value) => {
    setFilter(value);
  };

  return (
    <>
      <Filter />
      <Container>
        <div className="title">
          {filter === "list" ? "Properties" : "Favorites"}
        </div>
        <div className="description">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
        <Result>
          <div>{data?.length} results</div>
          <div>
            Sort by:{" "}
            <Select
              defaultValue={filter}
              style={{
                width: 170,
              }}
              onChange={handleChange}
            >
              <Option value="list">Newest Listings</Option>
              <Option value="getAll/favouriteList">Favorite</Option>
            </Select>
          </div>
        </Result>
        <Wrapper>
          {loading ? (
            <Spin size="large" />
          ) : (
            data?.map((card) => (
              <Card
                key={card.id}
                info={card}
                onClick={() => onClick(card.id)}
              />
            ))
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Properties;
