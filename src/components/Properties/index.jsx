import { Pagination, Select, Spin } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { UseReplace, UseSearch } from "../../hooks/functions";
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
  const [totalElements, setTotalElements] = useState(null);
  const query = UseSearch();
  const { pathname } = useLocation();

  const { request } = useHttp();
  useQuery(
    [search, filter, setFilter, refetch],
    () => {
      setLoading(true);
      return request({
        url: `/v1/houses/${filter}${search ? search : "?page=1"}`,
      });
    },
    {
      onSuccess: (res) => {
        setLoading(false);
        setData(res?.data || []);
        setTotalElements(res?.map.total_elements || 0);
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

  const onChange = (page) => navigate(`${pathname}${UseReplace("page", page)}`);

  useEffect(() => {
    navigate(`${pathname}${UseReplace("page", 1)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        <Pagination
          className="pagination"
          current={Number(query.get("page")) || 1}
          onChange={onChange}
          total={totalElements}
          pageSize={20}
        />
      </Container>
    </>
  );
};

export default Properties;
