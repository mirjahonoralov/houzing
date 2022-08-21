import { Select, Spin } from "antd";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import Card from "../Card";
import Filter from "../Filter";
import { Container, Result, Top, Wrapper } from "./style";
const { Option } = Select;

const Properties = () => {
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("list");
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);

  const { request } = useHttp();
  useQuery(
    [search, filter, setFilter, refetch],
    () => {
      setLoading(true);
      return request({ url: `/v1/houses/${filter}${search}` });
    },
    {
      onSuccess: (res) => {
        setLoading(false);
        setData(res?.data || []);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
    }
  );
  const navigate = useNavigate();
  const onClick = (id) => navigate(`/properties/:${id}`);

  const handleChange = (value) => setFilter(value);

  return (
    <>
      <Filter />
      <Container>
        <Top>
          <div className="title">
            {filter === "list" ? "Properties" : "Favorites"}
          </div>
          <div className="description">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
        </Top>
        <Result>
          <div>{data?.length} results</div>
          <div>
            Sort by:{" "}
            <Select
              defaultValue={filter}
              value={filter}
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
                setFilter={setFilter}
                refetch={refetch}
                setRefetch={setRefetch}
              />
            ))
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Properties;
