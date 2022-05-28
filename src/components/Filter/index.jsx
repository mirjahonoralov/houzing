import React, { useState } from "react";
import { Input, Button } from "../Generic";

import { Advanced, Container, Icon, Inputs, Wrapper } from "./style";
import { Popover, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { UseReplace, UseSearch } from "../../hooks/functions";
import MobileFilter from "./MobileFilter";
import { useQuery } from "react-query";
const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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

  const onChange = ({ target }) => {
    const { value, name } = target;
    setState({ ...state, [name]: value });
    navigate(`${pathname}${UseReplace(name, value)}`);
  };
  const { Option } = Select;

  const onClear = () => {
    setState({
      country: "",
      region: "",
      city: "",
      zip: "",
      address: "",
      house: "",
      rooms: "",
      minPrice: "",
      maxPrice: "",
    });
    navigate("/properties");
    console.log(query.get("category_id"));
  };

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
        if (res?.dataList?.[0]) setList(res?.dataList?.[0] || []);
      },
    }
  );

  // const onSelect = ({ target }) => {
  //   navigate(`/properties?category_id=${target.value}`);
  // };
  const onSelect = (value) => {
    navigate(`/properties?category_id=${value}`);
  };

  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Inputs>
        <Input
          value={state.country}
          name={"country"}
          placeholder={"Country"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.region}
          name={"region"}
          placeholder={"Region"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.city}
          name={"city"}
          placeholder={"City"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.zip}
          name={"zip"}
          placeholder={"Zip"}
          pl={20}
          onChange={onChange}
        />
      </Inputs>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Inputs>
        <Input
          value={state.address}
          name={"address"}
          placeholder={"Address"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.house}
          name={"house"}
          placeholder={"House name"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.rooms}
          name={"rooms"}
          placeholder={"Rooms"}
          pl={20}
          onChange={onChange}
        />
      </Inputs>
      <Advanced.Title>Price</Advanced.Title>
      <Inputs>
        <Input
          value={state.min}
          name={"min"}
          placeholder={"Min price"}
          pl={20}
          onChange={onChange}
        />
        <Input
          value={state.max}
          name={"max"}
          placeholder={"Max price"}
          pl={20}
          onChange={onChange}
        />
        <Select defaultValue={query.get("category_id")} onChange={onSelect}>
          {list.length > 0 &&
            list.map((item, id) => (
              <Option key={id} value={id + 1}>
                {item}
              </Option>
            ))}
        </Select>
      </Inputs>
      <Inputs>
        {/* <select
          name="select"
          id=""
          defaultValue={query.get("category_id")}
          onChange={onSelect}
        >
          {list.length > 0 &&
            list.map((item, id) => (
              <option key={id} value={id + 1}>
                {item}
              </option>
            ))}
        </select> */}
        <Button width={"130px"} type={"secondary"}>
          Cancel
        </Button>
        <Button width={"130px"} type={"primary"} onClick={onClear}>
          Clear
        </Button>
      </Inputs>
    </Advanced>
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
          content={advancedSearch}
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
