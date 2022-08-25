import React, { useState } from "react";
import { Input, Button } from "../Generic";
import { Container, Icon, Wrapper } from "./style";
import { Popover } from "antd";
import { UseReplace, UseSearch } from "../../hooks/functions";
import MobileFilter from "./MobileFilter";
import { useQuery } from "react-query";
import AdvancedSearch from "./AdvancedSearch";
import { useHttp } from "../../hooks/useHttp";
import { useLocation, useNavigate } from "react-router-dom";

const Filter = () => {
  const query = UseSearch();
  const [visible, setVisible] = useState(false);
  const hide = () => setVisible(false);
  const show = () => setVisible(true);

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

  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const onChange = (country) => {
    setState({ ...state, country: country });
    if (search.includes("page"))
      navigate(`${pathname}${UseReplace("page", "")}`);
    navigate(`${pathname}${UseReplace("country", country)}`);
  };

  return (
    <Container>
      <MobileFilter
        onChange={onChange}
        pathname={pathname}
        setState={setState}
        state={state}
        query={query}
      />
      <Wrapper>
        <Input
          placeholder={"Enter a country"}
          pl={44}
          onChange={(e) => onChange(e.target.value)}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement="bottomRight"
          visible={visible}
          content={
            <AdvancedSearch
              state={state}
              setState={setState}
              list={list}
              query={query}
              hide={hide}
            />
          }
          trigger="click"
        >
          <Button type={"secondary"} width={"131px"} onClick={show}>
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
