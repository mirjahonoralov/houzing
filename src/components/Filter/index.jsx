import React, { useState } from "react";
import { Input, Button } from "../Generic";
import { Container, Icon, Wrapper } from "./style";
import { Popover } from "antd";
import { UseSearch } from "../../hooks/functions";
import MobileFilter from "./MobileFilter";
import { useQuery } from "react-query";
import AdvancedSearch from "./AdvancedSearch";
import { useHttp } from "../../hooks/useHttp";

const Filter = () => {
  const query = UseSearch();

  const [state, setState] = useState({
    country: query.get("country"),
    region: query.get("region"),
    city: query.get("city"),
    zip: query.get("zip"),
    address: query.get("address"),
    house: query.get("house"),
    rooms: query.get("rooms"),
    minPrice: query.get("min"),
    maxPrice: query.get("max"),
  });

  const [list, setList] = useState([]);
  const { request } = useHttp();
  useQuery(
    "",
    () =>
      request({
        url: "/v1/categories/list",
        // headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    {
      onSuccess: (res) => {
        if (res?.data) setList(res?.data || []);
      },
    }
  );

  return (
    <Container>
      <MobileFilter />
      <Wrapper>
        <Input
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
          pl={44}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          content={
            <AdvancedSearch
              state={state}
              setState={setState}
              list={list}
              query={query}
            />
          }
          trigger="click"
        >
          <Button type={"secondary"} width={"131px"}>
            <Icon.Setting />
            Advanced
          </Button>
        </Popover>
        <Button type={"primary"} width={"131px"}>
          <Icon.Search />
          Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Filter;
