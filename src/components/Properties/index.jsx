import { Pagination, Select, Spin } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { UseReplace, UseSearch } from "../../hooks/functions";
import { useHttp } from "../../hooks/useHttp";
import Card from "../Card";
import Filter from "../Filter";
import { Container, Loading, Result, Top, Wrapper } from "./style";
const { Option } = Select;

const Properties = () => {
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("list");
  const [loading, setLoading] = useState(false);
  const [totalElements, setTotalElements] = useState(null);
  const query = UseSearch();
  const { pathname } = useLocation();

  const { mutate: filterRequest } = useMutation(() => {
    setLoading(true);
    return request({
      url: `/v1/houses/${filter}${search && search}`,
      token: true,
    });
  });

  const { mutate: fetchData } = useMutation(() => {
    setLoading(true);
    return request({
      url: `/v1/houses/${filter}${search ? search : "?page=1"}`,
    });
  });

  useEffect(() => {
    fetchFilteredData();
  }, [setFilter, filter, filterRequest]);

  const fetchFilteredData = () =>
    filterRequest("filter", {
      onSuccess: (res) => {
        setLoading(false);
        setData(res?.data || []);
        setTotalElements(res?.map.total_elements || 0);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
    });

  useEffect(() => {
    if (!search) navigate(`${pathname}${UseReplace("page", 1)}`);
    localStorage.setItem("pageNumber", 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { request } = useHttp();

  useEffect(() => {
    fetchData("fetchData", {
      onSuccess: (res) => {
        setLoading(false);
        setData(res?.data || []);
        setTotalElements(res?.map.total_elements || 0);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
    });
  }, [search, fetchData]);

  const navigate = useNavigate();

  const onClick = (id) => navigate(`/properties/:${id}`);

  const handleChange = (value) => setFilter(value);

  const onPageChange = (page) => {
    localStorage.setItem("pageNumber", page);
    navigate(`${pathname}${UseReplace("page", page)}`);
  };

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
        {loading && (
          <Loading>
            <Spin size="large" />
          </Loading>
        )}
        <Wrapper>
          {!loading &&
            data?.map((card) => (
              <Card
                key={card.id}
                info={card}
                onClick={() => onClick(card.id)}
                setFilter={setFilter}
                fetchFilteredData={fetchFilteredData}
              />
            ))}
        </Wrapper>

        <Pagination
          className="pagination"
          current={Number(query.get("page")) || 1}
          onChange={onPageChange}
          total={totalElements}
          pageSize={20}
        />
      </Container>
    </>
  );
};

export default Properties;
